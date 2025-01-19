import { ShareNetwork, ToggleLeft, ToggleRight } from '@phosphor-icons/react'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '../ui/Menubar'
import { CopyIcon } from 'lucide-react'
import toast from 'react-hot-toast'

function SettingDocument({ editable, publicCheck, handlePublic, id }) {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger className={'w-9 h-9 flex p-0 cursor-pointer'}>
					<ShareNetwork size={20} />
				</MenubarTrigger>

				<MenubarContent>
					{/* bookmark type/format */}
					{editable && (
						<MenubarItem className={'flex justify-between'}>
							<p>Publish</p>
							<div
								className='cursor-pointer'
								onClick={() => handlePublic()}
							>
								{!publicCheck && (
									<ToggleLeft size={20} weight='duotone' />
								)}
								{publicCheck && (
									<ToggleRight size={20} weight='duotone' />
								)}
							</div>
						</MenubarItem>
					)}

					<MenubarItem className={'flex justify-between'}>
						<p>Copy link</p>
						<CopyIcon
							size={16}
							className='cursor-pointer'
							onClick={() => {
								navigator.clipboard.writeText(
									`http://localhost:5000/blok/${id}`
								)
								toast.success('Link copied to clipboard')
							}}
						/>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

export default SettingDocument
