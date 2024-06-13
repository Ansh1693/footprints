import Navbar from '@/components/Navbar'
import Metadata from '@/components/seo/MetaHead'

// export const metadata = {
//     title: "Bloks.Social",
//     description: "Organise your bookmarks, favorite tutorials, articles in one place.",
//     category: 'Bookmarking Tool',
//     icons: ['/favicon.ico'],

//     twitter: {
//         card: 'summary_large_image',
//         title: "Bloks.Social",
//         description: "Organise your bookmarks, favorite tutorials, articles in one place.",
//         images: "/favicon.ico",
//         // creator: '@bloks',
//         // creatorId: '@bloks',
//     },

//     openGraph: {
//         type: 'website',
//         locale: 'en_US',
//         siteName: 'Bloks.Social',
//         title: "Bloks.Social",
//         description: "Organise your bookmarks, favorite tutorials, articles in one place.",
//         url: 'https://www.bloks.social/',
//     },

//     viewport: 'width=device-width, initial-scale=1',
// }

export const metadata = Metadata({
	title: 'Bookmarks | Bloks.Social',
	description:
		'Organise your bookmarks, favorite tutorials, articles in one place.',
	image: '/favicon.ico',
})

export default function RootLayout({ children }) {
	return (
		<div className='max-w-[1440px] mx-auto'>
			<Navbar />
			{children}
		</div>
	)
}
