'use client'

import Image from 'next/image'
import BannerImg from '../../../../public/static/alexbanner.png'
import { Button } from '@/components/ui/Button'
import { ArrowLeftIcon, PenIcon } from 'lucide-react'
import postData from '@/data/postsData'
import FollowButton from '@/components/ui/FollowButton'
import ProfileImg from '../../../../public/static/alex.png'
import RedditCard from '@/components/cards/RedditCard'
import TwitterCard from '@/components/cards/TwitterCard'
import YoutubeCard from '@/components/cards/YoutubeCard'
import ShoppingCard from '@/components/cards/ShoppingCard'
import ArticleCard from '@/components/cards/ArticleCard'
import PinterestCard from '@/components/cards/PinterestCard'
import ImdbCard from '@/components/cards/ImdbCard'
import DefaultCard from '@/components/cards/DefaultCard'
import React, { useState } from 'react'
import ShareBlok from '@/components/controls/ShareBlok'
import FilterOptions from '@/components/controls/FilterOptions'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useGetCookie from '@/components/cookies/useGetCookie'
import axios from 'axios'
import NoteCard from '@/components/cards/NoteCard'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import DocumentWrapper from '@/components/wrappers/DocumentWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/redux/actions/userActions'
import { toast } from 'react-hot-toast'
import { uploadImage } from '@/helpers/utils/apis/utilities/upload'
import { updateBlok } from '@/redux/actions/blokActions'
import { AnimatePresence, motion } from 'framer-motion'
import FullView from '@/components/FullView'
import PeakView from '@/components/PeakView'
import AudioCard from '@/components/cards/AudioCard'
import {
	followBlok,
	readBlok,
	unfollowBlok,
} from '@/helpers/utils/apis/query/Blok'

