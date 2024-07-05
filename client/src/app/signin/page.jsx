'use client'

import axios from 'axios'
import useGetCookie from '../../components/cookies/useGetCookie'
import useSetCookie from '../../components/cookies/useSetCookie'
import useRemoveCookie from '../../components/cookies/useRemoveCookies'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../../components/ui/Button'
import Logo from '../../../public/static/logo.png'
import GoogleIcon from '../../assets/Icons/google.svg'
import RedditIcon from '../../assets/Icons/reddit.svg'
import TwitterIcon from '../../assets/Icons/twitter.svg'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import OTPInput from 'react-otp-input'
import ToastNotification from '@/components/ui/ToastNotification'
import cn from 'mxcn'
import { IoCloseCircleOutline } from 'react-icons/io5'

const page = () => {
	const setCookie = useSetCookie()
	const getCookie = useGetCookie()
	const removeCookie = useRemoveCookie()
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [otp, setOtp] = useState('')
	const [isOtpSent, setIsOtpSent] = useState(false)
	const [isOtpVerified, setIsOtpVerified] = useState(false)

	useEffect(() => {
		const accessToken = getCookie('accessToken')
		let loginState = getCookie('loginState')
		if (accessToken) {
			router.push('/bookmarks')
		}
		if (loginState) {
			loginState = JSON.parse(loginState)

			if (new Date(loginState.expires) > new Date()) {
				if (!loginState.newUser) {
					router.push('/signup')
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
				if (!newUser) {
					router.push('/signup')
				} else {
					setIsOtpSent(true)
				}
			} else {
				setIsOtpSent(false)
			}
		} catch (error) {}
	}

	const onSubmitOtp = async (data) => {
		let loginState = getCookie('loginState')
		if (!loginState || new Date(loginState.expires) > new Date()) {
			setIsOtpSent(false)
			ToastNotification({
				title: 'OTP Error',
				message: 'OTP has expired',
				type: 'error',
			})
			return
		}
		loginState = JSON.parse(loginState)
		// console.log(loginState)
		if (loginState.otp != data.otp) {
			ToastNotification({
				title: 'OTP Error',
				message: 'OTP is incorrect',
				type: 'error',
			})
			return
		}
		const userObject = {
			email: data.email,
			otp: data.otp,
			state: loginState.state
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
		} catch (error) {}
	}

	const handleButtonClick = async () => {
		if (!email.trim()) return
		if (!isOtpSent) {
			await onSubmit({ email })
		} else {
			await onSubmitOtp({ email, otp })
		}
	}
	const handleGoogleLogin = async () => {
		try {
			//     const response= await axios.get(
			//         `${process.env.SERVER_URL}/auth/initialize?query_type=google`,
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
					redirect: 'follow',
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
		// <div className='flex items-center justify-center w-full h-full'>
		// 	<div className='flex flex-col p-10 gap-9'>
		// 		{/* <div className='fixed top-8'>
		// 			<Image src={Logo} className='w-12 h-12' />
		// 			<p className='font-semibold text-primary libre-font'>
		// 				bloks
		// 			</p>
		// 		</div> */}

		// 		<div className='pt-4 space-y-6'>
		// 			{/* <div className='relative flex flex-col items-center'>
		// 				<p className='text-3xl font-semibold libre-font'>
		// 					Welcome back
		// 				</p>
		// 				<p className='text-sm font-medium text-[#6B6B6B]'>
		// 					Organise your bookmarks, favorite tutorials,
		// 					articles in one place{' '}
		// 				</p>
		// 				<p className='text-sm font-medium text-[#6B6B6B]'>
		// 					Already have an account?{' '}
		// 					<Link href={'/signup'} className='text-primary'>
		// 						Signup
		// 					</Link>
		// 				</p>
		// 			</div> */}

		// 			<div animate={{ opacity: 1 }} className='space-y-6 h-60'>
		// 				<div className='flex flex-col gap-2'>
		// 					<label
		// 						htmlFor='email'
		// 						className='text-sm font-semibold'
		// 					>
		// 						Email
		// 					</label>
		// 					<input
		// 						type='text'
		// 						onChange={(e) => setEmail(e.target.value)}
		// 						value={email}
		// 						placeholder='enter email here'
		// 						className='h-10 outline-none px-2 text-sm border-b-2 border-[#B8CBED] bg-secondary'
		// 					/>
		// 				</div>
		// 				<AnimatePresence>
		// 					{isOtpSent && (
		// 						<motion.div
		// 							initial={{ opacity: 0, y: 20 }}
		// 							animate={{ opacity: 1, y: 0 }}
		// 							exit={{ opacity: 0, y: 20 }}
		// 							className='flex flex-col gap-2'
		// 						>
		// 							<label
		// 								htmlFor='email'
		// 								className='text-sm font-semibold'
		// 							>
		// 								OTP
		// 							</label>
		// 							{/* <input type="text" onChange={e => setOtp(e.target.value)} value={otp} placeholder='enter email here' className='h-10 outline-none px-2 text-sm border-b-2 border-[#B8CBED] bg-secondary' /> */}

		// 							<OTPInput
		// 								value={otp}
		// 								onChange={setOtp}
		// 								numInputs={4}
		// 								containerStyle={{
		// 									display: 'flex',
		// 									gap: '12px',
		// 								}}
		// 								inputType='text'
		// 								inputStyle={{
		// 									width: '40px',
		// 									height: '40px',
		// 									borderBottom: '2px solid #B8CBED',
		// 									background: '#EAF2FF',
		// 									display: 'flex',
		// 									justifyContent: 'center',
		// 									outline: 'none',
		// 								}}
		// 								renderInput={(props) => (
		// 									<input {...props} />
		// 								)}
		// 							/>
		// 						</motion.div>
		// 					)}
		// 				</AnimatePresence>

		// 				<div className='space-y-2'>
		// 					<Button
		// 						className='w-full h-10'
		// 						onClick={handleButtonClick}
		// 					>
		// 						{isOtpSent ? 'Confirm OTP' : 'Send OTP'}
		// 					</Button>

		// 					<div
		// 						className={`${
		// 							isOtpSent ? 'hidden' : ''
		// 						} space-y-2`}
		// 					>
		// 						<div className='flex items-center gap-2 text-[#9CB1DA]'>
		// 							<hr className='w-full border-[#9CB1DA]' />
		// 							<span>or</span>
		// 							<hr className='w-full border-[#9CB1DA]' />
		// 						</div>

		// 						<Button
		// 							onClick={handleGoogleLogin}
		// 							variant={'outline'}
		// 							disabled={isOtpSent}
		// 							className={cn(
		// 								'w-full h-10 text-primary border-primary',
		// 								isOtpSent
		// 									? 'opacity-0 cursor-default'
		// 									: 'opacity-100'
		// 							)}
		// 						>
		// 							<Image
		// 								src={GoogleIcon}
		// 								className='w-6 h-6'
		// 							/>
		// 							Sign in with Google
		// 						</Button>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className='flex flex-col items-center justify-center min-h-screen py-2 '>
			<div
				className='w-full max-w-md p-8 space-y-4  relative'
				animate={{ opacity: 1 }}
			>
				<div className='absolute top-2 left-2'>Logo </div>
				<div className=' '>
					<label
						htmlFor='email'
						className='text-sm font-semibold text-gray-500'
					>
						Email
					</label>
					<div className='flex justify-end items-center'>
						{' '}
						<input
							type='text'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							placeholder='Enter Email'
							className='w-full px-4   text-[#4F555A] bg-[#eaf0f78d] shadow-lg py-3 rounded-lg focus:outline-none'
						/>
						<IoCloseCircleOutline
							className='absolute h-6 w-6 text-[#4f555a6e] cursor-pointer place-items-end mr-2'
							onClick={() => {
								!isOtpSent && setEmail('')
							}}
						/>
					</div>
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
								className='text-sm font-semibold text-gray-500'
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
									background: '#EAF2FF',
									display: 'flex',
									justifyContent: 'center',
									outline: 'none',
									borderRadius: '8px', // Added for rounded corners
									boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added for box shadow
									color: '#4B5563', // Equivalent to text-tray-600 color
								}}
								renderInput={(props) => <input {...props} />}
							/>
						</motion.div>
					)}
				</AnimatePresence>

				<button
					className='w-full py-3 p-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'
					onClick={handleButtonClick}
				>
					{isOtpSent ? 'Confirm OTP' : 'Send OTP'}
				</button>
				<div className='flex items-center justify-center my-4 space-x-2'>
					<span className='block h-px bg-gray-300 w-14'></span>
					<span className='text-sm text-gray-500'>
						Or continue with
					</span>
					<span className='block h-px bg-gray-300 w-14'></span>
				</div>
				<div className='flex justify-center space-x-4'>
					<Button
						className='flex items-center justify-center w-20 h-12 text-lg text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-100'
						onClick={handleGoogleLogin}
						disabled={isOtpSent}
					>
						<Image src={GoogleIcon} className='w-6 h-6' />
					</Button>
					<Button
						className='flex items-center justify-center w-20 h-12 text-lg text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-100'
						disabled={isOtpSent}
					>
						<Image src={RedditIcon} className='w-6 h-6' />
					</Button>
					<Button
						className='flex items-center justify-center w-20 h-12 text-lg text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-100'
						disabled={isOtpSent}
					>
						<Image src={TwitterIcon} className='w-6 h-6' />
					</Button>
				</div>
				<div className='blurr absolute bottom-5 right-40'> </div>
				{/* <div className='blurr absolute top-50 left-80'> </div> */}
			</div>
		</div>
	)
}

export default page
