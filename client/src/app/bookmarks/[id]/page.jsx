'use client'

import React, { useState, useEffect, use } from 'react'
import postData from '@/data/postsData'
import RedditCard from '@/components/cards/RedditCard'
import TwitterCard from '@/components/cards/TwitterCard'
import DefaultCard from '@/components/cards/DefaultCard'
import PeakView from '@/components/PeakView'
import { AnimatePresence, motion } from 'framer-motion'
import FullView from '@/components/FullView'
import { Input } from '@/components/ui/Input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import SortIcon from '@/assets/Icons/sort.svg'
import FilterIcon from '@/assets/Icons/filter.svg'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import CreateNote from '@/components/cards/CreateNote'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import YoutubeCard from '@/components/cards/YoutubeCard'
import ArticleCard from '@/components/cards/ArticleCard'
import ShoppingCard from '@/components/cards/ShoppingCard'
import PinterestCard from '@/components/cards/PinterestCard'
import ImdbCard from '@/components/cards/ImdbCard'
import CardWrapper from '@/components/wrappers/CardWrapper'
import useGetCookie from '@/components/cookies/useGetCookie'
import useRemoveCookie from '@/components/cookies/useRemoveCookies'
import BookmarkWrapper from '@/components/wrappers/BookmarkWrapper'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useSelector, useDispatch } from 'react-redux'
import { getBookmarkList } from '@/redux/actions/bookmarkActions'
import axios from 'axios'
import ToastNotification from '@/components/ui/ToastNotification'
import NoteCard from '@/components/cards/NoteCard'
import AudioCard from '@/components/cards/AudioCard'

