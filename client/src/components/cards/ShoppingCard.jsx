import React, { useState } from 'react'
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ImageComponent from '../ui/Image';
import CartIcon from '../../assets/Icons/cart.svg'

function ShoppingCard({ data, onClick }) {
    const [hover, setHover] = useState(false)
    return (
        <div
            onClick={() => onClick(data)}
            className="relative h-full cursor-pointer rounded-xl group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* replaced with optimized image component */}
            <ImageComponent
                key={data.id}
                src={data.imgUrl}
                alt={data.title}
            />

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
                            <Image alt='cart' src={CartIcon} width={20} height={20} />
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

export default ShoppingCard