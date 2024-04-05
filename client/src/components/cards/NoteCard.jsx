import React from 'react'
import NoteIcon from '../../assets/Icons/note.svg'
import Image from 'next/image'

function NoteCard({ data, onClick, profile }) {
	const date = new Date(data.createdAt).toDateString()
	// console.log(date)
	return (
		<div
			onClick={() => onClick(data)}
			className='w-full h-auto pb-2 space-y-2 border rounded-lg border-primary'
		>
			{/* post info */}
			<div className='flex items-center gap-2 py-2 px-[16px] text-sm text-gray-600 border-b border-b-gray-300'>
				<Image src={NoteIcon} width={20} height={20} />
				<p className=''>
					@{profile?.name ? profile?.name : 'testing'} •{' '}
					{date.slice(4)}
				</p>
			</div>

			{/* content */}
			<p className='px-[16px]'>
				{data.body.length > 200
					? data.body.slice(0, 200) + '.....'
					: data.body}
			</p>
		</div>
	)
}

export default NoteCard
