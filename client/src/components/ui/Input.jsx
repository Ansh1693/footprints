import * as React from "react"

import { cn } from "mxcn"

const Input = ({ className, type, ...props }) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-8 w-full rounded-md font-semibold placeholder:font-normal text-lg border border-[#84A2DB] bg-secondary px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#9CB1DA] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    )
}
Input.displayName = "Input"

export { Input }