function Page({ params, searchParams }) {
	const bookmarks = useSelector((state) => state.bookmarks)
	const userInfo = useSelector((state) => state.userInfo.userInfo)
	const dispatch = useDispatch()
	const router = useRouter()
	const getCookie = useGetCookie()
	const removeCookie = useRemoveCookie()
	// will be replace by fetch data or data provider from state manager
	const [data, setData] = useState(postData)
	const [isPeakOpen, setIsPeakOpen] = useState(false)
	const [isFullView, setIsFullView] = useState(false)
	const [activeBookmark, setActiveBookmark] = useState(null)

	useEffect(() => {
		if (params && searchParams && userInfo.accessToken) {
			const getBook = async () => {
				const res = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/document/read?document_id=${params.id}`,
					{
						headers: {
							Authorization: `Bearer ${userInfo.accessToken}`,
						},
					}
				)
				if (res.status === 200) {
					return res.data[0]
				} else {
					ToastNotification('Bookmark not found')
					router.push('/bookmarks')
				}
			}
			getBook().then((res) => {
				setActiveBookmark(res)
				if (searchParams.peak) setIsPeakOpen(true)
				if (searchParams.full) setIsFullView(true)
			})
		}
	}, [params, searchParams, userInfo.accessToken])

	// sets bookmark data to be displayed in PeakView
	const handleCardClick = (bookMarkData) => {}

	// when clicked on background, close PeakView or FullView
	const handleBackgroundClick = () => {
		// removeCookie('activeBookmark')
		router.push('/bookmarks')
		setIsPeakOpen(false)
		setIsFullView(false)
	}

	const switchFullView = () => {
		router.push(`/bookmarks/${params.id}?full=true`)
		setIsPeakOpen(false)
		setIsFullView(true)
	}

	const switchPeakView = () => {
		router.push(`/bookmarks/${params.id}?peak=true`)
		setIsFullView(false)
		setIsPeakOpen(true)
	}

	// handles query params

	// when peakview and fullview is closed, set active bookmark data to null
	// useEffect(() => {
	//     if (!isPeakOpen && !isFullView) setActiveBookmark(null)
	// }, [isPeakOpen, isFullView])

	useEffect(() => {
		if (userInfo.accessToken) {
			if (!bookmarks.bookmarks || bookmarks.bookmarks.length === 0) {
				dispatch(getBookmarkList({ accessToken: userInfo.accessToken }))
			}
		}
	}, [userInfo.accessToken])

	return (
		<main className='relative'>
			{/* disables background content interaction when  */}
			<AnimatePresence>
				{isPeakOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						onClick={() => handleBackgroundClick()}
						className='fixed inset-0 z-50 bg-black opacity-50'
					></motion.div>
				)}
			</AnimatePresence>

			<div className='sticky top-0 z-20 flex items-center gap-8 py-4 bg-white'>
				{/* search bar */}
				<div className='flex items-center w-full px-2 h-10 text-[#9CB1DA] border rounded-lg'>
					<MagnifyingGlassIcon className='w-5 h-5' />
					<Input
						placeholder='Search...'
						className='bg-transparent border-none focus:text-primary'
					/>
				</div>

				<div className='flex gap-4'>
					<Button variant={'secondary'} size={'icon'}>
						<Image alt='sort' className='w-5 h-5' src={SortIcon} />
					</Button>
					<Button variant={'secondary'} size={'icon'}>
						<Image
							alt='filter'
							className='w-5 h-5'
							src={FilterIcon}
						/>
					</Button>
				</div>
			</div>

			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
			>
				<Masonry gutter='24px' className='mt-2'>
					<CreateNote />

					{bookmarks.bookmarks &&
						bookmarks.bookmarks.map((item) => {
							switch (item.documentMetadata.document_type) {
								case 'reddit':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<RedditCard
												data={item}
												onClick={handleCardClick}
											/>
										</BookmarkWrapper>
									)
								case 'twitter':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<TwitterCard
												data={item}
												onClick={handleCardClick}
											/>
										</BookmarkWrapper>
									)
								case 'youtube':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<YoutubeCard
												data={item}
												onClick={handleCardClick}
											/>
										</BookmarkWrapper>
									)
								case 'article':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<ArticleCard
												data={item}
												onClick={handleCardClick}
											/>
										</BookmarkWrapper>
									)
								case 'shopping':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<ShoppingCard
												data={item}
												onClick={handleCardClick}
											/>
										</BookmarkWrapper>
									)
								case 'pinterest':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<PinterestCard
												data={item}
												onClick={handleCardClick}
											/>
										</BookmarkWrapper>
									)
								case 'imdb':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<ImdbCard
												data={item}
												onClick={handleCardClick}
											/>
										</BookmarkWrapper>
									)

								case 'audio':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<AudioCard
												data={item}
												onClick={handleCardClick}
												profile={userInfo}
											/>
										</BookmarkWrapper>
									)
								case 'note':
									return (
										<BookmarkWrapper
											key={item._id}
											pinned={item.status.pinned}
										>
											<NoteCard
												data={item}
												onClick={handleCardClick}
												profile={userInfo}
											/>
										</BookmarkWrapper>
									)
								default:
									return (
										<DefaultCard
											key={item._id}
											data={item}
											onClick={handleCardClick}
										/>
									)
							}
						})}
				</Masonry>
			</ResponsiveMasonry>

			{/* peak view */}
			<AnimatePresence>
				{isPeakOpen && !isFullView && (
					<motion.div
						initial={{ translateX: '100%' }}
						animate={{ translateX: 0 }}
						exit={{ translateX: '100%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='fixed flex flex-col gap-6 right-0 top-0 p-6 h-full w-[600px] overflow-y-scroll bg-white z-[100]'
					>
						<PeakView
							data={activeBookmark}
							handleClose={handleBackgroundClick}
							setIsFullView={switchFullView}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			{/* full view */}
			<AnimatePresence>
				{isFullView && !isPeakOpen && (
					<motion.div
						initial={{ translateX: '100%' }}
						animate={{ translateX: 0 }}
						exit={{ translateX: '100%' }}
						transition={{ duration: 0.3 }}
						className='fixed flex flex-col gap-6 right-0 top-0 h-full w-full overflow-y-scroll bg-white pb-10 z-[100]'
					>
						<FullView
							data={activeBookmark}
							peakView={switchPeakView}
							handleClose={handleBackgroundClick}
							accessToken={userInfo.accessToken}
						/>
					</motion.div>
				)}{' '}
			</AnimatePresence>
		</main>
	)
}

export default Page
