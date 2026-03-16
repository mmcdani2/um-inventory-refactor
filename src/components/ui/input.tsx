import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "flex h-11 w-full min-w-0 rounded-xl border border-border/70 bg-background/72 px-3.5 py-2 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_2px_8px_rgba(0,0,0,0.22)] transition-[background-color,border-color,color,box-shadow] duration-150 outline-none supports-backdrop-filter:backdrop-blur-sm placeholder:text-muted-foreground/80 file:mr-3 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:border-ring focus-visible:bg-card/92 focus-visible:ring-2 focus-visible:ring-ring/55 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-border/45 disabled:bg-card/45 disabled:text-muted-foreground disabled:shadow-none disabled:placeholder:text-muted-foreground/55 aria-invalid:border-critical/55 aria-invalid:bg-critical/10 aria-invalid:ring-2 aria-invalid:ring-critical/20 selection:bg-secondary selection:text-secondary-foreground md:text-sm",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
