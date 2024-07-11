import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from './ui/Button'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import ExpandIcon from '../assets/Icons/expand.svg'
import { ArrowsOutSimple, CaretDoubleRight, Pause, Play } from 'phosphor-react'
import { AudioVisualizer } from 'react-audio-visualize'

function PeakView({ data, handleClose, setIsFullView }) {
	const imageRef = React.useRef(null)

	const [imageDimensions, setImageDimensions] = React.useState({
		width: 0,
		height: 0,
	})
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
		if (data?.DocumentMetadata?.url?.audio) {
			fetch(data?.DocumentMetadata?.url?.audio)
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
	const handleImageLoad = () => {
		const { naturalHeight, naturalWidth } = imageRef.current
		setImageDimensions({ width: naturalWidth, height: naturalHeight })
	}
	return (
		<div className='space-y-4 bg-gray-50 h-full rounded-xl shadow-sm py-4 px-8'>
			{/* peak view controls */}
			<div className='w-full flex-end flex items-center gap-4'>
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

			{data && (
				<>
					<div className='text-[26px] uppercase font-semibold  font-sans'>
						{data?.heading
							? data?.heading
							: data?.body.slice(0, 1).toUpperCase() +
							  data?.body.slice(1, 5) +
							  '...'}
					</div>
					{data.DocumentMetadata.documentType === 'audio' && (
						<div className='space-y-6'>
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
						</div>
					)}
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
									maxHeight: `min(500px,${imageDimensions.height}px)`,
									maxWidth: `min(500px, ${imageDimensions.width}px)`,
								}}
								className={`rounded-md shadow-lg`}
							/>
						)} */}
					<div className='font-normal text-base text-slate-600 mt-1 font-inter max-w-[600px]'>
						{data?.body}
					</div>
				</>
			)}
		</div>
	)
}

export default PeakView
