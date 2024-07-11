'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/outline'
import ShareIcon from '../../../assets/Icons/share2.svg'
import FilterIcon from '../../../assets/Icons/filter.svg'
import { AnimatePresence, motion } from 'framer-motion'
import GoBack from '@/components/ui/GoBack'
import useGetCookie from '@/components/cookies/useGetCookie'
import useRemoveCookie from '@/components/cookies/useRemoveCookies'
import ToastNotification from '@/components/ui/ToastNotification'
import { login } from '@/redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentList } from '@/redux/actions/documentActions'
import useDebounce from '@/components/hooks/useDebounce'
import axios from 'axios'
import Metadata from '@/components/seo/MetaHead'
import toast from 'react-hot-toast'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import DocumentWrapper from '@/components/wrappers/DocumentWrapper'
import RedditCard from '@/components/cards/RedditCard'
import TwitterCard from '@/components/cards/TwitterCard'
import YoutubeCard from '@/components/cards/YoutubeCard'
import ArticleCard from '@/components/cards/ArticleCard'
import ShoppingCard from '@/components/cards/ShoppingCard'
import PinterestCard from '@/components/cards/PinterestCard'
import ImdbCard from '@/components/cards/ImdbCard'
import NoteCard from '@/components/cards/NoteCard'
import DefaultCard from '@/components/cards/DefaultCard'
import AudioCard from '@/components/cards/AudioCard'
import { updateBlok } from '@/redux/actions/blokActions'
import { createBlok } from '@/helpers/utils/apis/crud/Blok'
import ShowDocuments from '@/components/ShowDocuments'

// export const metadata = Metadata({
// 	title: 'Boards | Bloks.Social',
// 	description:
// 		'Organise your documents, favorite tutorials, articles in one place.',
// 	image: '/favicon.ico',
// })

function Page() {
	let router = useRouter()
	const [showDocuments, setShowDocuments] = useState(false)
	const [blokObject, setBlokObject] = useState({
		profileId: '',
		userId: '',
		blokName: '',
		description: '',
		BloksDocument: [],
		public: false,
		deleted: false,
	})
	const [selectedDocuments, setSelectedDocuments] = useState([])
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userInfo)
	const getCookie = useGetCookie()
	const removeCookie = useRemoveCookie()
	const debouncedValue = useDebounce(blokObject, 1000)

	useEffect(() => {
		if (debouncedValue?.id) {
			updateBlok({
				blokObject,
				accessToken: userInfo?.userInfo?.accessToken,
			})
				.then((res) => {
					if (res.status === 200) {
						toast.success('Blok Updated')
					}
				})
				.catch((err) => {
					toast.error({ message: 'Something went wrong' })
				})
		} else {
			if (debouncedValue?.blokName) {
				createBlok({
					accessToken: userLogin.userInfo.accessToken,
					blokObject,
				})
					.then((res) => {
						if (res.status === 200) {
							toast.success('Blok Created')
							setBlokObject({
								...blokObject,
								id: res.data.id,
							})
						} else {
							toast.error('Something went wrong')
							router.push('/documents')
						}
					})
					.catch((err) => {
						toast.error('Something went wrong')
						router.push('/documents')
					})
			}
		}
	}, [debouncedValue])

	useEffect(() => {
		const accessToken = getCookie('accessToken')
		if (!accessToken) {
			router.push('/signin')
		} else if (!userLogin?.userInfo.id) {
			dispatch(login({ accessToken }))
		}
	}, [])

	useEffect(() => {
		if (userLogin?.error) {
			removeCookie('accessToken')
			ToastNotification({ message: 'Please Login Again' })
			router.push('/signin')
		}
	}, [userLogin])

	useEffect(() => {
		if (userLogin.userInfo.accessToken) {
			setBlokObject({
				...blokObject,
				profileId: userLogin.userInfo.profileId,
				userId: userLogin.userInfo.id,
			})
			dispatch(
				getDocumentList({ accessToken: userLogin.userInfo.accessToken })
			)

			setShowDocuments(true)
		}
	}, [userLogin.userInfo.accessToken])

	return (
		<div className='relative px-8 py-8'>
			{/* disables background content interaction when  */}
			<AnimatePresence>
				{showDocuments && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						onClick={() => setShowDocuments(false)}
						className='fixed inset-0 z-50 bg-black opacity-50'
					></motion.div>
				)}
			</AnimatePresence>

			<GoBack />

			<div className='flex items-start justify-between py-6 border-b'>
				<div className='space-y-2'>
					<input
						placeholder='Add title'
						className='w-full text-3xl font-semibold text-black outline-none libre-font placeholder:text-black/80'
						value={blokObject.blokName}
						onChange={(e) =>
							setBlokObject({
								...blokObject,
								blokName: e.target.value,
							})
						}
					/>
					<input
						placeholder='Description'
						className='w-full font-medium text-gray-400 outline-none'
						value={blokObject.description}
						onChange={(e) =>
							setBlokObject({
								...blokObject,
								description: e.target.value,
							})
						}
					/>
				</div>

				<div className='flex gap-4'>
					<Button variant={'secondary'} size={'icon'}>
						<Image
							alt='share'
							src={ShareIcon}
							className='w-5 h-5'
						/>
					</Button>
					<Button variant={'secondary'} size={'icon'}>
						<Image
							alt='filter'
							src={FilterIcon}
							className='w-5 h-5'
						/>
					</Button>
					<Button
						onClick={() => setShowDocuments(true)}
						variant={'secondary'}
						size={'icon'}
					>
						<PlusIcon className='w-6 h-6' />
					</Button>
				</div>
			</div>

			<div>
				<ResponsiveMasonry
					className='px-4 py-4'
					columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
				>
					<Masonry gutter='24px' className='mt-2'>
						{selectedDocuments &&
							setSelectedDocuments.map((item) => {
								switch (item.DocumentMetadata.documentType) {
									case 'reddit':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<RedditCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									case 'twitter':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<TwitterCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									case 'youtube':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<YoutubeCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									case 'article':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<ArticleCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									case 'shopping':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<ShoppingCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									case 'pinterest':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<PinterestCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									case 'imdb':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<ImdbCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)

									case 'audio':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<AudioCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									case 'note':
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<NoteCard
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
									default:
										return (
											<DocumentWrapper
												key={item.id}
												pinned={false}
												contextMenu={false}
											>
												<DefaultCard
													key={item}
													data={item}
													// onClick={handleCardClick}
												/>
											</DocumentWrapper>
										)
								}
							})}
					</Masonry>
				</ResponsiveMasonry>
			</div>

			{/* peak view */}
			<AnimatePresence>
				{showDocuments && (
					<motion.div
						initial={{ translateX: '100%' }}
						animate={{ translateX: 0 }}
						exit={{ translateX: '100%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='fixed flex flex-col gap-6 right-0 top-0 p-6 h-full w-[600px] overflow-y-scroll bg-white z-[100]'
					>
						<ShowDocuments
							// data={activeDocument}
							handleClose={() => {
								if (blokObject.documents.length > 0) {
									setShowDocuments(false)
								} else {
									ToastNotification({
										message:
											'Please select atleast one Document',
									})
								}
							}}
							blok={blokObject}
							setBlok={setBlokObject}
							selectedDocuments={selectedDocuments}
							selectedDocuments={selectedDocuments}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Page
