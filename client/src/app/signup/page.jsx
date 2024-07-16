'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '../../components/ui/Button'
import Logo from '../../../public/static/logo.png'
import GoogleIcon from '../../assets/Icons/google.svg'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import OTPInput from 'react-otp-input'
import useSetCookie from '@/components/cookies/useSetCookie'
import useGetCookie from '@/components/cookies/useGetCookie'
import useRemoveCookie from '@/components/cookies/useRemoveCookies'
import { useRouter } from 'next/navigation'
import ToastNotification from '@/components/ui/ToastNotification'
import useDebounce from '@/components/hooks/useDebounce'
import { Check, CheckCircle, XCircle } from '@phosphor-icons/react'
import cn from 'mxcn'

function Page() {
	const setCookie = useSetCookie()
	const getCookie = useGetCookie()
	const removeCookie = useRemoveCookie()
	const router = useRouter()
	const [email, setEmail] = useState('')

	const [otp, setOtp] = useState('')
	const [isOtpSent, setIsOtpSent] = useState(false)
	const [isOtpVerified, setIsOtpVerified] = useState(false)

	const [validUsername, setValidUsername] = useState(false)

	const [username, setUsername] = useState('')
	const [name, setName] = useState('')

	const debouncedValue = useDebounce(username, 1000)

	useEffect(() => {
		if (debouncedValue) {
			const userObject = { username }
			axios
				.post(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/check?queryType=username`,
					{ userObject },
					{
						headers: {
							Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
						},
					}
				)
				.then((res) => {
					if (res.status === 200) {
						setValidUsername(res.data.availabilityStatus)
					}
				})
				.catch((err) => {
					ToastNotification({ message: 'Something went wrong' })
				})
		}
	}, [debouncedValue])

	useEffect(() => {
		const accessToken = getCookie('accessToken')
		let loginState = getCookie('loginState')
		if (accessToken) {
			router.push('/bookmarks')
		}
		if (loginState) {
			console.log(loginState)
			loginState = JSON.parse(loginState)
			if (new Date(loginState.expires) > new Date()) {
				if (loginState.newUser) {
					router.push('/signin')
				} else {
					setIsOtpSent(true)
					setEmail(loginState.email)
				}
			} else {
				removeCookie('loginState')
			}
		}
	}, [])

	const onSubmit = async (data) => {
		try {
			let newUser = false
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/check?queryType=email`,
				{
					userObject: { email: data.email },
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
					},
				}
			)
			if (res.status === 200) {
				newUser = res.data.foundUser
			}

			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/initialize?queryType=email`,
				{ userObject: { email: data.email } },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
					},
				}
			)
			if (response.status === 200) {
				ToastNotification({
					title: 'OTP Sent',
					message: 'OTP has been sent to your email',
					type: 'success',
				})
				const expirationTimeInMinutes = 4
				const expirationDate = new Date(
					new Date().getTime() + expirationTimeInMinutes * 60 * 1000
				)

				setCookie(
					'loginState',
					JSON.stringify(
						{
							...response.data.data,
							email: data.email,
							expires: expirationDate,
							newUser,
						},
						{ expires: expirationDate }
					)
				)
				if (newUser) {
					router.push('/signin')
				} else {
					setIsOtpSent(true)
				}
			} else {
				setIsOtpSent(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const onSubmitOtp = async (data) => {
		let loginState = JSON.parse(getCookie('loginState'))
		const userObject = {
			email: data.email,
			otp: data.otp,
			name: data.name,
			username: data.username,
		}

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/callback/email?state=${loginState.state}&code=${userObject.otp}`,
				{
					userObject: {
						...userObject,
					},
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
					},
				}
			)
			if (response.status === 200) {
				setCookie('accessToken', response.data.data.session_token, {
					expires: 30,
				})
				removeCookie('loginState')
				setIsOtpVerified(true)
				router.push('/bookmarks')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleButtonClick = async () => {
		if (!email.trim()) {
			console.log(email)
			return
		} else if (!isOtpSent) {
			await onSubmit({ email })
		} else if (!isOtpVerified) {
			let loginState = getCookie('loginState')
			if (!loginState || new Date(loginState.expires) > new Date()) {
				setIsOtpSent(false)
				ToastNotification({
					title: 'Error',
					message: 'OTP has expired',
					type: 'error',
				})
				return
			}

			loginState = JSON.parse(loginState)

			if (loginState.otp !== otp) {
				ToastNotification({
					title: 'Error',
					message: 'OTP is incorrect',
					type: 'error',
				})
				return
			}

			ToastNotification({
				title: 'Success',
				message: 'OTP verified',
				type: 'success',
			})
			setIsOtpVerified(true)
		} else {
			if (!username.trim() || !name.trim() || !validUsername) {
				ToastNotification({
					title: 'Error',
					message: 'Username and name are required or invalid',
					type: 'error',
				})
				return
			}
			await onSubmitOtp({ email, otp, name, username })
		}
	}

	const handleGoogleLogin = async () => {
		try {
			//     const response= await axios.get(
			//         `${process.env.SERVER_URL}/auth/initialize?queryType=google`,
			//         {
			//             headers: {
			//                 'Content-Type': 'application/json',
			//                 Authorization: `Bearer ${process.env.CLIENT_TOKEN}`,
			//             },

			//         }
			//     )

			//   if (response.status === 302) {
			//     window.location.href = response.headers.location;
			//   } else {
			//     console.error("Unexpected response status:", response.status);
			//   }

			const response = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/initialize?queryType=google`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
					},
					crossorigin: true,
					// mode: 'no-cors',
				}
			)
			const res = await response.json()
			console.log(response, res)
			if (response.status === 200) {
				// localStorage.setItem('state', res.state)
				window.location.href = res.url
			}
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='flex flex-col p-10 gap-9'>
				<div className='fixed top-8'>
					<Image src={Logo} className='w-12 h-12' alt='Logo' />
					<p className='font-semibold text-primary libre-font'>
						bloks
					</p>
				</div>

				<div className='pt-4 space-y-6'>
					<div className='relative flex flex-col items-center'>
						<p className='text-3xl font-semibold libre-font'>
							Get started
						</p>
						<p className='text-sm font-medium text-[#6B6B6B]'>
							Organise your bookmarks, favorite tutorials,
							articles in one place{' '}
						</p>
						<p className='text-sm font-medium text-[#6B6B6B]'>
							Already have an account?{' '}
							<Link href={'/login'} className='text-primary'>
								Login
							</Link>
						</p>
					</div>

					{!isOtpVerified && (
						<div
							animate={{ opacity: 1 }}
							className='space-y-6 h-60'
						>
							<div className='flex flex-col gap-2'>
								<label
									htmlFor='email'
									className='text-sm font-semibold'
								>
									Email
								</label>
								<input
									type='text'
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									placeholder='enter email here'
									className='h-10 outline-none px-2 text-sm border-b-2 border-[#B8CBED] bg-secondary'
								/>
							</div>

							<AnimatePresence>
								{isOtpSent && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 20 }}
										className='flex flex-col gap-2'
									>
										<label
											htmlFor='email'
											className='text-sm font-semibold'
										>
											OTP
										</label>
										{/* <input type="text" onChange={e => setOtp(e.target.value)} value={otp} placeholder='enter email here' className='h-10 outline-none px-2 text-sm border-b-2 border-[#B8CBED] bg-secondary' /> */}

										<OTPInput
											value={otp}
											onChange={setOtp}
											numInputs={4}
											containerStyle={{
												display: 'flex',
												gap: '12px',
											}}
											inputType='text'
											inputStyle={{
												width: '40px',
												height: '40px',
												borderBottom:
													'2px solid #B8CBED',
												background: '#EAF2FF',
												display: 'flex',
												justifyContent: 'center',
												outline: 'none',
											}}
											renderInput={(props) => (
												<input {...props} />
											)}
										/>
									</motion.div>
								)}
							</AnimatePresence>

							<div className='space-y-2'>
								<Button
									className='w-full h-10'
									onClick={handleButtonClick}
								>
									{isOtpSent ? 'Confirm OTP' : 'Send OTP'}
								</Button>
								<div
									className={`${
										isOtpSent ? 'hidden' : ''
									} space-y-2`}
								>
									<div className='flex items-center gap-2 text-[#9CB1DA]'>
										<hr className='w-full border-[#9CB1DA]' />
										<span>or</span>
										<hr className='w-full border-[#9CB1DA]' />
									</div>

									<Button
										onClick={handleGoogleLogin}
										variant={'outline'}
										disabled={isOtpSent}
										className={cn(
											'w-full h-10 text-primary border-primary',
											isOtpSent
												? 'opacity-0 cursor-default'
												: 'opacity-100'
										)}
									>
										<Image
											src={GoogleIcon}
											className='w-6 h-6'
										/>
										Sign in with Google
									</Button>
								</div>{' '}
							</div>
						</div>
					)}

					{/* after verification */}
					<AnimatePresence>
						{isOtpVerified && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className='space-y-6 h-60'
							>
								<div className='flex flex-col gap-2'>
									<label
										htmlFor='email'
										className='text-sm font-semibold'
									>
										Username
									</label>
									<div className='relative'>
										<input
											type='text'
											onChange={(e) =>
												setUsername(e.target.value)
											}
											value={username}
											placeholder='username'
											className='h-10 outline-none px-2 text-sm border-b-2 w-full border-[#B8CBED] bg-secondary'
										/>
										{validUsername && (
											<CheckCircle
												size={24}
												weight='thin'
												className='absolute right-1 top-1/2 -translate-y-1/2 text-green-500'
											/>
										)}
										{!validUsername && (
											<XCircle
												size={24}
												weight='thin'
												className='absolute right-1 top-1/2 -translate-y-1/2 text-red-500'
											/>
										)}
									</div>
								</div>

								<div className='flex flex-col gap-2'>
									<label
										htmlFor='email'
										className='text-sm font-semibold'
									>
										Name
									</label>
									<input
										type='text'
										onChange={(e) =>
											setName(e.target.value)
										}
										value={name}
										placeholder='name'
										className='h-10 outline-none px-2 text-sm border-b-2 border-[#B8CBED] bg-secondary'
									/>
								</div>

								<Button
									className='w-full h-10'
									onClick={handleButtonClick}
								>
									Create account
								</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

export default Page