function Page() {
	const router = useRouter()
	const { id } = useParams()
	const searchParams = useSearchParams()
	const dispatch = useDispatch()
	const getCookie = useGetCookie()
	const accessToken = getCookie('accessToken')
	const [blokData, setBlokData] = useState(null)
	const userInfo = useSelector((state) => state.userInfo.userInfo)
	const [editable, setEditable] = useState(false)
	const [follow, setFollow] = useState(false)
	const [isPeakOpen, setIsPeakOpen] = useState(
		searchParams.get('peak') === null ? false : true
	)
	const [isFullView, setIsFullView] = useState(
		searchParams.get('false') === null ? false : true
	)
	const [documentId, setDocumentId] = useState(searchParams.get('documentId'))
	const [documentData, setDocumentData] = useState({})
	const [publicCheck, setPublicCheck] = useState(false)
	//get blok
	const fetchBlok = () => {
		let header
		if (accessToken) {
			header = accessToken
			if (!userInfo?.id) {
				dispatch(login({ accessToken }))
			}
		} else {
			header = process.env.NEXT_PUBLIC_CLIENT_TOKEN
		}
		// read Blok using id
		readBlok({ accessToken: header, blokId: id })
			.then((res) => {
				if (res.status === 200) {
					setBlokData(res.data.data)
					setPublicCheck(res.data.data.status.public)
				} else {
					router.push('/documents')
				}
			})
			.catch((err) => {
				console.log(err)
				router.push('/documents')
			})
	}
	//get blok on render
	useEffect(() => {
		fetchBlok()
	}, [])
	//for editable and follow
	useEffect(() => {
		if (blokData && userInfo?.id) {
			if (
				blokData?.userId === userInfo.id &&
				blokData?.profileId === userInfo.profileId
			) {
				setEditable(true)
			}

			if (
				blokData?.BlokFollowers?.filter(
					(item) => item.userId === userInfo.id
				).length >= 1
			) {
				setFollow(true)
			}
		}
		if (documentId && blokData?.BloksDocument && !documentData) {
			const document = blokData?.BloksDocument?.find(
				(item) => item.documentId === documentId
			)
			setDocumentData(document.Document)
		}
	}, [blokData, userInfo])

	useEffect(() => {
		if (searchParams.get('documentId')) {
			setDocumentId(searchParams.get('documentId'))
			setIsPeakOpen(searchParams.get('peak') === null ? false : true)
			setIsFullView(searchParams.get('full') === null ? false : true)
			if (documentId && blokData?.BloksDocument && !documentData) {
				const document = blokData?.BloksDocument?.find(
					(item) => item.documentId === documentId
				)
				setDocumentData(document.Document)
			}
		}
	}, [searchParams])
	//handle banner
	const handleBanner = async (e) => {
		const file = e.target.files[0]
		if (
			file.type !== 'image/png' &&
			file.type !== 'image/jpg' &&
			file.type !== 'image/jpeg'
		) {
			toast.error('Please select jpg, jpeg or png file')
			bannerPicker()
		}
		try {
			const response = await uploadImage({ accessToken, file })

			const url = response.data.data.url

			if (url) {
				const blokObject = {
					...blokData,
					BlokMetadata: {
						...blokData?.BlokMetadata,
						blokHeader: url,
					},
				}
				setBlokData(blokObject)
				dispatch(updateBlok({ blokObject, accessToken }))
			}
		} catch (error) {
			toast.error('Something went wrong')
		}
	}
	//handle follow
	const handleFollow = () => {
		if (!accessToken && !userInfo?.id) {
			toast.error('Please login to follow')
			return
		}

		if (editable) {
			toast.error('You cannot follow your own board')
			return
		}

		if (follow) {
			unfollowBlok({
				accessToken,
				blokObject: {
					id: blokData.id,
					userId: blokData.userId,
				},
			})
				.then((res) => {
					if (res.status === 200) {
						setFollow(false)
						toast.success('Unfollowed')
						fetchBlok()
					}
				})
				.catch((err) => {
					console.log(err)
					toast.error('Something went wrong')
				})
		} else {
			followBlok({
				accessToken,
				blokObject: {
					id: blokData.id,
					userId: blokData.userId,
				},
			})
				.then((res) => {
					if (res.status === 200) {
						setFollow(true)
						toast.success('Followed')
						fetchBlok()
					}
				})
				.catch((err) => {
					console.log(err)
					toast.error('Something went wrong')
				})
		}
	}
	//hidden input trigger
	const bannerPicker = () => {
		document.getElementById('banner-picker').click()
	}

	const handleCardClick = (documentData) => {
		setIsPeakOpen(true)
		setDocumentId(documentData._id)
		setIsFullView(false)
		router.push(`/blok/${id}?documentId=${documentId}&peak=true`)
	}

	const handleBackgroundClick = () => {
		router.push(`/blok/${id}`)
		setDocumentData({})
		setIsPeakOpen(false)
		setIsFullView(false)
	}

	const switchFullView = () => {
		router.push(`/blok/${id}?documentId=${documentId}&full=true`)
		setIsPeakOpen(false)
		setIsFullView(true)
	}

	const switchPeakView = () => {
		router.push(`/blok/${id}?documentId=${documentId}&peak=true`)
		setIsFullView(false)
		setIsPeakOpen(true)
	}

	const handlePublic = () => {
		updateBlok({
			accessToken,
			blokObject: {
				...blokData,
				public: !publicCheck,
			},
		})
			.then((res) => {
				if (res.status === 200) {
					toast.success(
						`${
							publicCheck ? 'Blok is private!' : 'Blok is public!'
						}`
					)
					setBlokData({
						...blokData,
						public: !publicCheck,
					})
					setPublicCheck(!publicCheck)
				}
			})
			.catch((err) => {
				toast.error({ message: 'Something went wrong' })
			})
	}

	return (
		<>
			{/* disables background content interaction when  */}
			<AnimatePresence>
				{documentData?._id && isPeakOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						onClick={() => handleBackgroundClick()}
						className='fixed inset-0 z-50 bg-black opacity-50'
					></motion.div>
				)}
			</AnimatePresence>
			<div>
				<div className='relative w-screen h-48 overflow-hidden group'>
					<Image
						src={
							blokData?.BlokMetadata?.blokHeader
								? blokData?.BlokMetadata?.blokHeader
								: BannerImg
						}
						alt='banner'
						width={0}
						height={192}
						sizes='100vw'
						className='object-cover w-full h-48'
						priority={true}
					/>
					<div className='absolute top-0 left-0 w-full h-48 bg-black/40'></div>
					{editable && (
						<div
							className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-48 gap-2 pb-8 text-sm text-white duration-300 opacity-0 cursor-pointer group-hover:opacity-100 bg-black/60'
							onClick={() => bannerPicker()}
						>
							<PenIcon className='w-5 h-5 text-white' />
							<p>Change cover</p>
						</div>
					)}
					<input
						type='file'
						accept='image/*'
						id='banner-picker'
						className='hidden'
						value=''
						onChange={(e) => handleBanner(e)}
					/>
					<Button
						onClick={() => router.back()}
						className='absolute z-20 p-2 pr-4 text-sm font-normal cursor-pointer hover:text-white text-white/70 top-4 left-4 backdrop-blur-md bg-black/40'
					>
						<ArrowLeftIcon className='w-4 h-4' />
						Go Back
					</Button>
				</div>

				{/* blok content */}
				<div className='p-8'>
					<div className='space-y-3'>
						<div className='flex items-start justify-between'>
							<div className='flex items-center gap-[12px]'>
								<h1 className='text-4xl font-semibold capitalize libre-font'>
									{blokData?.blokName
										? blokData.blokName
										: 'Blok Name'}
								</h1>
								{!editable && (
									<FollowButton
										follow={follow}
										handleFollow={handleFollow}
									/>
								)}
							</div>
							<div className='flex gap-4'>
								<ShareBlok
									editable={editable}
									publicCheck={publicCheck}
									handlePublic={handlePublic}
									id={id}
								/>
								<FilterOptions />
							</div>
						</div>

						<div className='flex items-center gap-2'>
							<Image
								src={
									blokData?.User?.UserMetadata?.profileImage
										? blokData?.User?.UserMetadata
												?.profileImage
										: ProfileImg
								}
								alt='profile'
								width={24}
								height={24}
								className='object-cover w-6 h-6 overflow-hidden rounded-full'
							/>
							<p className='flex gap-1 text-sm text-gray-400'>
								by {blokData?.user_id?.name}
								<span className='text-gray-200'>|</span>
								<span className=' text-[#9CB1DA]'>
									{blokData?.BlokFollowers.length} followers
								</span>
							</p>
						</div>

						<p className='text-[rgb(156,177,218)]'>
							{blokData?.description}
						</p>
					</div>

					<hr className='my-6 border-gray-300' />

					<ResponsiveMasonry
						className='px-4 py-4'
						columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
					>
						<Masonry gutter='24px' className='mt-2'>
							{blokData?.BloksDocument &&
								blokData.BloksDocument.map((item) => {
									switch (
										item.Document.DocumentMetadata
											.documentType
									) {
										case 'reddit':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<RedditCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										case 'twitter':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<TwitterCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										case 'youtube':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<YoutubeCard
														data={item}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										case 'article':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<ArticleCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										case 'shopping':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<ShoppingCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										case 'pinterest':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<PinterestCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										case 'imdb':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<ImdbCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)

										case 'audio':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<AudioCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										case 'note':
											return (
												<DocumentWrapper
													key={item.documentId}
													pinned={false}
													contextMenu={false}
												>
													<NoteCard
														data={item.Document}
														onClick={
															handleCardClick
														}
													/>
												</DocumentWrapper>
											)
										default:
											return (
												<DefaultCard
													key={item.documentId}
													data={item.Document}
													onClick={handleCardClick}
												/>
											)
									}
								})}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</div>
			{/* peak view */}
			<AnimatePresence>
				{documentData?.id && isPeakOpen && !isFullView && (
					<motion.div
						initial={{ translateX: '100%' }}
						animate={{ translateX: 0 }}
						exit={{ translateX: '100%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='fixed flex flex-col gap-6 right-0 top-0 p-6 h-full w-[600px] overflow-y-scroll bg-white z-[100]'
					>
						<PeakView
							data={documentData}
							handleClose={handleBackgroundClick}
							setIsFullView={switchFullView}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			{/* full view */}
			<AnimatePresence>
				{documentData?.id && isFullView && !isPeakOpen && (
					<motion.div
						initial={{ translateX: '100%' }}
						animate={{ translateX: 0 }}
						exit={{ translateX: '100%' }}
						transition={{ duration: 0.3 }}
						className='fixed flex flex-col gap-6 right-0 top-0 h-full w-full overflow-y-scroll bg-white pb-10 z-[100]'
					>
						<FullView
							data={documentData}
							peakView={switchPeakView}
							handleClose={handleBackgroundClick}
							accessToken={userInfo.accessToken}
							edit={editable}
						/>
					</motion.div>
				)}{' '}
			</AnimatePresence>
		</>
	)
}

export default Page
