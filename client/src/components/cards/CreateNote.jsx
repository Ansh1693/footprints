import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import NoteIcon from '../../assets/Icons/note.svg'
import Image from 'next/image'
import cn from 'mxcn'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ToastNotification from '@/components/ui/ToastNotification'
import {
	FloppyDisk,
	Microphone,
	Pause,
	Play,
	Stop,
	Check,
	X,
	PlusCircle,
	MicrophoneSlash,
	ImageBroken,
} from '@phosphor-icons/react'
import { AudioVisualizer, LiveAudioVisualizer } from 'react-audio-visualize'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'
import { toast } from 'react-hot-toast'
import { createDocument } from '@/helpers/utils/apis/crud/Document'
import { uploadAudio, uploadImage } from '@/helpers/utils/apis/utilities/upload'
import { getDocumentList } from '@/redux/actions/documentActions'

function CreateNote({ images, setImages }) {
	// const [note, setNote] = useState('')
	// const userInfo = useSelector((state) => state.userInfo.userInfo)
	// const dispatch = useDispatch()

	// const handleAudioClick = () => {
	// 	document.getElementById('audio-picker').click()
	// }

	// const handleAudioChange = async (e) => {
	// 	const file = new FormData()
	// 	file.append('file', e.target.files[0])

	// 	try {
	// 		const response = await axios.post(
	// 			`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/upload?query_type=audio`,
	// 			file,
	// 			{
	// 				headers: {
	// 					'Content-Type': 'multipart/form-data',
	// 					Authorization: `Bearer ${userInfo.accessToken}`,
	// 				},
	// 			}
	// 		)
	// 		if (response.status === 200) {
	// 			ToastNotification({ message: 'Audio Saved' })
	// 			setAudioFile(response.data.data.url)
	// 		} else {
	// 			ToastNotification({ message: 'Error Saving Audio' })
	// 		}
	// 	} catch (error) {
	// 		ToastNotification({ message: 'Error Saving Audio' })
	// 	}
	// }

	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	if (note.length === 0) {
	// 		ToastNotification({ message: 'Empty Note' })
	// 	}
	// 	const documentObject = {
	// 		profile_id: userInfo.profile_id,
	// 		status: {
	// 			public: false,
	// 			deleted: false,
	// 			pinned: false,
	// 			comments: false,
	// 		},
	// 		title: note.slice(0, 1).toUpperCase() + note.slice(1, 6) + '...',
	// 		body: note,
	// 	}

	// 	if (audioFile) {
	// 		documentObject.documentMetadata = {
	// 			document_type: 'audio',
	// 			source_url: audioFile,
	// 		}
	// 	} else {
	// 		documentObject.documentMetadata = {
	// 			document_type: 'note',
	// 		}
	// 	}
	// 	try {
	// 		const response = await axios.post(
	// 			`${process.env.NEXT_PUBLIC_SERVER_URL}/document/create`,
	// 			{ documentObject },
	// 			{
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: `Bearer ${userInfo.accessToken}`,
	// 				},
	// 			}
	// 		)
	// 		if (response.status === 200) {
	// 			ToastNotification({ message: 'Note Saved' })
	// 			setNote('')
	// 			//dispatch action to get updated bookmarks
	// 			dispatch(getBookmarkList({ accessToken: userInfo.accessToken }))
	// 		} else {
	// 			ToastNotification({ message: 'Error Saving Note' })
	// 		}
	// 	} catch (error) {
	// 		ToastNotification({ message: 'Error Saving Note' })
	// 	}
	// }

	const [note, setNote] = useState('')
	const userInfo = useSelector((state) => state.userInfo.userInfo)
	const dispatch = useDispatch()

	const [isVoiceNote, setIsVoiceNote] = useState(false)
	const [isRecordingStarted, setIsRecordingStarted] = useState(false)
	const [isRecordingComplete, setIsRecordingComplete] = useState(false)
	const [videoDuration, setVideoDuration] = useState('')
	const [audioFile, setAudioFile] = useState(null)
	const [audioSaved, setAudioSaved] = useState(false)

	const [blob, setBlob] = useState(null)
	const recorder = useAudioRecorder({
		sampleRate: 44100,
	})

	const audioPlayer = useRef(null)

	const handleAudioChange = async (blob) => {
		const file = new FormData()
		file.append('file', blob)

		try {
			const response = await uploadAudio({
				accessToken: userInfo.accessToken,
				file: blob,
			})
			if (response.status === 200) {
				setAudioFile(response.data.data.url)
				toast.success('audio saved')
			} else {
				toast.error('Error Saving Audio response error')
			}
		} catch (error) {
			toast.error('Error Saving Audio' + error)
		}
	}

	// handle card button click
	const handleClick = (option) => {
		// if (note.trim().length > 0 || audioFile) {
		// 	// save note
		// 	handleSubmit()
		// } else if (isVoiceNote) {
		// 	setIsRecordingComplete(false)
		// 	setIsRecordingStarted(false)
		// 	setIsVoiceNote(false)
		// 	setVideoDuration('')
		// 	setBlob(null)
		// 	setAudioFile(null)
		// } else {
		// 	setIsVoiceNote(true)
		// }
		//

		switch (option) {
			case 'audioSaved': {
				setAudioSaved(false)
				setAudioFile(null)
				setIsVoiceNote(false)
				setIsRecordingStarted(false)
				setIsRecordingComplete(false)
				setVideoDuration('')
				setBlob(null)
				toast.success('Audio Removed')
				break
			}

			case 'startRecording': {
				setIsVoiceNote(true)
				startRecording()
				break
			}

			case 'submit': {
				if (note.trim().length > 0 || audioFile || images.length > 0) {
					// save note
					handleSubmit()
				}

				break
			}

			case 'discard': {
				setIsVoiceNote(false)
				setIsRecordingComplete(false)
				setIsRecordingStarted(false)
				setIsVoiceNote(false)
				setVideoDuration('')
				setBlob(null)
				toast.success('Audio Discarded')
				break
			}

			case 'removeImage': {
				setImages([])
				toast.success('Image Removed')
				break
			}

			default:
				console.log(option)
				break
		}
	}

	// handle audio switch
	useEffect(() => {
		if (!isVoiceNote) return recorder.stopRecording()
	}, [isVoiceNote])

	// functions for handling audio recording and visualizer
	const startRecording = () => {
		setIsRecordingStarted(true)
		recorder.startRecording()
	}

	const completeRecording = () => {
		setVideoDuration(`${Math.floor(recorder.recordingTime / 60)}:
        ${Math.floor(recorder.recordingTime % 60)
			.toString()
			.padStart(2, '0')}`)

		recorder.stopRecording()
		setIsRecordingComplete(true)
	}

	const acceptAudio = () => {
		const newBlob = new Blob([blob], { type: 'audio/mpeg' })
		handleAudioChange(newBlob)
		toast.success('audio accepted')
		setAudioSaved(true)
	}

	const discardAudio = () => {
		setIsRecordingComplete(false)
		setIsRecordingStarted(false)
		setIsVoiceNote(false)
		setVideoDuration('')
	}

	// handles file/note submission
	const handleSubmit = async () => {
		if (isRecordingComplete && !audioFile) {
			toast.success('Please save audio')
		}
		if (
			note.trim().length === 0 &&
			!isRecordingComplete &&
			images.length === 0
		) {
			toast.success('Empty Note')
		}
		const documentObject = {
			profileId: userInfo.profileId,
			userId: userInfo.id,
			public: false,
			deleted: false,
			pinned: false,
			comment: false,
			heading: new Date().toDateString().slice(4),
			body: note,
			DocumentMetadata: {
				documentType: 'note',
			},
		}

		if (images.length > 0) {
			toast.success('Image Saved')
			const response = await uploadImage({
				file: images[0],
				accessToken: accessToken,
			})
			documentObject.DocumentMetadata = {
				documentType: 'image',
				url: {
					images: [response.data.data.url],
				},
			}

			setImages([])
		}
		if (audioFile) {
			documentObject.DocumentMetadata = {
				documentType: 'audio',
				url: {
					...documentObject.DocumentMetadata?.url,
					audio: audioFile,
				},
			}
			setIsRecordingComplete(false)
			setIsRecordingStarted(false)
			setIsVoiceNote(false)
			setVideoDuration('')
		}
		try {
			const response = await createDocument({
				accessToken: userInfo.accessToken,
				documentObject,
			})
			if (response.status === 200) {
				setNote('')
				toast.success('Document saved')
				setAudioFile('')
				setImages([])
				//dispatch action to get updated bookmarks
				dispatch(getDocumentList({ accessToken: userInfo.accessToken }))
			} else {
				toast.error('Error Saving Note')
			}
		} catch (error) {
			toast.error('Error Saving Note')
		}
	}

	return (
		<div className='flex flex-col border rounded-lg h-60 border-primary  shadow-xl'>
			<div className='flex items-center gap-2 px-4 py-2 border-b'>
				<Image src={NoteIcon} className='w-6 h-6' alt='' />
				<p className='text-sm text-gray-400'>New Note</p>
			</div>

			<div className='relative h-full px-4 py-2'>
				{/* button - handles save note, set audio note & cancel audio note */}
				<div className='absolute z-10 flex items-center justify-center rounded-full right-4 top-2 shrink-0 gap-1'>
					{images.length > 0 && !isVoiceNote && (
						<button
							className='flex items-center justify-center rounded-full h-7 w-7 bg-gradient-to-br from-indigo-300/20 to-indigo-300/20 '
							onClick={() => handleClick('removeImage')}
						>
							<ImageBroken
								size={18}
								strokeWidth={1.5}
								className={cn(
									'text-primary duration-200',
									'scale-100'
								)}
							/>
						</button>
					)}

					{audioSaved && (
						<button
							className='flex items-center justify-center rounded-full h-7 w-7 bg-gradient-to-br from-indigo-300/20 to-indigo-300/20 '
							onClick={() => handleClick('audioSaved')}
						>
							<MicrophoneSlash
								size={18}
								strokeWidth={1.5}
								className={cn(
									'text-primary duration-200',
									audioSaved ? 'scale-100' : 'scale-0'
								)}
							/>
						</button>
					)}

					{!(note.trim().length > 0 || isVoiceNote) && (
						<button
							className='flex items-center justify-center rounded-full h-7 w-7 bg-gradient-to-br from-indigo-300/20 to-indigo-300/20 '
							onClick={() => handleClick('startRecording')}
						>
							<Microphone
								size={18}
								strokeWidth={1.5}
								className={cn(
									' text-primary duration-200',
									note.trim().length > 0 || isVoiceNote
										? 'scale-0'
										: 'scale-100'
								)}
							/>
						</button>
					)}
					{(note.trim().length > 0 ||
						isRecordingComplete ||
						images.length > 0) && (
						<button
							className='flex items-center justify-center rounded-full h-7 w-7 bg-gradient-to-br from-indigo-300/20 to-indigo-300/20 '
							onClick={() => handleClick('submit')}
						>
							<FloppyDisk
								size={18}
								strokeWidth={1.5}
								className={cn(
									'text-primary duration-200 ',
									note.trim().length > 0 || 'scale-100'
								)}
							/>
						</button>
					)}
					{isVoiceNote && !isRecordingComplete && (
						<button
							className='flex items-center justify-center rounded-full h-7 w-7 bg-gradient-to-br from-indigo-300/20 to-indigo-300/20 '
							onClick={() => handleClick('discard')}
						>
							<X
								size={18}
								strokeWidth={1.5}
								className={cn(
									' text-primary duration-200',
									isVoiceNote && !isRecordingComplete
										? 'scale-100'
										: 'scale-0'
								)}
							/>
						</button>
					)}
				</div>

				<div className='relative h-full'>
					{isVoiceNote && !audioSaved ? (
						<div className='h-full'>
							{recorder.recordingTime ? (
								<p className='italic libre-font'>
									{recorder.recordingTime === ''
										? '00:00'
										: ''}
									{Math.floor(recorder.recordingTime / 60)}:
									{Math.floor(recorder.recordingTime % 60)
										.toString()
										.padStart(2, '0')}
								</p>
							) : (
								<p className='italic libre-font'>
									{videoDuration ? videoDuration : '00:00'}
								</p>
							)}
							{/* audio recorder component */}
							<div className='hidden'>
								<AudioRecorder
									onRecordingComplete={setBlob}
									recorderControls={recorder}
									mediaRecorderOptions={{
										bitsPerSecond: 128000,
									}}
								/>
							</div>

							{recorder.mediaRecorder && (
								<div
									className={cn(
										'flex w-full justify-center duration-300',
										isRecordingStarted
											? 'opacity-100'
											: 'opacity-0'
									)}
								>
									<LiveAudioVisualizer
										mediaRecorder={recorder.mediaRecorder}
										width={250}
										height={75}
										barWidth={1.5}
										gap={4}
										barColor={'#2C5DBB'}
										fftSize={16384}
									/>
								</div>
							)}

							{isRecordingComplete && (
								<div className='flex justify-center w-full'>
									<AudioVisualizer
										blob={blob}
										width={250}
										height={75}
										barWidth={1.5}
										gap={4}
										barColor={'#2C5DBB'}
									/>
								</div>
							)}

							<div className='absolute flex justify-center w-full bottom-2'>
								{!isRecordingStarted &&
									!isRecordingComplete && (
										<button
											onClick={startRecording}
											className='w-12 h-12 p-2.5 rounded-full bg-primary'
										>
											<Microphone
												width={'auto'}
												height={'auto'}
												weight='fill'
												fill='white'
											/>
										</button>
									)}

								{isRecordingStarted && !isRecordingComplete && (
									<div className='flex gap-4'>
										{/* play/pause button */}
										<button
											onClick={() =>
												recorder.togglePauseResume()
											}
											className='w-12 h-12 p-2.5 rounded-full bg-primary'
										>
											{!recorder.isPaused ||
											!recorder.isRecording ? (
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

										{/* stop button */}
										<button
											onClick={completeRecording}
											className='w-12 h-12 p-2.5 rounded-full bg-primary'
										>
											<Stop
												width={'auto'}
												height={'auto'}
												weight='fill'
												fill='white'
											/>
										</button>
									</div>
								)}

								{isRecordingComplete && (
									<div className='flex gap-4'>
										{/* discard recording */}
										<button
											onClick={discardAudio}
											className='relative top-3 w-10 h-10 p-2.5 rounded-full bg-primary'
										>
											<X
												width={'auto'}
												height={'auto'}
												weight='fill'
												fill='white'
											/>
										</button>

										{/* play recording */}
										<button
											onClick={() =>
												audioPlayer.current.play()
											}
											className='w-12 h-12 p-2.5 rounded-full bg-primary'
										>
											<Play
												width={'auto'}
												height={'auto'}
												weight='fill'
												fill='white'
											/>
										</button>

										{/* accept recording */}
										<button
											onClick={acceptAudio}
											className='w-10 h-10 relative top-3 p-2.5 rounded-full bg-primary'
										>
											<Check
												width={'auto'}
												height={'auto'}
												weight='fill'
												fill='white'
											/>
										</button>
									</div>
								)}

								{blob && (
									<audio
										className='hidden'
										src={URL.createObjectURL(blob)}
										ref={audioPlayer}
										controls={false}
									/>
								)}
							</div>
						</div>
					) : (
						<textarea
							onChange={(e) => setNote(e.target.value)}
							value={note}
							placeholder='Start typing...'
							className='w-full h-full bg-transparent outline-none resize-none pr-9'
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default CreateNote
