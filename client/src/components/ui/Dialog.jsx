"use client";

import React, { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import cn from "mxcn";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = forwardRef((props, ref) => (
    <DialogPrimitive.Portal {...props} ref={ref} />
));
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = forwardRef((props, ref) => (
    <DialogPrimitive.Overlay
        {...props}
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        )}
    />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = forwardRef((props, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            {...props}
            ref={ref}
            className={cn(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"
            )}
        >
            {props.children}
            <DialogPrimitive.Close
                className={cn(
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                )}
            >
                <X className="w-4 h-4" />
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = forwardRef((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={cn("flex flex-col space-y-1.5 text-center sm:text-left")}
    />
));
DialogHeader.displayName = "DialogHeader";

const DialogFooter = forwardRef((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
        )}
    />
));
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef((props, ref) => (
    <DialogPrimitive.Title
        {...props}
        ref={ref}
        className={cn("text-lg font-semibold leading-none tracking-tight")}
    />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef((props, ref) => (
    <DialogPrimitive.Description
        {...props}
        ref={ref}
        className={cn("text-sm text-muted-foreground")}
    />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};