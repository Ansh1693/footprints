"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "mxcn"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = (({ className, ...props }) => (
    <MenubarPrimitive.Root
        className={cn(
            "flex h-10 items-center space-x-1",
            className
        )}
        {...props}
    />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = (({ className, ...props }) => (
    <MenubarPrimitive.Trigger
        className={cn(
            "flex cursor-default select-none items-center text-primary bg-tertiary justify-center rounded-full px-3 py-1.5 text-sm font-medium outline-none focus:bg-secondary focus:text-primary data-[state=open]:bg-primary data-[state=open]:text-white duration-200",
            className
        )}
        {...props}
    />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = (({ className, inset, children, ...props }) => (
    <MenubarPrimitive.SubTrigger
        className={cn(
            "flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none focus:bg-[#E2E7F3] focus:text-primary data-[state=open]:bg-[#E2E7F3] data-[state=open]:text-primary",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        {children}
        <ChevronRight className="w-4 h-4 ml-auto" />
    </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = (({ className, ...props }) => (
    <MenubarPrimitive.SubContent
        className={cn(
            "z-50 min-w-[8rem] overflow-hidden -mr-20 mt-2 shadow-lg rounded-xl border bg-secondary p-1 text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
        )}
        {...props}
    />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = (
    (
        { className, align = "end", alignOffset = 0, sideOffset = 8, ...props },
    ) => (
        <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content
                align={align}
                alignOffset={alignOffset}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 min-w-[12rem] overflow-hidden rounded-xl border bg-secondary p-1 text-primary shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    className
                )}
                {...props}
            />
        </MenubarPrimitive.Portal>
    )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = (({ className, inset, ...props }) => (
    <MenubarPrimitive.Item
        className={cn(
            "relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none focus:bg-[#E2E7F3] focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className
        )}
        {...props}
    />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = (({ className, children, checked, ...props }) => (
    <MenubarPrimitive.CheckboxItem
        className={cn(
            "relative flex cursor-default select-none items-center justify-between rounded-md py-1.5 px-2 text-sm outline-none focus:bg-[#E2E7F3] focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        checked={checked}
        {...props}
    >
        {children}
        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Check className="w-4 h-4 stroke-primary" />
            </MenubarPrimitive.ItemIndicator>
        </span>
    </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = (({ className, children, ...props }) => (
    <MenubarPrimitive.RadioItem
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Circle className="w-2 h-2 fill-current" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = (({ className, inset, ...props },) => (
    <MenubarPrimitive.Label
        className={cn(
            "px-2 py-1.5 text-sm font-semibold",
            inset && "pl-8",
            className
        )}
        {...props}
    />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = (({ className, ...props }) => (
    <MenubarPrimitive.Separator
        className={cn("mx-2 h-[0.3px] bg-[#BAB6D1] opacity-30", className)}
        {...props}
    />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
    className,
    ...props
}) => {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-muted-foreground",
                className
            )}
            {...props}
        />
    )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarGroup,
    MenubarSub,
    MenubarShortcut,
}
