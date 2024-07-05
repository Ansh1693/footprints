'use client' // Error components must be Client Components
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
	useEffect(() => {
		console.log(error)
	}, [error])

	return (
		<div className='px-8 py-8 h-screen'>
			<Navbar />
			<div className='flex flex-col items-center justify-center h-full'>
				<h1 className='text-4xl font-bold'>Error</h1>
				<p className='text-xl text-gray-500'>An error occurred</p>
				<button
					className='px-4 py-2 mt-4 text-white bg-blue-500 rounded-md'
					onClick={reset}
				>
					Go back home
				</button>
			</div>
		</div>
	)
}
