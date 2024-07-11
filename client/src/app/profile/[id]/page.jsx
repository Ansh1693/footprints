'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import BannerImg from '../../../../public/static/banner.png'
import ProfileImg from '../../../../public/static/profile2.jpeg'
import ShareIcon from '../../../assets/Icons/share.svg'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeftIcon, PenIcon } from 'lucide-react'
import { ArrowLeft, Funnel, MagnifyingGlass, Plus } from 'phosphor-react'
import axios from 'axios'
import ToastNotification from '@/components/ui/ToastNotification'
import useGetCookie from '@/components/cookies/useGetCookie'
import { uploadImage } from '@/helpers/utils/apis/utilities/upload'
import { User } from 'phosphor-react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '@/redux/actions/userActions'
import { toast } from 'react-hot-toast'
import { readProfile, readProfileBloks } from '@/helpers/utils/apis/query/User'
import { updateUser } from '@/helpers/utils/apis/crud/User'
import BlokCard from '@/components/cards/BlokCard'

function Page() {
	const router = useRouter()
	const dispatch = useDispatch()
	const [data, setData] = useState(null)
	const [userData, setUserData] = useState({})
	const getCookie = useGetCookie()
	const [profileImage, setProfileImage] = useState(null)
	const [bannerImage, setBannerImage] = useState(null)
	const accessToken = getCookie('accessToken')
	const [editable, setEditable] = useState(false)
	const userInfo = useSelector((state) => state.userInfo)
	const bloks = useSelector((state) => state.bloks.bloks)

	let { id } = useParams()

	useEffect(() => {
		let header
		if (accessToken) {
			if (!userInfo?.userInfo?.id) {
				dispatch(login({ accessToken }))
			}
			header += accessToken
		} else {
			header += process.env.NEXT_PUBLIC_CLIENT_TOKEN
		}

		if (userInfo?.userInfo?.id && userInfo?.userInfo?.username) {
			if (userInfo.userInfo.profileId === id) {
				setUserData(userInfo.userInfo)
				setEditable(true)
			}
		} else {
			readProfile({ accessToken: header, profileId: id })
				.then((res) => {
					if (res.status === 200) {
						setUserData(res.data.data)
						if (
							res.data.data.username ===
								userInfo.userInfo.username &&
							res.data.data.id === userInfo.userInfo.id
						) {
							setEditable(true)
						}
						setProfileImage(
							res.data.data.UserMetadata?.profileImage
						)
						setBannerImage(
							res.data.data.UserMetadata?.profileBanner
						)
					} else {
						ToastNotification({ message: 'Invalid Profile' })
						if (accessToken) router.push('/documents')
						else router.push('/signin')
					}
				})
				.catch((err) => {
					ToastNotification({ message: 'Invalid Profile' })
					if (accessToken) router.push('/documents')
					else router.push('/signin')
				})
		}
	}, [])

	const fetchBloks = () => {
		let header
		if (accessToken) {
			if (!userInfo?.userInfo?._id) {
				dispatch(login({ accessToken }))
			}
			header += accessToken
		} else {
			header += process.env.NEXT_PUBLIC_CLIENT_TOKEN
		}

		if (userInfo?.userInfo?.id && userInfo?.userInfo?.username) {
			if (userInfo.userInfo.profileId === id) {
				setData(bloks)
				setEditable(true)
			}
		} else {
			readProfileBloks({ accessToken: header, profileId: id })
				.then((res) => {
					if (res.status === 200) {
						setData(res.data.data.Blok)
					} else {
						ToastNotification({ message: 'Invalid Profile' })
					}
				})
				.catch((err) => {
					console.log(err)
					ToastNotification({ message: 'Invalid Profile' })
					// router.push('/bookmarks')
				})
		}
	}

	useEffect(() => {
		if (!userData) return

		fetchBloks()
	}, [userData])

	useEffect(() => {
		if (userInfo?.userInfo?.id && userData) {
			if (
				userData.username === userInfo.userInfo.username &&
				userData.id === userInfo.userInfo.id
			) {
				setEditable(true)
			}
		}
	}, [userData])

	useEffect(() => {
		if (!userData) return
		if (userData?.UserMetadata?.profileImage) {
			setProfileImage(userData.UserMetadata.profileImage)
		}

		if (userData?.UserMetadata?.profileBanner) {
			setBannerImage(userData.UserMetadata.profile_header)
		}
	}, [userData])

	const profilePicker = () => {
		document.getElementById('profile-picker').click()
	}

	const bannerPicker = () => {
		document.getElementById('banner-picker').click()
	}

	const handleUpdate = async (userObject) => {
		if (!accessToken || !editable) return toast.error('Unauthorised access')
		try {
			const response = await updateUser({ userObject, accessToken })
			if (response.status === 200) {
				setUserData(userObject)
				toast.success('Profile updated')
			} else {
				toast.error('Unauthorised access')
			}
		} catch (err) {
			toast.error('Something went wrong')
		}
	}

	const handleProfile = async (e) => {
		try {
			const file = e.target.files[0]
			const response = await uploadImage({ accessToken, file })

			if (response.status !== 200)
				return toast.error('Something went wrong')

			const url = response.data.data.url

			const userObject = {
				...userData,
				UserMetadata: {
					...userData.UserMetadata,
					profileImage: url,
				},
			}

			handleUpdate(userObject)
		} catch (error) {
			return toast.error('Something went wrong')
		}
	}

	const handleBanner = async (e) => {
		try {
			const file = e.target.files[0]
			const response = await uploadImage({ accessToken, file })

			if (response.status !== 200)
				return toast.error('Something went wrong')

			const url = response.data.data.url

			const userObject = {
				...userData,
				UserMetadata: {
					...userData.UserMetadata,
					profileBanner: url,
				},
			}

			handleUpdate(userObject)
		} catch (error) {
			toast.error('Something went wrong')
		}
	}

	return (
		<div>
			{/* user profile */}
			<div>
				{/* banner and profile image */}
				<div className='relative flex flex-col items-center'>
					<Button
						onClick={() => router.back()}
						className='absolute z-20 p-2 pr-4 text-sm font-normal hover:text-white text-white/70 top-4 left-4 backdrop-blur-md bg-black/40'
					>
						<ArrowLeft className='w-4 h-4' />
						Go Back
					</Button>

					{/* banner */}
					<div className='relative w-full group'>
						{/* edit indicator */}
						{editable && (
							<div
								className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full gap-2 pb-8 text-sm text-white duration-300 opacity-0 cursor-pointer group-hover:opacity-100 bg-black/60'
								onClick={() => bannerPicker()}
							>
								<PenIcon className='w-5 h-5' />
								<p>Change cover</p>
							</div>
						)}
						<Image
							alt='banner'
							src={bannerImage || BannerImg}
							className='object-cover w-full h-44 brightness-75'
							width={0}
							sizes='100vw'
							height={176}
						/>
					</div>

					{/* profile image */}
					<div className='absolute group z-10 bottom-0 translate-y-1/2  rounded-full overflow-hidden border-[8px] border-white shadow-xl '>
						{/* edit indicator */}
						{editable && (
							<div
								onClick={() => profilePicker()}
								className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full duration-300 opacity-0 cursor-pointer bg-black/60 group-hover:opacity-100'
							>
								<PenIcon className='w-5 h-5 stroke-white' />
							</div>
						)}

						<input
							type='file'
							accept='image/*'
							id='profile-picker'
							className='hidden'
							value=''
							onChange={(e) => handleProfile(e)}
						/>
						<input
							type='file'
							accept='image/*'
							id='banner-picker'
							className='hidden'
							value=''
							onChange={(e) => handleBanner(e)}
						/>
						{profileImage && (
							<Image
								alt='profile'
								src={profileImage || ProfileImg}
								width={124}
								height={124}
								className='object-cover shadow-xl'
							/>
						)}
						{!profileImage && (
							<div className='h-full w-full items-center justify-center flex bg-white'>
								<User size={64} />
							</div>
						)}
					</div>
				</div>

				{/* profile data */}
				<div className='flex flex-col items-center gap-1 mt-24'>
					{/* name */}
					<h1 className='text-xl font-medium capitalize'>
						{userData?.name}
					</h1>
					{/* username */}
					<div className='flex items-center gap-1 text-gray-500'>
						<p className='text-sm font-medium'>
							@{userData?.username}
						</p>
						<Image
							alt='share'
							src={ShareIcon}
							className='w-4 h-4'
						/>
					</div>
					<p className='max-w-md text-sm font-medium text-center'>
						{userData?.description}
					</p>
				</div>
			</div>

			{/* search */}
			<div className='flex items-center gap-6 px-8 pt-8'>
				{/* search bar */}
				<div className='flex   items-center  w-full px-2  text-slate-300 border border-slate-100 rounded-full shadow-xl'>
					<MagnifyingGlass size={20} className='ml-2' />
					<Input
						placeholder='Search...'
						className='bg-transparent border-none focus:text-slate-500 font-normal text-base my-2 text-slate-300'
					/>
				</div>

				<div className='flex gap-4'>
					{editable && (
						<Button
							onClick={() => router.push('/bloks/new')}
							variant={'secondary'}
							size={'icon'}
						>
							<Plus className='w-6 h-6' />
						</Button>
					)}
					<Button variant={'secondary'} size={'icon'}>
						<Funnel className='w-6 h-6' />
					</Button>
				</div>
			</div>

			{/* Boards */}
			<div className='px-8 py-8 flex space-x-12 space-y-6'>
				{data?.map((item) => (
					<BlokCard
						key={item.id}
						data={item}
						profile={userData}
						editable={editable}
						fetchProfile={fetchBloks}
					/>
				))}
			</div>
		</div>
	)
}

export default Page
