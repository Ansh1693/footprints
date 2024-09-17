// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { Input } from '@/components/ui/Input'
// import { Button } from '@/components/ui/Button'
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// import SortIcon from '../../assets/Icons/sort.svg'
// import FilterIcon from '../../assets/Icons/filter.svg'
// import postData from '@/data/postsData'
// import { AnimatePresence, motion } from 'framer-motion'
// import FeedCard from '@/components/cards/FeedCard'
// import { Funnel, FunnelSimple, MagnifyingGlass } from '@phosphor-icons/react'
// import FilterOptions from '@/components/controls/FilterOptions'
// import useGetCookie from '@/components/cookies/useGetCookie'
// import { useRouter } from 'next/navigation'
// import { useSelector } from 'react-redux'
// import axios from 'axios'

// function Page() {
// 	const [data, setData] = useState([])
// 	const [isPeakOpen, setIsPeakOpen] = useState(false)
// 	const [isFullView, setIsFullView] = useState(false)
// 	const [activeBookmark, setActiveBookmark] = useState(null)
// 	const getCookie = useGetCookie()
// 	const router = useRouter()
// 	const accessToken = getCookie('accessToken')
// 	const userInfo = useSelector((state) => state.userInfo?.userInfo)

// 	const fetchFeed = () => {
// 		axios
// 			.get(
// 				`${process.env.NEXT_PUBLIC_SERVER_URL}/query/user?query_type=readProfileFollowing`,
// 				{
// 					headers: {
// 						Authorization: `Bearer ${accessToken}`,
// 					},
// 				}
// 			)
// 			.then((res) => {
// 				setData(res.data.data.following)
// 			})
// 			.catch((err) => {
// 				console.log(err)
// 			})
// 	}

// 	useEffect(() => {
// 		if (userInfo?._id) {
// 			fetchFeed()
// 		}
// 	}, [userInfo])

// 	// sets bookmark data to be displayed in PeakView
// 	const handleCardClick = (bookMarkData) => {
// 		setActiveBookmark(bookMarkData)
// 		setIsPeakOpen(true)
// 	}

// 	// when clicked on background, close PeakView or FullView
// 	const handleBackgroundClick = () => {
// 		setIsPeakOpen(false)
// 		setIsFullView(false)
// 	}

// 	const switchFullView = () => {
// 		setIsPeakOpen(false)
// 		setIsFullView(true)
// 	}

// 	const switchPeakView = () => {
// 		setIsFullView(false)
// 		setIsPeakOpen(true)
// 	}

// 	return (
// 		<main className='relative'>
// 			{/* disables background content interaction when  */}
// 			<AnimatePresence>
// 				{isPeakOpen && (
// 					<motion.div
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 0.5 }}
// 						exit={{ opacity: 0 }}
// 						onClick={() => handleBackgroundClick()}
// 						className='fixed inset-0 z-50 bg-black opacity-50'
// 					></motion.div>
// 				)}
// 			</AnimatePresence>

// 			<div className='sticky top-0 z-20 flex items-center gap-6 px-8 py-4 bg-white'>
// 				{/* search bar */}
// 				<div className='flex items-center w-full px-2 h-10 text-[#9CB1DA] border rounded-lg'>
// 					<MagnifyingGlass size={20} />
// 					<Input
// 						placeholder='Search...'
// 						className='bg-transparent border-none focus:text-primary'
// 					/>
// 				</div>

// 				<FilterOptions />
// 			</div>

// 			<div className='px-8 pt-2 space-y-6'>
// 				{data?.map((bookmark) => (
// 					<FeedCard
// 						key={bookmark._id}
// 						data={bookmark}
// 						profile={bookmark.user_id}
// 						editable={false}
// 						fetchFeed={fetchFeed}
// 					/>
// 				))}
// 			</div>
// 		</main>
// 	)
// }

// export default Page
