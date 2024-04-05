import React, { useState } from 'react'
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ImageComponent from '../ui/Image';
import YoutubeIcon from '../../assets/Icons/youtube.svg'

function YoutubeCard({ data, onClick }) {
    const [hover, setHover] = useState(false)
    return (
        <div
            onClick={() => onClick(data)}
            className="relative h-full overflow-hidden cursor-pointer rounded-xl group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* replaced with optimized image component */}
            {/* <div className='p-2'> */}
            <ImageComponent
                key={data.id}
                src={data.imgUrl}
                alt={data.title}
            />
            {/* </div> */}

            <AnimatePresence>
                {hover && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={'main-card-hover absolute bottom-0 duration-200 flex flex-col h-[1/3] w-full font-inter p-4 justify-between text-white bg-black/30 backdrop-blur-md rounded-xl'}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-base font-medium leading-normal truncate">
                                {data.title}
                            </span>
                            <Image alt='youtube' src={YoutubeIcon} width={20} height={20} />
                        </div>
                        <div className="w-3/4 text-sm font-light truncate">
                            {data.description}
                        </div>
                        <div className="text-sm italic font-medium text-white">By {data.name}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default YoutubeCard