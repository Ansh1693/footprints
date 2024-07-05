'use client'

import { useState, useEffect, useRef } from 'react'
import postData from '@/data/postsData'
import RedditCard from '@/components/cards/RedditCard'
import TwitterCard from '@/components/cards/TwitterCard'
import DefaultCard from '@/components/cards/DefaultCard'
import { AnimatePresence, motion } from 'framer-motion'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import CreateNote from '@/components/cards/CreateNote'
import { useRouter, useSearchParams } from 'next/navigation'
import YoutubeCard from '@/components/cards/YoutubeCard'
import ArticleCard from '@/components/cards/ArticleCard'
import ShoppingCard from '@/components/cards/ShoppingCard'
import PinterestCard from '@/components/cards/PinterestCard'
import ImdbCard from '@/components/cards/ImdbCard'
import { useSelector, useDispatch } from 'react-redux'
import {
	getBookmarkList,
	deleteBookmark,
	createBookmark,
} from '@/redux/actions/bookmarkActions'
import BookmarkWrapper from '@/components/wrappers/BookmarkWrapper'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import useSetCookie from '@/components/cookies/useSetCookie'
import useRemoveCookie from '@/components/cookies/useRemoveCookies'
import { Funnel, FunnelSimple, MagnifyingGlass } from 'phosphor-react'
import NoteCard from '@/components/cards/NoteCard'
import FilterOptions from '@/components/controls/FilterOptions'
import PeakView from '@/components/PeakView'
import FullView from '@/components/FullView'
import AudioCard from '@/components/cards/AudioCard'
import useGetCookie from '@/components/cookies/useGetCookie'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import handleUtil from '@/helpers/utils/apis/utilities/upload'
import { getBoardList } from '@/redux/actions/boardActions'
import SearchBar from '@/components/SearchBar'

