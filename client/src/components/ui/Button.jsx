'use client'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from 'mxcn'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-white',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border border-input',
				secondary: 'text-primary bg-tertiary',
				ghost: 'hover:bg-gray-50 hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-8 px-6 py-2',
				sm: 'h-8 rounded-md px-3',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-[36px] w-[36px] rounded-full',
			},
			rounded: {
				full: 'rounded-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

const Button = ({
	className,
	variant,
	size,
	rounded,
	asChild = false,
	...props
}) => {
	const Comp = asChild ? Slot : 'button'
	return (
		<Comp
			className={cn(
				buttonVariants({ variant, size, rounded, className })
			)}
			{...props}
		/>
	)
}
Button.displayName = 'Button'

export { Button, buttonVariants }
