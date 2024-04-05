'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/outline'
import ShareIcon from '../../../assets/Icons/share2.svg'
import FilterIcon from '../../../assets/Icons/filter.svg'
import { AnimatePresence, motion } from 'framer-motion'
import ShowBookmarks from '@/components/ShowBookmarks'
import GoBack from '@/components/ui/GoBack'
import useGetCookie from '@/components/cookies/useGetCookie'
import useRemoveCookie from '@/components/cookies/useRemoveCookies'
import ToastNotification from '@/components/ui/ToastNotification'
import { login } from '@/redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { getBookmarkList } from '@/redux/actions/bookmarkActions'
import useDebounce from '@/components/hooks/useDebounce'
import axios from 'axios'
import Metadata from '@/components/seo/MetaHead'
import toast from 'react-hot-toast'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import BookmarkWrapper from '@/components/wrappers/BookmarkWrapper'
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

// export const metadata = Metadata({
// 	title: 'Boards | Bloks.Social',
// 	description:
// 		'Organise your bookmarks, favorite tutorials, articles in one place.',
// 	image: '/favicon.ico',
// })

function Page() {
	let router = useRouter()
	const [showBookmarks, setShowBookmarks] = useState(false)
	const [blokObject, setBlokObject] = useState({
		profile_id: '',
		user_id: '',
		blok_name: '',
		description: '',
		documents: [],
		status: {
			public: false,
			deleted: false,
		},
	})
	const [selectedBookmarks, setSelectedBookmarks] = useState([])
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userInfo)
	const getCookie = useGetCookie()
	const removeCookie = useRemoveCookie()
	const debouncedValue = useDebounce(blokObject, 1000)

	useEffect(() => {
		console.log(blokObject)
		if (debouncedValue?._id) {
			axios
				.patch(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/update`,
					{ blokObject },
					{
						headers: {
							Authorization: `Bearer ${userLogin.userInfo.accessToken}`,
						},
					}
				)
				.then((res) => {
					if (res.status === 200) {
						toast.success('Blok Updated')
					}
				})
				.catch((err) => {
					toast.error({ message: 'Something went wrong' })
				})
		} else {
			if (debouncedValue?.blok_name) {
				axios
					.post(
						`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/create`,
						{ blokObject },
						{
							headers: {
								Authorization: `Bearer ${userLogin.userInfo.accessToken}`,
							},
						}
					)
					.then((res) => {
						if (res.status === 200) {
							toast.success('Blok Created')
							console.log(res)
							setBlokObject({
								...blokObject,
								_id: res.data._id,
							})
						} else {
							toast.error('Something went wrong')
							router.push('/bookmarks')
						}
					})
					.catch((err) => {
						toast.error('Something went wrong')
						router.push('/bookmarks')
					})
			}
		}
	}, [debouncedValue])

	useEffect(() => {
		const accessToken = getCookie('accessToken')
		if (!accessToken) {
			router.push('/login')
		} else if (!userLogin?.userInfo._id) {
			dispatch(login({ accessToken }))
		}
	}, [])

	useEffect(() => {
		if (userLogin?.error) {
			removeCookie('accessToken')
			ToastNotification({ message: 'Please Login Again' })
			router.push('/login')
		}
	}, [userLogin])

	useEffect(() => {
		if (userLogin.userInfo.accessToken) {
			setBlokObject({
				...blokObject,
				profile_id: userLogin.userInfo.profile_id,
				user_id: userLogin.userInfo._id,
			})
			dispatch(
				getBookmarkList({ accessToken: userLogin.userInfo.accessToken })
			)

			setShowBookmarks(true)
		}
	}, [userLogin.userInfo.accessToken])

	return (
		<div className='relative px-8 py-8'>
			{/* disables background content interaction when  */}
			<AnimatePresence>
				{showBookmarks && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						onClick={() => setShowBookmarks(false)}
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
						value={blokObject.blok_name}
						onChange={(e) =>
							setBlokObject({
								...blokObject,
								blok_name: e.target.value,
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
						onClick={() => setShowBookmarks(true)}
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
						{selectedBookmarks &&
							selectedBookmarks.map((item) => {
								switch (item.documentMetadata.document_type) {
									case 'reddit':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<RedditCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									case 'twitter':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<TwitterCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									case 'youtube':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<YoutubeCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									case 'article':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<ArticleCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									case 'shopping':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<ShoppingCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									case 'pinterest':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<PinterestCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									case 'imdb':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<ImdbCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)

									case 'audio':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<AudioCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									case 'note':
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<NoteCard
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
									default:
										return (
											<BookmarkWrapper
												key={item._id}
												pinned={false}
												contextMenu={false}
											>
												<DefaultCard
													key={item._id}
													data={item}
													// onClick={handleCardClick}
												/>
											</BookmarkWrapper>
										)
								}
							})}
					</Masonry>
				</ResponsiveMasonry>
			</div>

			{/* peak view */}
			<AnimatePresence>
				{showBookmarks && (
					<motion.div
						initial={{ translateX: '100%' }}
						animate={{ translateX: 0 }}
						exit={{ translateX: '100%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='fixed flex flex-col gap-6 right-0 top-0 p-6 h-full w-[600px] overflow-y-scroll bg-white z-[100]'
					>
						<ShowBookmarks
							// data={activeBookmark}
							handleClose={() => {
								if (blokObject.documents.length > 0) {
									setShowBookmarks(false)
								} else {
									ToastNotification({
										message:
											'Please select atleast one bookmark',
									})
								}
							}}
							blok={blokObject}
							setBlok={setBlokObject}
							selectedBookmarks={selectedBookmarks}
							setSelectedBookmarks={setSelectedBookmarks}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Page
