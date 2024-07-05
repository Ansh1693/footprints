'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import GoBack from '@/components/ui/GoBack'
import ProfileImg from '../../../../public/static/profile2.jpeg'
import PinterestIcon from '../../../assets/Icons/pinterest.svg'
import RedditIcon from '../../../assets/Icons/reddit.svg'
import PocketIcon from '../../../assets/Icons/pocket.svg'
import { Switch } from '@/components/ui/Switch'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import useGetCookie from '@/components/cookies/useGetCookie'
import { login } from '@/redux/actions/userActions'
import ThemeToggle from '@/components/ThemeToggle'
import UpdateEmail from '@/components/UpdateEmail'

function Page() {
	const router = useRouter()
	const userInfo = useSelector((state) => state.userInfo)
	const getCookie = useGetCookie()
	const accessToken = getCookie('accessToken')
	const dispatch = useDispatch()

	if (!accessToken) {
		router.push('/login')
	}

	useEffect(() => {
		if (!userInfo?.userInfo?.id) {
			dispatch(login({ accessToken }))
		}
	}, [accessToken])

	return (
		<div className='flex gap-8 px-8 py-8'>
			<div className='py-1 shrink-0'>
				<GoBack />
			</div>

			<main className='w-full'>
				<h1 className='text-2xl libre-font'>Settings</h1>

				{/* user section */}
				<div className='py-4 pt-8 space-y-4 w-fit'>
					<h2 className='text-lg font-medium'>User</h2>

					<Image
						alt='profile'
						src={
							userInfo?.userInfo?.UserMetadata?.profileImage ||
							ProfileImg
						}
						width={112}
						height={112}
						className='object-cover rounded-full w-28 h-28'
					/>

					{/* editable options */}
					<div className='space-y-4'>
						<div>
							<Label htmlFor='Name'>Name</Label>
							<Input
								className='font-medium text-[#303030]'
								placeholder='Name'
								value={userInfo?.userInfo?.name || ''}
							/>
						</div>

						<div>
							<Label htmlFor='Username'>Username</Label>
							<Input
								className='font-medium text-[#303030]'
								placeholder='Username'
								value={userInfo?.userInfo?.username || ''}
							/>
						</div>

						<div>
							<Label htmlFor='Email'>Email</Label>
							<Input
								className='font-medium text-[#303030]'
								placeholder='Email'
								value={userInfo?.userInfo?.email || ''}
							/>
							<UpdateEmail />
						</div>
					</div>
				</div>

				{/* removed platforms from here -- */}

				{/* color theme */}
				<div className='py-4 space-y-4 border-t'>
					<h2 className='text-lg font-medium'>Color theme</h2>
					<ThemeToggle />
				</div>

				{/* notifications */}
				<div className='py-4 space-y-4 border-t'>
					<h2 className='text-lg font-medium'>Notifications</h2>

					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<Label htmlFor='General' className='text-base'>
								General
							</Label>
							<Switch />
						</div>

						<div className='flex items-center justify-between'>
							<Label htmlFor='Following' className='text-base'>
								Following
							</Label>
							<Switch />
						</div>

						<div className='flex items-center justify-between'>
							<Label htmlFor='Security' className='text-base'>
								Security
							</Label>
							<Switch />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Page
