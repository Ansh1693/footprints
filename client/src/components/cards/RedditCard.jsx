import React from 'react'
import Image from 'next/image'
import cn from 'mxcn'
import RedditIcon from '../../assets/Icons/reddit.svg'

function RedditCard({ data, onClick }) {

    const handleClick = () => {
        if (!onClick) return
        onClick(data)
    }

    return (
        <div onClick={handleClick}
            className={cn("relative cursor-pointer w-full h-auto border border-orange-600 rounded-lg reddit-card break-inside-avoid"
            )}
        >

            {/* post info */}
            <div className="flex items-center gap-1 p-2 text-sm text-gray-600 border-b border-gray-300">
                <Image alt='reddit' src={RedditIcon} width={20} height={20} />
                <p className="">@{data.name}</p>
                <span className="text-xs">•</span>
                <p> 12th July, 2023</p>
            </div>

            {/* content */}
            <p className="p-2 pt-4">{data.description}</p>
        </div>
    )
}

export default RedditCard