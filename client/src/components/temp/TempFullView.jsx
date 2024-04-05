import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/Button'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Badge } from '../ui/Badge'
import { Input } from '../ui/Input'
import ProfileImg from '../../../public/static/profile.jpeg'
import Comment from '../Comment'
import { ArrowSquareOut, ArrowsInSimple, Pause, Play, X } from 'phosphor-react'
import { Settings } from 'lucide-react'
import { AudioVisualizer } from 'react-audio-visualize'
import SettingOptions from '../controls/SettingOptions'

function TempFullView({ data, handleClose, peakView }) {
    // const imageRef = React.useRef(null)
    // const [imageDimensions, setImageDimensions] = React.useState({
    // 	width: 0,
    // 	height: 0,
    // })

    // const handleImageLoad = () => {
    // 	const { naturalHeight, naturalWidth } = imageRef.current
    // 	setImageDimensions({ width: naturalWidth, height: naturalHeight })
    // }


    const [blob, setBlob] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
                setBlob(blob);
            })
            .catch((error) => {
                console.error('Error fetching audio:', error);
            });
    }, []);

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
                audioRef.current.src = URL.createObjectURL(blob);
            })
            .catch((error) => {
                console.error('Error fetching audio:', error);
            });
    }, []);


    return (
        <div className='relative space-y-6'>
            {/* header */}
            <div className='sticky top-0 z-10 flex items-center justify-between border-[0.5px] w-full h-20 px-6 bg-white'>
                {/* title of bookmark */}
                {data && (
                    <h1 className='text-[32px] font-semibold libre-font'>
                        This is heading
                        {/* {data?.heading
							? data?.heading
							: data?.body.slice(0, 1).toUpperCase() +
							  data?.body.slice(1, 5) +
							  '...'} */}
                    </h1>
                )}
                {/* full view controls */}
                <div className='flex gap-4'>
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
                    {/* <Button
                        onClick={() => peakView()}
                        variant={'secondary'}
                        size={'icon'}
                    >
                        <Settings strokeWidth={1.5} size={24} />
                    </Button> */}
                    <SettingOptions />

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

            <div className='flex justify-between gap-12 px-6'>
                {/* content */}
                <div>
                    {data && (
                        <div className='space-y-6'>
                            {data.documentMetadata &&
                                data.documentMetadata.bodyImage_url && (
                                    <img
                                        ref={imageRef}
                                        src={data?.imgUrl}
                                        onLoad={handleImageLoad}
                                        style={{
                                            aspectRatio: `${imageDimensions.width /
                                                imageDimensions.height
                                                }`,
                                            maxHeight: `min(600px,${imageDimensions.height}px)`,
                                            maxWidth: `min(800px, ${imageDimensions.width}px)`,
                                        }}
                                        className={`rounded-md shadow-lg`}
                                    />
                                )}

                            {data.documentMetadata.document_type === 'audio' && (
                                <div className='flex items-center gap-4'>
                                    <button onClick={() => setIsPlaying(!isPlaying)} className='w-12 h-12 p-2 text-white rounded-full bg-primary'>
                                        {isPlaying ? (
                                            <Pause width={'auto'} height={'auto'} weight='fill' fill='white' />
                                        ) : (
                                            <Play width={'auto'} height={'auto'} weight='fill' fill='white' />
                                        )}
                                    </button>

                                    {/* <p className='text-lg font-medium'>Play voice note</p> */}

                                    {blob && (
                                        <div className=''>
                                            <audio className='hidden' src={URL.createObjectURL(blob)} ref={audioPlayer} controls={false} />
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
								{data?.title
									? data?.title
									: data?.body.slice(0, 1).toUpperCase() +
									  data?.body.slice(1, 5) +
									  '...'}
							</p>
							<p className='text-xs text-gray-500'>by Test</p>
						</div> */}

                            <p>
                                {/* {data.body} */}
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                                Aliquip duis aliqua eu minim in excepteur. Quis nostrud nostrud incididunt aliqua ipsum enim qui duis labore eiusmod sint laboris commodo occaecat. Lorem in aute nostrud ut. Nostrud voluptate in officia occaecat velit qui culpa fugiat quis laborum cupidatat dolor pariatur. Consectetur velit consequat aliqua. Qui eiusmod labore incididunt nostrud irure enim velit eu nostrud. In id magna velit.
                            </p>
                        </div>
                    )}
                </div>


                {/* right sidebar */}
                <div className='w-[321px] shrink-0 relative min-h-screen -top-20 py-20'>
                    <div className='sticky flex max-h-screen flex-col space-y-8 shrink-0 top-[100px]'>
                        {/* tags */}
                        <div className="bg-white border-2 rounded-lg shrink-0 border-secondary">
                            {/* add tags */}
                            <div className="flex items-center gap-3 p-4 border-b">
                                <div className='p-[1px] rounded-[6px] gradient-border h-[31px] w-full'>
                                    <Input type="text" placeholder="Add a new tag" className={"text-[12px] w-full text-primary border-none h-full rounded-[6px]"} />
                                </div>
                                <Button className={"text-xs font-normal w-20"}>Add</Button>
                            </div>

                            <div className="flex flex-wrap gap-2 p-4">
                                <Badge editable>ui/ux</Badge>
                                <Badge editable>design</Badge>
                                <Badge editable>visuals</Badge>
                                <Badge editable>learnings</Badge>
                                <Badge editable>youtube</Badge>
                            </div>
                        </div>

                        {/* comments */}
                        <div className="flex flex-col h-full overflow-hidden bg-white border-2 rounded-lg border-secondary">
                            {/* add tags */}
                            <div className="flex items-center gap-3 p-4 border-b">
                                <Image src={ProfileImg} width={32} height={32} alt={data.name} className="rounded-full" />
                                <div className='p-[1px] rounded-[6px] gradient-border h-[31px]'>
                                    <Input type="text" placeholder="Comment your thoughts" className={"text-[12px] text-primary border-none h-full rounded-[6px]"} />
                                </div>
                                <Button className={"text-xs font-normal w-20"}>Post</Button>
                            </div>

                            {/* comments */}
                            <div className='h-full pb-24 overflow-auto overflow-x-hidden'>
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TempFullView
