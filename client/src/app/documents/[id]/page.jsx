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
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ToastNotification from '@/components/ui/ToastNotification'
import NoteCard from '@/components/cards/NoteCard'
import AudioCard from '@/components/cards/AudioCard'
import { readDocument } from '@/helpers/utils/apis/crud/Document'
import { getDocumentList } from '@/redux/actions/documentActions'
import DocumentWrapper from '@/components/wrappers/DocumentWrapper'

function Page({ params, searchParams }) {
	const documents = useSelector((state) => state.documents.documents)
	const userInfo = useSelector((state) => state.userInfo.userInfo)
	const dispatch = useDispatch()
	const router = useRouter()
	const getCookie = useGetCookie()
	const removeCookie = useRemoveCookie()
	// will be replace by fetch data or data provider from state manager
	const [data, setData] = useState(postData)
	const [isPeakOpen, setIsPeakOpen] = useState(false)
	const [isFullView, setIsFullView] = useState(false)
	const [activeDocument, setActiveDocument] = useState(null)

	useEffect(() => {
		if (params && searchParams && userInfo.accessToken) {
			const getBook = async () => {
				const res = await readDocument({
					accessToken: userInfo.accessToken,
					documentId: params.id,
				})
				if (res.status === 200) {
					return res.data
				} else {
					ToastNotification('Document not found')
					router.push('/documents')
				}
			}
			getBook().then((res) => {
				setActiveDocument(res)
				if (searchParams.peak) setIsPeakOpen(true)
				if (searchParams.full) setIsFullView(true)
			})
		}
	}, [params, searchParams, userInfo.accessToken])

	// sets bookmark data to be displayed in PeakView
	const handleCardClick = (documentData) => {}

	// when clicked on background, close PeakView or FullView
	const handleBackgroundClick = () => {
		// removeCookie('activeDocument')
		router.push('/documents')
		setIsPeakOpen(false)
		setIsFullView(false)
	}

	const switchFullView = () => {
		router.push(`/documents/${params.id}?full=true`)
		setIsPeakOpen(false)
		setIsFullView(true)
	}

	const switchPeakView = () => {
		router.push(`/documents/${params.id}?peak=true`)
		setIsFullView(false)
		setIsPeakOpen(true)
	}

	// handles query params

	// when peakview and fullview is closed, set active bookmark data to null
	// useEffect(() => {
	//     if (!isPeakOpen && !isFullView) setActiveDocument(null)
	// }, [isPeakOpen, isFullView])

	useEffect(() => {
		if (userInfo.accessToken) {
			dispatch(getDocumentList({ accessToken: userInfo.accessToken }))
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

					{documents &&
						documents.map((item) => {
							switch (item.DocumentMetadata.documentType) {
								case 'reddit':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<RedditCard
												data={item}
												onClick={handleCardClick}
											/>
										</DocumentWrapper>
									)
								case 'twitter':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<TwitterCard
												data={item}
												onClick={handleCardClick}
											/>
										</DocumentWrapper>
									)
								case 'youtube':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<YoutubeCard
												data={item}
												onClick={handleCardClick}
											/>
										</DocumentWrapper>
									)
								case 'article':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<ArticleCard
												data={item}
												onClick={handleCardClick}
											/>
										</DocumentWrapper>
									)
								case 'shopping':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<ShoppingCard
												data={item}
												onClick={handleCardClick}
											/>
										</DocumentWrapper>
									)
								case 'pinterest':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<PinterestCard
												data={item}
												onClick={handleCardClick}
											/>
										</DocumentWrapper>
									)
								case 'imdb':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<ImdbCard
												data={item}
												onClick={handleCardClick}
											/>
										</DocumentWrapper>
									)

								case 'audio':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<AudioCard
												data={item}
												onClick={handleCardClick}
												profile={userInfo}
											/>
										</DocumentWrapper>
									)
								case 'note':
									return (
										<DocumentWrapper
											key={item.id}
											pinned={item.pinned}
										>
											<NoteCard
												data={item}
												onClick={handleCardClick}
												profile={userInfo}
											/>
										</DocumentWrapper>
									)
								default:
									return (
										<DefaultCard
											key={item.id}
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
							data={activeDocument}
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
							data={activeDocument}
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
