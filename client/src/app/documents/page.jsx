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
	getDocumentList,
	deleteDocument,
	createDocument,
	updateDocument,
} from '@/redux/actions/documentActions'
import DocumentWrapper from '@/components/wrappers/DocumentWrapper'
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
import { uploadAudio, uploadImage } from '@/helpers/utils/apis/utilities/upload'
import { getBLokList } from '@/redux/actions/blokActions'
import SearchBar from '@/components/SearchBar'
import { readDocument } from '@/helpers/utils/apis/query/Document'

function Page() {
	const documents = useSelector((state) => state.documents.documents)
	const userInfo = useSelector((state) => state.userInfo.userInfo)
	const bloks = useSelector((state) => state.bloks.bloks)
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
	const [documentId, setDocumentId] = useState(
		searchParams.get('documentId') === null
			? null
			: searchParams.get('documentId')
	)
	const [activeDocument, setActiveDocument] = useState({})

	const getSingleDocument = (documentId) => {
		let header
		if (accessToken) header = accessToken
		else header = process.env.NEXT_PUBLIC_CLIENT_TOKEN

		readDocument({ documentId, accessToken: header })
			.then((res) => {
				if (res.status === 200) {
					setActiveDocument(res.data.data)
				} else {
					toast.error('You dont have access to this document')
					handleBackgroundClick()
				}
			})
			.catch((err) => {
				toast.error('You dont have access to this document')
				handleBackgroundClick()
			})
	}

	const handleBackgroundClick = () => {
		router.push('/documents')
		setActiveDocument({})
		setIsPeakOpen(false)
		setIsFullView(false)
	}
	// sets document data to be displayed in PeakView
	const handleCardClick = (documentData) => {
		setDocumentId(documentData.id)
		setIsPeakOpen(true)
		setIsFullView(false)
		router.push(`/documents?documentId=${documentData.id}&peak=true`)
	}

	const switchFullView = () => {
		router.push(`/documents?documentId=${documentId}&full=true`)
		setIsPeakOpen(false)
		setIsFullView(true)
	}

	const switchPeakView = () => {
		router.push(`/documents?documentId=${documentId}&peak=true`)
		setIsFullView(false)
		setIsPeakOpen(true)
	}

	const handleDelete = (documentData) => {
		dispatch(
			deleteDocument({
				documentObject: { id: documentData.id },
				accessToken: userInfo.accessToken,
			})
		)
	}

	const handleUpdate = (documentData) => {
		dispatch(
			updateDocument({
				documentObject: documentData,
				accessToken: userInfo.accessToken,
			})
		)
	}
	useEffect(() => {
		if (userInfo.accessToken) {
			dispatch(getDocumentList({ accessToken: userInfo.accessToken }))
		}
		if (userInfo.accessToken) {
			dispatch(getBLokList({ accessToken: userInfo.accessToken }))
		}
	}, [userInfo.accessToken])

	// handles query params
	useEffect(() => {
		if (!router) return
	}, [isFullView, router])

	useEffect(() => {
		if (searchParams.get('documentId')) {
			setDocumentId(searchParams.get('documentId'))
			setIsPeakOpen(searchParams.get('peak') === null ? false : true)
			setIsFullView(searchParams.get('full') === null ? false : true)
			if (documentId) {
				getSingleDocument(documentId)
			}
		}
	}, [searchParams])

	// when peakview and fullview is closed, set active document data to null
	useEffect(() => {
		if (!isPeakOpen && !isFullView) setActiveDocument(null)
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

		const response = await uploadImage(files[0], userInfo.accessToken)
		if (response.status === 200) {
			const url = response.data.data.url
			const date = new Date().toDateString()
			const documentObject = {
				heading: date.slice(4),
				profileId: userInfo.profileId,
				userId: userInfo.id,
				public: false,
				deleted: false,
				pinned: false,
				comment: false,
				DocumentMetadata: {
					documentType: 'image',
					url: {
						images: [url],
					},
				},
			}

			dispatch(
				createDocument({
					documentObject,
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
				{activeDocument?.id && isPeakOpen && (
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

						{documents &&
							documents.map((item) => {
								switch (item.DocumentMetadata.documentType) {
									case 'reddit':
										return (
											<DocumentWrapper
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
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
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
											>
												<NoteCard
													data={item}
													onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									default:
										return (
											<DocumentWrapper
												data={item}
												key={item.id}
												pinned={item.pinned}
												contextMenu={true}
												bloks={bloks}
											>
												<DefaultCard
													key={item.id}
													data={item}
													onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
								}
							})}
					</Masonry>
				</ResponsiveMasonry>
			</motion.div>

			{/* peak view */}
			<AnimatePresence>
				{activeDocument?.id && isPeakOpen && !isFullView && (
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
				{activeDocument?.id && isFullView && !isPeakOpen && (
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
				)}
			</AnimatePresence>
		</main>
	)
}

export default Page
