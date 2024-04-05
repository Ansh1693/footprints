"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"

import { cn } from "mxcn"

const labelVariants = cva(
    "text-sm text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = (({ className, ...props }) => (
    <LabelPrimitive.Root
        className={cn(labelVariants(), className)}
        {...props}
    />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
