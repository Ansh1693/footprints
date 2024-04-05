'use client'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/userActions'
import useRemoveCookie from './cookies/useRemoveCookies'
import { UserCircle } from 'phosphor-react'
import { MenubarSeparator } from './ui/Menubar'

function Profile() {
	const userInfo = useSelector((state) => state.userInfo)
	const dispatch = useDispatch()
	const removeCookie = useRemoveCookie()
	const [image, setImage] = React.useState(null)

	let router = useRouter()

	const handleLogout = () => {
		dispatch(logout())
		removeCookie('accessToken')
		router.push('/login')
	}

	React.useEffect(() => {
		if (userInfo.userInfo?.userMetadata?.profile_image) {
			setImage(userInfo.userInfo?.userMetadata?.profile_image)
		}
	}, [userInfo])

	const handleClick = () => {
		router.push(`/profile/@${userInfo.userInfo?.username}`)
	}

	return (
		<Popover>
			<PopoverTrigger>
				{image ? (
					<img
						src={image}
						alt='User'
						className='w-10 h-10 rounded-full cursor-pointer'
					/>
				) : (
					<UserCircle
						size={40}
						className='text-primary cursor-pointer'
						weight='light'
					/>
				)}
			</PopoverTrigger>

			<PopoverContent className='w-32 mr-8 bg-tertiary'>
				<button
					onClick={handleClick}
					className={
						'text-sm py-1.5 px-2 text-left rounded-md text-primary hover:bg-[#E2E7F3] duration-200'
					}
				>
					Profile
				</button>

				<MenubarSeparator />

				<button
					onClick={() => router.push('/profile/settings')}
					className={
						'text-sm py-1.5 px-2 rounded-md text-left text-primary hover:bg-[#E2E7F3] duration-200'
					}
				>
					Settings
				</button>

				<MenubarSeparator />

				<button
					onClick={handleLogout}
					className={
						'text-sm py-1.5 px-2 rounded-md text-primary text-left hover:bg-[#E2E7F3] duration-200'
					}
				>
					Logout
				</button>
			</PopoverContent>
		</Popover>
	)
}

export default Profile
