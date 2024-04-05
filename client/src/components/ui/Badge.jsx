import * as React from "react"
import { cva } from "class-variance-authority"
import Image from "next/image"
import DeleteIcon from '../../assets/Icons/delete.svg'

import { cn } from "mxcn"

const badgeVariants = cva(
    "inline-flex relative items-center rounded-full overflow-hidden border px-2.5 py-0.5 text-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-secondary text-primary",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)


function Badge({ className, variant, children, editable = false, ...props }) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {children}

            {editable && (
                <button className={"absolute hover:opacity-100 duration-300 opacity-0 flex items-center justify-center top-0 left-0 bg-secondary w-full h-full"}>
                    <Image alt="badge" src={DeleteIcon} className='w-3 h-3' />
                </button>
            )}
        </div>
    )
}

export { Badge, badgeVariants }
