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
import { deleteBookmark, updateBookmark } from '@/redux/actions/bookmarkActions'
import { updateBoard } from '@/redux/actions/boardActions'

function BookmarkWrapper({
	children,
	pinned,
	data = null,
	bookmarkId,
	onDelete,
	boards,
	onAddToBoards,
	contextMenu = true,
}) {
	const dispatch = useDispatch()
	const getCookie = useGetCookie()
	const accessToken = getCookie('accessToken')
	const handlePinnedChange = () => {
		const bookmarkData = {
			...data,
			status: {
				...data.status,
				pinned: !pinned,
			},
		}

		dispatch(updateBookmark({ updatedData: bookmarkData, accessToken }))
	}

	const handleAddToBoards = (blokData) => {
		const blokObject = {
			...blokData,
			documents: [...blokData.documents, data._id],
		}
		dispatch(updateBoard({ blokObject, accessToken }))
	}

	const handleDelete = () => {
		dispatch(deleteBookmark({ bookmarkId: data._id, accessToken }))
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
								Add to boards
							</ContextMenuSubTrigger>
							<ContextMenuSubContent>
								{boards.length > 0 &&
									boards.map((board) => {
										if (
											!board?.documents.includes(data._id)
										) {
											return (
												<ContextMenuItem
													key={board?._id}
													onClick={() =>
														handleAddToBoards(board)
													}
												>
													{board?.blok_name}
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

export default BookmarkWrapper
