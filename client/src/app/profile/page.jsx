// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'
// import BannerImg from '../../../public/static/banner.png'
// import ProfileImg from '../../../public/static/profile2.jpeg'
// import ShareIcon from '../../assets/Icons/share.svg'
// import {
// 	MagnifyingGlassIcon,
// 	PlusIcon,
// 	PencilIcon,
// } from '@heroicons/react/24/outline'
// import { Input } from '@/components/ui/Input'
// import { Button } from '@/components/ui/Button'
// import FilterIcon from '../../assets/Icons/filter.svg'
// import DefaultCard from '@/components/cards/DefaultCard'
// import { useRouter } from 'next/navigation'
// import { ArrowLeftIcon, PenIcon } from 'lucide-react'
// import { useDispatch } from 'react-redux'
// import { login } from '@/redux/actions/userActions'

// const boardData = {
// 	id: '1',
// 	name: 'Mark Cunban',
// 	title: 'title',
// 	description: 'description',
// 	imgUrl: 'https://images.unsplash.com/photo-1691036561870-e2badbd0fd22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
// 	category: 'reddit',
// 	textOnly: false,
// }

// function Page() {
// 	const router = useRouter()

// 	const dispatch = useDispatch()

// 	// profile picker - files allowed: png, jpg, jpeg | ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
// 	const profilePicker = () => {
// 		document.getElementById('profile-picker').click()
// 	}

// 	// banner picker - files allowed: png, jpg, jpeg | ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
// 	const bannerPicker = () => {
// 		document.getElementById('banner-picker').click()
// 	}

// 	return (
// 		<div>
// 			{/* user profile */}
// 			<div>
// 				{/* banner and profile image */}
// 				<div className='relative flex flex-col items-center'>
// 					<Button
// 						onClick={() => router.push('/feed')}
// 						rounded='full'
// 						className='absolute z-20 p-2 pr-4 text-sm font-normal hover:text-white text-white/70 top-4 left-4 backdrop-blur-md bg-black/40'
// 					>
// 						<ArrowLeftIcon className='w-4 h-4' />
// 						View feed
// 					</Button>

// 					{/* banner */}
// 					<div className='relative w-full group'>
// 						{/* edit indicator */}
// 						<div
// 							className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full gap-2 pb-8 text-sm text-white duration-300 opacity-0 cursor-pointer group-hover:opacity-100 bg-black/60'
// 							onClick={bannerPicker}
// 						>
// 							<PenIcon className='w-5 h-5' />
// 							<p>Change cover</p>
// 						</div>
// 						<input
// 							type='file'
// 							accept='.png, .jpg, .jpeg'
// 							id='banner-picker'
// 							className='hidden'
// 						/>
// 						<Image
// 							alt='banner'
// 							src={BannerImg}
// 							className='object-cover w-full h-auto brightness-75'
// 						/>
// 					</div>

// 					{/* profile image */}
// 					<div className='absolute group z-10 top-24 w-32 h-32 rounded-full overflow-hidden border-[8px] border-white'>
// 						{/* edit indicator */}
// 						<div
// 							onClick={profilePicker}
// 							className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full duration-300 opacity-0 cursor-pointer bg-black/60 group-hover:opacity-100'
// 						>
// 							<PenIcon className='w-5 h-5 stroke-white' />
// 						</div>

// 						<input
// 							type='file'
// 							accept='.png, .jpg, .jpeg'
// 							id='profile-picker'
// 							className='hidden'
// 						/>
// 						<Image
// 							alt='profile'
// 							src={ProfileImg}
// 							className='object-cover'
// 						/>
// 					</div>
// 				</div>

// 				{/* profile data */}
// 				<div className='flex flex-col items-center gap-1 mt-16'>
// 					{/* name */}
// 					<h1 className='text-xl font-medium libre-font'>Naina</h1>
// 					{/* username */}
// 					<div className='flex items-center gap-1 text-gray-500'>
// 						<p className='text-xs font-medium'>@naina_2728</p>
// 						<Image
// 							alt='share'
// 							src={ShareIcon}
// 							className='w-4 h-4'
// 						/>
// 					</div>
// 					<p className='max-w-md text-sm font-medium text-center'>
// 						I am naina bajaj. I am 19 years old. I work at fountane
// 						as a product designer. I recently sold my startup-
// 						TweepsBook.
// 					</p>
// 				</div>
// 			</div>

// 			{/* search */}
// 			<div className='flex items-center gap-8 px-8 pt-8'>
// 				{/* search bar */}
// 				<div className='flex items-center w-full gap-1 px-2 text-[#9CB1DA] border rounded-lg'>
// 					<MagnifyingGlassIcon className='w-5 h-5' />
// 					<Input
// 						placeholder='Search...'
// 						className='bg-transparent focus:text-primary placeholder:text-[#9CB1DA] border-none'
// 					/>
// 				</div>

// 				<div className='flex gap-4'>
// 					<Button
// 						onClick={() => router.push('/boards/new')}
// 						variant={'secondary'}
// 						size={'icon'}
// 					>
// 						<PlusIcon className='w-6 h-6' />
// 					</Button>
// 					<Button variant={'secondary'} size={'icon'}>
// 						<Image
// 							alt='filter'
// 							className='w-5 h-5'
// 							src={FilterIcon}
// 						/>
// 					</Button>
// 				</div>
// 			</div>

// 			{/* Boards */}
// 			<div className='gap-4 px-8 py-8 space-y-4 columns-4'>
// 				<DefaultCard data={data} onClick={() => console.log()} />
// 			</div>
// 		</div>
// 	)
// }

// export default Page
