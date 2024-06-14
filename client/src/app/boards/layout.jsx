import React from 'react'
import Metadata from '@/components/seo/MetaHead'
import Navbar from '@/components/Navbar'

export const metadata = Metadata({
	title: 'Boards | Bloks.Social',
	description:
		'Organise your bookmarks, favorite tutorials, articles in one place.',
	image: '/favicon.ico',
})

export default function RootLayout({ children }) {
	return (
		<div className='max-w-[1440px] mx-auto'>
			<Navbar activeTab='boards' />
			{children}
		</div>
	)
}
