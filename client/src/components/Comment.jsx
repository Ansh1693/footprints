import React from 'react'
import Image from 'next/image'
import ProfileImg from '../../public/static/profile.jpeg'
import { Button } from './ui/Button'
import { TrashIcon } from '@heroicons/react/24/outline'
import { TrashSimple } from 'phosphor-react'

function Comment() {
    return (
        <div className="relative flex gap-2 p-4 border-b group">
            <div>
                <Image alt="profile" src={ProfileImg} width={32} height={32} alt={'name'} className="rounded-full" />
            </div>

            <div className="space-y-1 text-sm text-primary">
                <p className="flex items-center gap-2 text-xs font-semibold">Ansh Agarwal
                    <span className="font-normal text-[#9CB1DA]">7:34 PM</span>
                    <span className="font-normal text-[#9CB1DA]">3 days ago</span>
                </p>
                <div className="">This looks like great uiux video!</div>
            </div>

            <Button variant={'ghost'} size={'icon'} className="absolute top-0 hidden duration-300 -right-4 group-hover:inline-block">
                <TrashSimple className="w-4 h-4 text-[#9CB1DA]" />
            </Button>

        </div>
    )
}

export default Comment