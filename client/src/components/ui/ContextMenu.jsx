'use client'

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from 'mxcn'

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = ({ className, inset, children, ...props }) => (
	<ContextMenuPrimitive.SubTrigger
		className={cn(
			'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[#E2E7F3] focus:text-primary data-[state=open]:bg-[#E2E7F3] data-[state=open]:text-primary',
			inset && 'pl-8',
			className
		)}
		{...props}
	>
		{children}
		<ChevronRight className='w-4 h-4 ml-auto' />
	</ContextMenuPrimitive.SubTrigger>
)
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = ({ className, ...props }) => (
	<ContextMenuPrimitive.SubContent
		className={cn(
			'z-50 min-w-[8rem] overflow-hidden divide-y rounded-[10px] border bg-secondary p-1 text-primary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			className
		)}
		{...props}
	/>
)
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = ({ className, ...props }) => (
	<ContextMenuPrimitive.Portal>
		<ContextMenuPrimitive.Content
			className={cn(
				'z-50 min-w-[8rem] overflow-hidden divide-y rounded-[10px] border bg-secondary p-1 text-primary shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				className
			)}
			{...props}
		/>
	</ContextMenuPrimitive.Portal>
)
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = ({ className, inset, ...props }) => (
	<ContextMenuPrimitive.Item
		className={cn(
			'relative flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[#E2E7F3] focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
)
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = ({
	className,
	children,
	checked,
	...props
}) => (
	<ContextMenuPrimitive.CheckboxItem
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		checked={checked}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<ContextMenuPrimitive.ItemIndicator>
				<Check className='w-4 h-4' />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.CheckboxItem>
)
ContextMenuCheckboxItem.displayName =
	ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = ({ className, children, ...props }) => (
	<ContextMenuPrimitive.RadioItem
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<ContextMenuPrimitive.ItemIndicator>
				<Circle className='w-2 h-2 fill-current' />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.RadioItem>
)
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = ({ className, inset, ...props }) => (
	<ContextMenuPrimitive.Label
		className={cn(
			'px-2 py-1.5 text-sm font-semibold text-foreground',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
)
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = ({ className, ...props }) => (
	<ContextMenuPrimitive.Separator
		className={cn('-mx-1 my-1 h-px bg-border', className)}
		{...props}
	/>
)
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({ className, ...props }) => {
	return (
		<span
			className={cn(
				'ml-auto text-xs tracking-widest text-muted-foreground',
				className
			)}
			{...props}
		/>
	)
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuCheckboxItem,
	ContextMenuRadioItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuGroup,
	ContextMenuPortal,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuRadioGroup,
}
