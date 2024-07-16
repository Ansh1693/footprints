'use client'

import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from '@phosphor-icons/react'
import cn from 'mxcn'

function GoBack({ url, className = '' }) {
	const router = useRouter()

	const handleClick = () => {
		if (url) return router.push(url)
		else return router.back()
	}
	return (
		<Button
			onClick={handleClick}
			variant={'ghost'}
			size={'small'}
			className={cn('text-slate-400 font-normal', className)}
		>
			<ArrowLeft className='w-5 h-5' />
			Go Back
		</Button>
	)
}

export default GoBack
