'use client'

import React from 'react'
import Profile from './Profile'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/redux/actions/userActions'
import useGetCookie from './cookies/useGetCookie'
import useRemoveCookie from './cookies/useRemoveCookies'
import ToastNotification from './ui/ToastNotification'
import { UserIcon } from '@heroicons/react/24/solid'

function Navbar({ activeTab }) {
	const router = useRouter()
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userInfo)
	const getCookie = useGetCookie()
	const removeCookie = useRemoveCookie()

	React.useEffect(() => {
		const accessToken = getCookie('accessToken')
		if (!accessToken) {
			router.push('/login')
		} else if (!userLogin?.userInfo.id) {
			dispatch(login({ accessToken }))
		}
	}, [])

	React.useEffect(() => {
		if (userLogin?.error) {
			removeCookie('accessToken')
			ToastNotification({ message: 'Please Signin Again' })
			router.push('/signin')
		}
	}, [userLogin])

	return (
		<nav className='px-24 hel w-screen relative mb-8 py-1  mx-auto shadow-xl rounded-b-2xl font-publica '>
			<div className='flex w-full justify-between py-3'>
				<div className='hel space-x-2 font-publica'>
					{/* image and name */}
					{/* <Image
						src={logo}
						width={40}
						height={40}
						alt='Picture of the author'
					/> */}
					logo
				</div>
				<div className='hel space-x-8'>
					<ul className='flex text-slate-600 space-x-12'>
						<Link
							href='/bookmarks'
							className={`p-2 font-normal ${
								activeTab === 'bookmarks'
									? 'text-primary underline underline-offset-4'
									: 'text-[#9CB1DA]'
							}`}
						>
							My Bookmarks
						</Link>
						<Link
							href='/boards'
							className={`p-2 font-normal ${
								activeTab === 'boards'
									? 'text-primary underline underline-offset-4'
									: 'text-[#9CB1DA]'
							}`}
						>
							Boards
						</Link>
						<Link
							href='/feed'
							className={`p-2 font-normal ${
								activeTab === 'feed'
									? 'text-primary underline underline-offset-4'
									: 'text-[#9CB1DA]'
							}`}
						>
							Feed
						</Link>
					</ul>
					{/* 				
					<Link
						href='/login'
						className='text-blue-500 px-6 py-2 shadow-2xl rounded-xl'
					>
						Register
					</Link> */}
					<Profile />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
