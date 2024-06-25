import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { Input } from './ui/Input'
import FilterOptions from './controls/FilterOptions'

const SearchBar = () => {
	return (
		<div className='sticky top-0 z-20 flex items-center gap-6 px-8 py-4 bg-white'>
			{/* search bar */}
			<div className='flex   items-center  w-full px-2  text-slate-300 border border-slate-100 rounded-full shadow-xl'>
				<MagnifyingGlass size={20} className='ml-2' />
				<Input
					placeholder='Search...'
					className='bg-transparent border-none focus:text-slate-500 font-normal text-base my-2 text-slate-300'
				/>
				<div className=''>
					<FilterOptions />
				</div>
			</div>
		</div>
	)
}

export default SearchBar
