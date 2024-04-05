import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from './ui/Button'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Badge } from './ui/Badge'
import { Input } from './ui/Input'
import ProfileImg from '../../public/static/profile.jpeg'
import Comment from './Comment'
import { ArrowSquareOut, ArrowsInSimple, X, Play, Pause } from 'phosphor-react'
import { Settings } from 'lucide-react'
import { useAutosave } from 'react-autosave'
// import useDebounce from './hooks/useDebounce'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import ContentEditable from 'react-contenteditable'
import { convert } from 'html-to-text'
import { useDispatch } from 'react-redux'
import { setUpdateBookmark } from '@/redux/actions/bookmarkActions'
import { AudioVisualizer } from 'react-audio-visualize'
import SettingOptions from './controls/SettingOptions'

function FullView({ data, handleClose, peakView, accessToken, edit = true }) {
	const imageRef = React.useRef(null)
	const [editTitle, setEditTitle] = React.useState(false)
	const [editBody, setEditBody] = React.useState(false)
	const dispatch = useDispatch()
	const [bookmarkData, setBookmarkData] = React.useState({ ...data })
	const [title, setTitle] = React.useState(
		data?.heading
			? data?.heading
			: data?.body.slice(0, 1).toUpperCase() +
					data?.body.slice(1, 5) +
					'...'
	)

	const [imageDimensions, setImageDimensions] = React.useState({
		width: 0,
		height: 0,
	})

	const editTitleRef = React.useRef(null)
	const editBodyRef = React.useRef(null)
	const [htmlText, setHtmlText] = React.useState(
		data?.body?.replace(/\n/g, '<br />') || 'Start Typing..'
	)

	const [blob, setBlob] = useState(null)
	const [isPlaying, setIsPlaying] = useState(false)

	const visualizerRef = useRef(null)
	const audioPlayer = useRef(null)

	useEffect(() => {
		if (!audioPlayer.current || !blob) return

		const ended = audioPlayer.current.addEventListener('ended', () => {
			setIsPlaying(false)
		})

		if (isPlaying) audioPlayer.current.play()
		else audioPlayer.current.pause()
	}, [isPlaying])

	useEffect(() => {
		if (data?.documentMetadata?.source_url) {
			fetch(data?.documentMetadata?.source_url)
				.then((res) => {
					return res.blob()
				})
				.then((blob) => {
					setBlob(blob)
				})
				.catch((err) => console.log(err))
		} else {
			setBlob(null)
		}
	}, [])

	// const debouncedValue = useDebounce(bookmarkData, 1000)

	// React.useEffect(() => {
	// 	if (debouncedValue) {
	// 		updateBookmark(bookmarkData)
	// 	}
	// }, [debouncedValue])

	React.useEffect(() => {
		if (editTitle) {
			editTitleRef.current.focus()
			editTitleRef.current.textContent = title
		}
		if (editBody) {
			editBodyRef.current.focus()
		}
		const handleClickOutside = (event) => {
			if (
				editTitleRef.current &&
				!editTitleRef.current.contains(event.target)
			) {
				setEditTitle(false)
			}

			if (
				editBodyRef.current &&
				!editBodyRef.current.contains(event.target)
			) {
				console.log(editBodyRef.current)
				setEditBody(false)
			}
		}

		if (editTitle || editBody) {
			document.addEventListener('click', handleClickOutside)
		} else {
			document.removeEventListener('click', handleClickOutside)
		}

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [editTitle, editBody])

	// React.useEffect(() => {
	// 	if (editBody) {
	// 		editBodyRef.current.focus()
	// 	}
	// 	const handleClickOutside = (event) => {
	// 		if (
	// 			editTitleRef.current &&
	// 			!editTitleRef.current.contains(event.target)
	// 		) {
	// 			setEditTitle(false)
	// 		}

	// 		if (
	// 			editBodyRef.current &&
	// 			!editBodyRef.current.contains(event.target)
	// 		) {
	// 			setEditBody(false)
	// 		}
	// 	}

	// 	if (editBody) {
	// 		document.addEventListener('click', handleClickOutside)
	// 	} else {
	// 		document.removeEventListener('click', handleClickOutside)
	// 	}

	// 	return () => {
	// 		document.removeEventListener('click', handleClickOutside)
	// 	}
	// }, [editBody])

	React.useEffect(() => {
		if (
			data?.body !== bookmarkData?.body ||
			data?.heading !== bookmarkData?.heading
		) {
			dispatch(setUpdateBookmark(bookmarkData))
		}
	}, [bookmarkData])

	useAutosave({
		data: bookmarkData,
		onSave: (bookData) => {
			if (
				data?.heading !== bookData?.heading ||
				data.body !== bookData.body
			)
				updateBookmark(bookData)
		},
	})

	const updateBookmark = (data) => {
		axios
			.patch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/document/update`,
				{ documentObject: { ...data } },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)
			.then((response) => {
				if (response.status === 200) {
					toast.success('Bookmark updated successfully')
				} else {
				}
			})
	}
	// useAutosave({ data: bookmarkData, onSave: updateBookmark })
	const handleClickEditTitle = (e) => {
		setEditTitle(true)
		if (editTitleRef.current) {
			editTitleRef.current.focus()
		}
	}

	const handleClickEditBody = () => {
		// if (editBody) {
		// 	setEditBody(false)
		// } else {
		if (!bookmarkData?.body || htmlText === 'Start Typing..') {
			setHtmlText('')
		}
		setEditBody(true)
		// }
	}

	const handleChangeTitle = (e) => {
		setTitle(e.target.innerText)
		editTitleRef.current.textContent = e.target.innerText
		setBookmarkData({ ...bookmarkData, heading: e.target.innerText })
	}

	const handleChangeBody = (e) => {
		const text1 = convert(e.target.value, {
			wordwrap: null, // Adjust line width as needed
			// preserveNewlines: true,
			// singleNewLineParagraphs: true,
		})

		setBookmarkData({ ...bookmarkData, body: text1 })
		setHtmlText(text1.replace(/\n/g, '<br />'))
	}

	const handleImageLoad = () => {
		const { naturalHeight, naturalWidth } = imageRef.current
		setImageDimensions({ width: naturalWidth, height: naturalHeight })
	}
	return (
		<div className='space-y-4'>
			{/* header */}

			<div className='sticky top-0 z-10 flex items-center justify-between w-full p-6 pb-2 bg-white'>
				{/* title of bookmark */}
				{bookmarkData && editTitle && (
					<div
						className='flex-1 overflow-hidden   rounded-lg text-[32px] w-full bg-white font-semibold libre-font outline-none focus:border-none'
						ref={editTitleRef}
						contentEditable={editTitle}
						onInput={(e) => handleChangeTitle(e)}
					></div>
				)}
				{bookmarkData && !editTitle && (
					<div
						onClick={(e) => {
							if (!edit) return
							handleClickEditTitle(e)
						}}
						className='flex-1 overflow-hidden   rounded-lg text-[32px] w-full bg-white font-semibold libre-font outline-none focus:border-none'
						ref={editTitleRef}
					>
						{title}
					</div>
				)}
				{/* full view controls */}
				<div className='ml-3 flex gap-4'>
					{/* open button */}
					<Button
						// onClick={handleClose}
						variant={'secondary'}
						size={'icon'}
					>
						<ArrowSquareOut size={24} />
					</Button>

					{/* collapse button */}
					<Button
						onClick={() => peakView()}
						variant={'secondary'}
						size={'icon'}
					>
						<ArrowsInSimple size={24} />
					</Button>

					{/* settings button */}
					<Button
						onClick={() => peakView()}
						variant={'secondary'}
						size={'icon'}
					>
						<SettingOptions />
					</Button>

					{/* close button */}
					<Button
						onClick={() => handleClose(false)}
						variant={'secondary'}
						size={'icon'}
					>
						<X size={24} />
					</Button>
				</div>
			</div>

			<div className='flex gap-12 px-6 h-full'>
				{/* content */}
				{bookmarkData && (
					<div className='w-3/4'>
						{bookmarkData.documentMetadata &&
							bookmarkData.documentMetadata.bodyImage_url && (
								<img
									ref={imageRef}
									src={
										bookmarkData.documentMetadata
											.bodyImage_url
									}
									onLoad={handleImageLoad}
									style={{
										aspectRatio: `${
											imageDimensions.width /
											imageDimensions.height
										}`,
										maxHeight: `min(600px,${imageDimensions.height}px)`,
										maxWidth: `min(800px, ${imageDimensions.width}px)`,
									}}
									className={`rounded-md shadow-lg`}
								/>
							)}

						{bookmarkData.documentMetadata.document_type ===
							'audio' && (
							<div className='flex items-center gap-4'>
								<button
									onClick={() => setIsPlaying(!isPlaying)}
									className='w-12 h-12 p-2 text-white rounded-full bg-primary'
								>
									{isPlaying ? (
										<Pause
											width={'auto'}
											height={'auto'}
											weight='fill'
											fill='white'
										/>
									) : (
										<Play
											width={'auto'}
											height={'auto'}
											weight='fill'
											fill='white'
										/>
									)}
								</button>

								{/* <p className='text-lg font-medium'>Play voice note</p> */}

								{blob && (
									<div className=''>
										<audio
											className='hidden'
											src={URL.createObjectURL(blob)}
											ref={audioPlayer}
											controls={false}
										/>
										<AudioVisualizer
											ref={visualizerRef}
											blob={blob}
											width={250}
											height={48}
											barWidth={1}
											gap={4}
											barColor={'#2C5DBB'}
										/>
									</div>
								)}
							</div>
						)}

						{/* <div className='py-2 -space-y-1'>
							<p className='text-lg font-medium'>
								{bookmarkData?.title
									? bookmarkData?.title
									: bookmarkData?.body.slice(0, 1).toUpperCase() +
									  bookmarkData?.body.slice(1, 5) +
									  '...'}
							</p>
							<p className='text-xs text-gray-500'>by Test</p>
						</div> */}

						{/* <p>{bookmarkData.body}</p> */}
						{!editBody && (
							<div
								className='w-full mt-4  flex-shrink-0'
								onClick={() => {
									if (!edit) return
									handleClickEditBody()
								}}
							>
								<p
									dangerouslySetInnerHTML={{
										__html: htmlText,
									}}
								></p>
							</div>
						)}
						{editBody && (
							<div className='w-full mt-4  flex-shrink-0'>
								<ContentEditable
									// disabled={editBody}
									onChange={handleChangeBody}
									html={htmlText}
									innerRef={editBodyRef}
									className='focus:outline-none focus:border-none'
								/>
							</div>
						)}
					</div>
				)}

				{/* right sidebar */}
				<div>
					<div className='sticky space-y-8 top-24'>
						{/* tags */}
						<div className='overflow-hidden bg-white border-2 rounded-lg border-secondary'>
							{/* add tags */}
							<div className='flex items-center gap-4 p-4 border-b'>
								<div className='p-[1px] rounded-[6px] gradient-border h-[31px]'>
									<Input
										type='text'
										placeholder='Add a new tag'
										className={
											'text-[12px] text-primary border-none h-full rounded-[6px]'
										}
									/>
								</div>
								<Button className={'text-xs'}>Add</Button>
							</div>

							<div className='flex flex-wrap gap-2 p-4'>
								<Badge>ui/ux</Badge>
								<Badge>design</Badge>
								<Badge>visuals</Badge>
								<Badge>learnings</Badge>
								<Badge>youtube</Badge>
							</div>
						</div>

						{/* comments */}
						<div className='overflow-hidden bg-white border-2 rounded-lg border-secondary'>
							{/* add tags */}
							<div className='flex items-center gap-4 p-4 border-b'>
								<Image
									alt='profile'
									src={ProfileImg}
									width={32}
									height={32}
									alt={bookmarkData.name}
									className='rounded-full'
								/>
								<div className='p-[1px] rounded-[6px] gradient-border h-[31px]'>
									<Input
										type='text'
										placeholder='Comment your thoughts'
										className={
											'text-[12px] text-primary border-none h-full rounded-[6px]'
										}
									/>
								</div>
								<Button className={'text-xs'}>Add</Button>
							</div>

							{/* comments */}
							<div>
								<Comment />
								<Comment />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FullView
