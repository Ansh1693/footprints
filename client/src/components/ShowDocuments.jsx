'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/Button'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import ExpandIcon from '../assets/Icons/expand.svg'
import postData from '@/data/postsData'
import RedditCard from './cards/RedditCard'
import TwitterCard from './cards/TwitterCard'
import DefaultCard from './cards/DefaultCard'
import CardWrapper from './wrappers/CardWrapper'
import YoutubeCard from './cards/YoutubeCard'
import ArticleCard from './cards/ArticleCard'
import ShoppingCard from './cards/ShoppingCard'
import PinterestCard from './cards/PinterestCard'
import ImdbCard from './cards/ImdbCard'
import { useSelector } from 'react-redux'
import NoteCard from './cards/NoteCard'
import AudioCard from './cards/AudioCard'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function ShowDocuments({
	handleClose,
	setIsFullView,
	blok,
	setBlok,
	selectedDocuments,
	setSelectedDocuments,
}) {
	const documents = useSelector((state) => state.documents)
	// const handleCardClick = () => {}
	return (
		<div className='space-y-4'>
			{/* peak view controls */}
			<div className='flex items-center justify-between gap-4'>
				{/* collapse button */}
				<Button
					variant={'secondary'}
					size={'icon'}
					onClick={() => handleClose(false)}
				>
					<ChevronDoubleRightIcon width={24} />
				</Button>

				<Button onClick={() => handleClose()}>Add</Button>
			</div>

			<div>
				<ResponsiveMasonry
					className='px-4 py-4'
					columnsCountBreakPoints={{ 350: 2 }}
				>
					<Masonry gutter='12px' className='mt-2'>
						{documents?.documents.map((item) => {
							switch (item.DocumentMetadata.documentType) {
								case 'reddit':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<RedditCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'twitter':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<TwitterCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'youtube':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<YoutubeCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'article':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<ArticleCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'audio':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<AudioCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'note':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<NoteCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'shopping':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<ShoppingCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'pinterest':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<PinterestCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								case 'imdb':
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<ImdbCard
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
								default:
									return (
										<CardWrapper
											key={item.id}
											selectionMode
											id={item.id}
											blok={blok}
											setBlok={setBlok}
											selectedDocuments={
												selectedDocuments
											}
											setSelectedDocuments={
												setSelectedDocuments
											}
											data={item}
										>
											<DefaultCard
												key={item.id}
												data={item}
												// onClick={handleCardClick}
											/>
										</CardWrapper>
									)
							}
						})}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	)
}

export default ShowDocuments
