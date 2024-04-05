import React from 'react'
import { Button } from '../ui/Button'
import { Funnel } from 'phosphor-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover'
import Link from 'next/link'
import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '../ui/Menubar'

function FilterOptions() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger className={'w-9 h-9 flex p-0 cursor-pointer'}>
					<Funnel size={20} />
				</MenubarTrigger>

				<MenubarContent>
					{/* bookmark type/format */}
					<MenubarSub>
						<MenubarSubTrigger>
							<p>Bookmark type</p>
						</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarCheckboxItem checked={true}>
								PDF's
							</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarCheckboxItem>Images</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarCheckboxItem>Tweets</MenubarCheckboxItem>
						</MenubarSubContent>
					</MenubarSub>

					<MenubarSeparator />

					{/* bookmark source */}
					<MenubarSub>
						<MenubarSubTrigger>
							<p>Source</p>
						</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarCheckboxItem>Reddit</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarCheckboxItem checked>
								Pinterest
							</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarCheckboxItem checked>
								Twitter
							</MenubarCheckboxItem>
						</MenubarSubContent>
					</MenubarSub>

					<MenubarSeparator />

					{/* fav bookmarks */}
					<MenubarSub>
						<MenubarSubTrigger>
							<p>Favorite</p>
						</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarCheckboxItem checked>
								Creators
							</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarCheckboxItem>Boards</MenubarCheckboxItem>
						</MenubarSubContent>
					</MenubarSub>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

export default FilterOptions
