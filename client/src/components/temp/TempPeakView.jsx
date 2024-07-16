import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/Button'
import {
	ArrowsOutSimple,
	CaretDoubleRight,
	Pause,
	Play,
} from '@phosphor-icons/react'
import { AudioVisualizer } from 'react-audio-visualize'

function TempPeakView({ data, handleClose, setIsFullView }) {
	// const imageRef = React.useRef(null)
	// const [imageDimensions, setImageDimensions] = React.useState({
	// 	width: 0,
	// 	height: 0,
	// })

	// console.log(data)

	// const handleImageLoad = () => {
	// 	const { naturalHeight, naturalWidth } = imageRef.current
	// 	setImageDimensions({ width: naturalWidth, height: naturalHeight })
	// }

	const [blob, setBlob] = useState(null)
	const [isPlaying, setIsPlaying] = useState(false)

	const visualizerRef = useRef(null)
	const audioPlayer = useRef(null)

	/* The `useEffect` hook in the provided code is used to fetch an audio file and create a Blob object
    from it. */
	useEffect(() => {
		// Fetch the audio file and create a Blob
		// test audio url - https://cdn-testing.bloks.social/testing/369f397c-b42d-4c65-91b3-9cb96d7bf02e_Recording.mp3
		fetch('/static/audio.mp3') // Adjust the path to your audio file
			.then((response) => response.blob())
			.then((blob) => {
				setBlob(blob)
			})
			.catch((error) => {
				console.error('Error fetching audio:', error)
			})
	}, [])

	/* The `useEffect` hook in the provided code is responsible for controlling the playback of an audio
    file. */
	useEffect(() => {
		if (!audioPlayer.current || !blob) return

		const ended = audioPlayer.current.addEventListener('ended', () => {
			setIsPlaying(false)
		})

		if (isPlaying) audioPlayer.current.play()
		else audioPlayer.current.pause()
	}, [isPlaying])

	/* The `useEffect` hook in the provided code is used to fetch an audio file and create a Blob object
    from it. */
	useEffect(() => {
		if (data.documentMetadata.document_type !== 'audio') return
		// Fetch the audio file and create a Blob
		fetch('/static/audio.mp3') // Adjust the path to your audio file
			.then((response) => response.blob())
			.then((blob) => {
				audioRef.current.src = URL.createObjectURL(blob)
			})
			.catch((error) => {
				console.error('Error fetching audio:', error)
			})
	}, [])

	return (
		<div className='h-full space-y-[34px]'>
			{/* peak view controls */}
			<div className='flex items-center gap-4'>
				{/* collapse button */}
				<Button
					variant={'secondary'}
					size={'icon'}
					onClick={() => handleClose(false)}
				>
					<CaretDoubleRight size={24} />
				</Button>

				{/* expnad button */}
				<Button
					variant={'secondary'}
					size={'icon'}
					onClick={() => setIsFullView(true)}
				>
					<ArrowsOutSimple size={24} />
				</Button>
			</div>

			{/* {data && ( */}
			<>
				{data.documentMetadata.document_type === 'audio' ? (
					<div className='space-y-6'>
						<h1 className='text-[32px] uppercase font-bold libre-font'>
							This is audio peak view!
						</h1>

						<div className='flex items-center gap-4'>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className='w-[50px] h-[50px] p-2 text-white rounded-full bg-primary'
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

						<p>
							Aliquip duis aliqua eu minim in excepteur. Quis
							nostrud nostrud incididunt aliqua ipsum enim qui
							duis labore eiusmod sint laboris commodo occaecat.
							Lorem in aute nostrud ut. Nostrud voluptate in
							officia occaecat velit qui culpa fugiat quis laborum
							cupidatat dolor pariatur. Consectetur velit
							consequat aliqua. Qui eiusmod labore incididunt
							nostrud irure enim velit eu nostrud. In id magna
							velit.
						</p>
					</div>
				) : (
					<div>
						<h1 className='text-[32px] uppercase font-bold libre-font'>
							This is heading!!
							{/* {data?.heading
							? data?.heading
							: data?.body.slice(0, 1).toUpperCase() +
							  data?.body.slice(1, 5) +
							  '...'} */}
						</h1>
						{/* {data.documentMetadata &&
						data.documentMetadata.bodyImage_url && (
							<img
								ref={imageRef}
								src={data.documentMetadata.bodyImage_url}
								onLoad={handleImageLoad}
								style={{
									aspectRatio: `${
										imageDimensions.width /
										imageDimensions.height
									}`,
									maxHeight: `min(600px,${imageDimensions.height}px)`,
									maxWidth: `min(600px, ${imageDimensions.width}px)`,
								}}
								className={`rounded-md shadow-lg`}
							/>
						)} */}
						<div className='font-normal text-base text-[#9CB1DA] font-inter max-w-[600px]'>
							{/* {data?.body} */}
							This is body
						</div>
					</div>
				)}
			</>
		</div>
	)
}

export default TempPeakView
