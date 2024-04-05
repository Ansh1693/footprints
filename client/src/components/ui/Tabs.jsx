"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "mxcn"

const Tabs = TabsPrimitive.Root

const TabsList = (({ className, ...props }) => (
    <TabsPrimitive.List
        className={cn(
            "inline-flex h-10 items-center justify-center gap-2 text-primary-foreground",
            className
        )}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = (({ className, ...props }) => (
    <TabsPrimitive.Trigger
        className={cn(
            "inline-flex items-center justify-center whitespace-nowrap px-2 py-2 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-2 border-b-transparent data-[state=active]:text-primary data-[state=active]:font-extrabold data-[state=active]:border-primary data-[state=active]:shadow-sm duration-300",
            className
        )}
        {...props}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = (({ className, ...props }) => (
    <TabsPrimitive.Content
        className={cn(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
        )}
        {...props}
    />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
