import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { Input } from './ui/Input'
import FilterOptions from './controls/FilterOptions'

const SearchBar = () => {
	return (
		<div className='sticky top-0 z-20 flex items-center gap-6 px-8 py-4 bg-white'>
			{/* search bar */}
			<div className='flex items-center w-full px-2 h-10 text-[#9CB1DA] border rounded-lg'>
				<MagnifyingGlass size={20} />
				<Input
					placeholder='Search...'
					className='bg-transparent border-none focus:text-primary'
				/>
			</div>

			<FilterOptions />
		</div>
	)
}

export default SearchBar
