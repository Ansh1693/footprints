import React, { useState } from 'react'
import ImageComponent from '../ui/Image'
import { AnimatePresence, motion } from 'framer-motion'

function DefaultCard({ data, onClick }) {
	const [hover, setHover] = useState(false)
	const images = data?.DocumentMetadata?.url?.images || []
	return (
		<div
			onClick={() => onClick(data)}
			className='relative cursor-pointer rounded-xl group overflow-hidden'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			// onClick={() => {
			//     setBookMarkData({ ...data });
			//     setIsOpen(true);
			// }}
		>
			{/* replaced with optimized image component */}
			<ImageComponent
				key={data.id}
				src={
					images[0] ||
					'https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
				}
				alt={data.heading.slice(0, 5)}
			/>

			<AnimatePresence>
				{hover && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className={
							'main-card-hover absolute bottom-0 duration-200 flex flex-col h-[1/3] w-full font-inter p-4 justify-between text-white bg-black/30 backdrop-blur-md rounded-xl'
						}
					>
						<div className='flex items-center justify-between'>
							<span className='text-base font-medium leading-normal truncate'>
								{data?.heading
									? data?.heading
									: data?.body.slice(0, 1).toUpperCase() +
										data?.body.slice(1, 5) +
										'...'}
							</span>
							{/* <YoutubeSvg /> */}
						</div>
						<div className='w-3/4 text-sm font-light truncate'>
							{data?.body}
						</div>
						<div className='text-sm italic font-medium text-white'>
							By {data?.User?.username}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default DefaultCard
