import { CheckIcon, PinIcon } from 'lucide-react'
import cn from 'mxcn'
import React, { useState } from 'react'

function CardWrapper({
	children,
	selectionMode = false,
	selected,
	pinned = false,
	pinnedChange,
	blok,
	setBlok,
	id = null,
	selectedBookmarks,
	setSelectedBookmarks,
	data,
}) {
	const [isSelected, setIsSelected] = useState(
		blok?.documents?.includes(id) || false
	)

	const handleSelection = () => {
		if (!selectionMode) return

		if (isSelected) {
			// remove from selected
			const newSelected = blok.documents.filter((item) => item !== id)
			setBlok({ ...blok, documents: newSelected })
			const newBookmarks = selectedBookmarks.filter(
				(item) => item._id !== id
			)

			setSelectedBookmarks(newBookmarks)
		} else {
			// add to selected
			const newSelected = [...blok.documents, id]
			setBlok({ ...blok, documents: newSelected })

			const newBookmarks = [...selectedBookmarks, data]
			setSelectedBookmarks(newBookmarks)
		}
		setIsSelected(!isSelected)
	}

	return (
		<div className='relative' onClick={handleSelection}>
			{children}

			{pinned && (
				<div className='absolute p-[2px] rounded-full gradient-border -top-2 -left-2'>
					<PinIcon className='p-1 bg-white rounded-full stroke-[1.5px] stroke-primary' />
				</div>
			)}

			{selectionMode && (
				<div
					className={cn(
						'absolute flex items-center justify-center w-8 h-8 rounded-full top-4 right-4 duration-200',
						isSelected ? 'bg-primary' : 'bg-zinc-400'
					)}
				>
					<CheckIcon size={20} stroke='#fff' />
				</div>
			)}
		</div>
	)
}

export default CardWrapper
