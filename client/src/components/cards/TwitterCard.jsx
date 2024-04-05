import React from 'react'
import Image from 'next/image'
import TwitterIcon from '../../assets/Icons/twitter.svg'

function TwitterCard({ data, onClick }) {
    return (
        <div onClick={() => onClick(data)} className="w-full h-auto border rounded-lg border-sky-500 twitter-card break-inside-avoid">
            {/* post info */}
            <div className="flex items-center gap-1 p-2 text-sm text-gray-600 border-b border-b-gray-300">
                <Image alt='twitter' src={TwitterIcon} width={20} height={20} />
                <p className="">@{data.name}</p>
                <span className="text-xs">•</span>
                <p> 12th July, 2023</p>
            </div>

            {/* content */}
            <p className="p-2 pt-4">{data.description}</p>
        </div>
    )
}

export default TwitterCard