function Page() {
	const bookmarks = useSelector((state) => state.bookmarks.bookmarks)
	const userInfo = useSelector((state) => state.userInfo.userInfo)
	const boards = useSelector((state) => state.boards.boards)
	const dropZoneRef = useRef(null)
	const dispatch = useDispatch()

	const setCookie = useSetCookie()
	const removeCookie = useRemoveCookie()
	const getCookie = useGetCookie()
	const router = useRouter()
	const searchParams = useSearchParams()
	const accessToken = getCookie('accessToken')
	// will be replace by fetch data or data provider from state manager
	const [data, setData] = useState(postData)
	const [isPeakOpen, setIsPeakOpen] = useState(
		searchParams.get('peak') === null ? false : true
	)
	const [isFullView, setIsFullView] = useState(
		searchParams.get('full') === null ? false : true
	)
	const [bookmarkId, setBookmarkId] = useState(
		searchParams.get('bookmark_id') === null
			? null
			: searchParams.get('bookmark_id')
	)
	const [activeBookmark, setActiveBookmark] = useState({})

	const getSingleBookmark = (bookmarkId) => {
		let header = 'Bearer '
		if (accessToken) header += accessToken
		else header += process.env.NEXT_PUBLIC_CLIENT_TOKEN

		axios
			.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/query/document?queryType=readDocument&documentId=${bookmarkId}`,
				{
					headers: {
						Authorization: header,
					},
				}
			)
			.then((res) => {
				if (res.status === 200) {
					setActiveBookmark(res.data.data)
				} else {
					toast.error('You dont have access to this bookmark')
					handleBackgroundClick()
				}
			})
			.catch((err) => {
				toast.error('You dont have access to this bookmark')
				handleBackgroundClick()
			})
	}

	const handleBackgroundClick = () => {
		router.push('/bookmarks')
		setActiveBookmark({})
		setIsPeakOpen(false)
		setIsFullView(false)
	}
	// sets bookmark data to be displayed in PeakView
	const handleCardClick = (bookMarkData) => {
		setBookmarkId(bookMarkData._id)
		setIsPeakOpen(true)
		setIsFullView(false)
		router.push(`/bookmarks?bookmark_id=${bookMarkData._id}&peak=true`)
	}

	const switchFullView = () => {
		router.push(`/bookmarks?bookmark_id=${bookmarkId}&full=true`)
		setIsPeakOpen(false)
		setIsFullView(true)
	}

	const switchPeakView = () => {
		router.push(`/bookmarks?bookmark_id=${bookmarkId}&peak=true`)
		setIsFullView(false)
		setIsPeakOpen(true)
	}

	const handleDelete = (bookMarkData) => {
		dispatch(
			deleteBookmark({
				bookmarkId: bookMarkData.id,
				accessToken: userInfo.accessToken,
			})
		)
	}

	const handleUpdate = (bookMarkData) => {
		dispatch(
			updateBookmark({
				updatedData: bookMarkData,
				accessToken: userInfo.accessToken,
			})
		)
	}
	useEffect(() => {
		if (userInfo.accessToken) {
			dispatch(getBookmarkList({ accessToken: userInfo.accessToken }))
		}
		if (userInfo.accessToken) {
			dispatch(getBoardList({ accessToken: userInfo.accessToken }))
		}
	}, [userInfo.accessToken])

	// handles query params
	useEffect(() => {
		if (!router) return
	}, [isFullView, router])

	useEffect(() => {
		if (searchParams.get('bookmark_id')) {
			setBookmarkId(searchParams.get('bookmark_id'))
			setIsPeakOpen(searchParams.get('peak') === null ? false : true)
			setIsFullView(searchParams.get('full') === null ? false : true)
			if (bookmarkId) {
				getSingleBookmark(bookmarkId)
			}
		}
	}, [searchParams])

	// when peakview and fullview is closed, set active bookmark data to null
	useEffect(() => {
		if (!isPeakOpen && !isFullView) setActiveBookmark(null)
	}, [isPeakOpen, isFullView])

	const handleDrop = async (e) => {
		e.preventDefault()
		const files = e.dataTransfer.files
		if (files.length > 1) {
			toast.error('You can only upload one file at a time')
			return
		}

		if (
			files[0].type !== 'image/png' &&
			files[0].type !== 'image/jpeg' &&
			files[0].type !== 'image/jpg'
		) {
			toast.error('You can only upload image files')
			return
		}

		const url = await handleUtil(files[0], userInfo.accessToken, 'image')

		if (url) {
			const date = new Date().toDateString()
			const data = {
				heading: date.slice(4),
				profile_id: userInfo.profile_id,
				user_id: userInfo._id,
				status: {
					public: false,
					deleted: false,
					pinned: false,
					comments: false,
				},
				documentMetadata: {
					document_type: 'image',
					bodyImage_url: url,
				},
				status: {
					pinned: false,
				},
			}

			dispatch(
				createBookmark({
					bookmarkData: data,
					accessToken: userInfo.accessToken,
				})
			)
		} else {
			toast.error('Something went wrong')
		}
	}

	const handleDragOver = (e) => {
		e.preventDefault()
	}

	return (
		<main
			className='relative'
			ref={dropZoneRef}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
		>
			{/* disables background content interaction when  */}
			<AnimatePresence>
				{activeBookmark?._id && isPeakOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						onClick={() => handleBackgroundClick()}
						className='fixed inset-0 z-50 bg-black opacity-50'
					></motion.div>
				)}
			</AnimatePresence>

			<SearchBar />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<ResponsiveMasonry
					className='px-8 pb-4'
					columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
				>
					<Masonry gutter='24px' className='mt-2'>
						<CreateNote />

						{bookmarks &&
							bookmarks.map((item) => {
								switch (item.documentMetadata.document_type) {
									case 'reddit':
										return (
											<BookmarkWrapper
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
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
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
											>
												<NoteCard
													data={item}
													onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									default:
										return (
											<BookmarkWrapper
												data={item}
												key={item._id}
												pinned={item.status.pinned}
												contextMenu={true}
												boards={boards}
											>
												<DefaultCard
													key={item._id}
													data={item}
													onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
								}
							})}
					</Masonry>
				</ResponsiveMasonry>
			</motion.div>

			{/* peak view */}
			<AnimatePresence>
				{activeBookmark?._id && isPeakOpen && !isFullView && (
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
				{activeBookmark?._id && isFullView && !isPeakOpen && (
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
				)}
			</AnimatePresence>
		</main>
	)
}

export default Page
