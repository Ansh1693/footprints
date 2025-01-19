'use client'

import React, { useState } from 'react'
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from '../ui/ContextMenu'
import { DeleteIcon, Pin, TrashIcon } from 'lucide-react'
import PinIcon from '../../assets/Icons/pin.svg'
import Image from 'next/image'
import useGetCookie from '../cookies/useGetCookie'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDocument, updateDocument } from '@/redux/actions/documentActions'
import { updateBlok } from '@/redux/actions/blokActions'

function DocumentWrapper({
	children,
	pinned,
	data = null,
	documentId,
	onDelete,
	bloks,
	onAddToBloks,
	contextMenu = true,
}) {
	const dispatch = useDispatch()
	const getCookie = useGetCookie()
	const accessToken = getCookie('accessToken')
	const handlePinnedChange = () => {
		const documentObject = {
			...data,
			pinned: !pinned,
		}

		dispatch(updateDocument({ documentObject, accessToken }))
	}

	const handleAddToBloks = (blokData) => {
		const blokObject = {
			...blokData,
			BloksDocument: [...blokData?.BloksDocument, { id: data.id }],
		}
		dispatch(updateBlok({ blokObject, accessToken }))
	}

	const handleDelete = () => {
		dispatch(
			deleteDocument({ documentObject: { id: data.id }, accessToken })
		)
	}
	return (
		<div className='relative'>
			{pinned && (
				<button className='absolute h-[21px] w-[21px] flex items-center justify-center rounded-full bg-secondary -top-2 -left-2 z-10'>
					<Image src={PinIcon} alt='pin bookmark' height={14} />
				</button>
			)}

			<ContextMenu>
				<ContextMenuTrigger>{children}</ContextMenuTrigger>
				{contextMenu && (
					<ContextMenuContent>
						<ContextMenuItem
							onClick={() => {
								handlePinnedChange()
							}}
						>
							{pinned ? 'Unpin' : 'Pin'}
							{/* <Pin size={16} /> */}
						</ContextMenuItem>
						<ContextMenuSub>
							<ContextMenuSubTrigger>
								Add to Bloks
							</ContextMenuSubTrigger>
							<ContextMenuSubContent>
								{bloks.length > 0 &&
									bloks.map((blok) => {
										if (
											!blok?.BloksDocument.filter(
												(item) => item.id === data.id
											).length > 0
										) {
											return (
												<ContextMenuItem
													key={blok?.id}
													onClick={() =>
														handleAddToBloks(blok)
													}
												>
													{blok?.blokName}
												</ContextMenuItem>
											)
										}
									})}
							</ContextMenuSubContent>
						</ContextMenuSub>

						<ContextMenuItem
							onClick={() => {
								handleDelete()
							}}
						>
							Delete
							<TrashIcon size={16} />
						</ContextMenuItem>
					</ContextMenuContent>
				)}
			</ContextMenu>
		</div>
	)
}

export default DocumentWrapper
