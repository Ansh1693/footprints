import { useEffect, useRef, useState } from 'react'
import { Microphone, Pause, Play } from '@phosphor-icons/react'
import { AudioVisualizer } from 'react-audio-visualize'
import axios from 'axios'

function AudioCard({ data, onClick }) {
	const [blob, setBlob] = useState(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [audioLength, setAudioLength] = useState(0)
	const date = new Date(data.createdAt).toDateString()

	// console.log(data?.DocumentMetadata?.url?.audio)

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

	useEffect(() => {
		if (blob) {
			const audioElement = new Audio(URL.createObjectURL(blob))

			audioElement.addEventListener('loadedmetadata', (e) => {
				console.log(audioElement)
				console.log(e)

				setAudioLength(audioElement.duration)
			})
		}
	}, [blob])

	return (
		<div
			className='w-full h-auto pb-2 border rounded-lg border-primary'
			key={data.id}
		>
			{/* post info */}
			<div
				onClick={() => onClick(data)}
				className='flex items-center gap-2 py-2 px-[16px] text-sm text-gray-600 border-b border-b-gray-300'
			>
				{/* <Image src={NoteIcon} width={20} height={20} /> */}
				<div className='flex w-5 h-5 p-0.5 rounded-full bg-primary'>
					<Microphone
						className='w-full h-full fill-white'
						weight='fill'
					/>
				</div>
				<p className=''>
					@{data?.User?.username || 'testing'} • {date.slice(4)}
				</p>
			</div>
			<div className='px-4 py-2 space-y-4'>
				{/* <p onClick={() => onClick(data)}>{audioLength}</p> */}

				<p className='px-[16px]'>
					{data.body.length > 100
						? data.body.slice(0, 100) + '.....'
						: data.body}
				</p>

				<div className='flex flex-col items-center w-full gap-4 px-4'>
					{blob && (
						<>
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
						</>
					)}

					{/* <audio ref={audioRef} controls /> */}
					<button
						onClick={() => setIsPlaying(!isPlaying)}
						className='w-[50px] h-[50px] p-2.5 rounded-full bg-primary'
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
				</div>
			</div>

			{/* <div className='flex justify-center w-full'>
				<audio ref={audioRef} controls preload='auto' />
				{/* <source
						src={data?.documentMetadata?.source_url}
						type='audio/mpeg'
					/>
			</div> */}

			{/* content */}
		</div>
	)
}

export default AudioCard
