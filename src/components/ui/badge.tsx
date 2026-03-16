import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex min-h-6 w-fit shrink-0 items-center justify-center gap-1.5 rounded-md border px-2.5 py-1 text-[0.6875rem] leading-none font-semibold tracking-[0.08em] whitespace-nowrap uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[background-color,border-color,color,box-shadow] duration-150 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:border-critical/50 aria-invalid:ring-critical/20 [&>svg]:pointer-events-none [&>svg]:size-3.5 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-primary/35 bg-primary/18 text-primary-foreground [a]:hover:bg-primary/24",
        secondary:
          "border-border bg-secondary/55 text-secondary-foreground [a]:hover:bg-secondary/70",
        outline:
          "border-border bg-background/55 text-foreground [a]:hover:bg-card [a]:hover:text-foreground",
        success:
          "border-success/35 bg-success/16 text-success [a]:hover:bg-success/22",
        warning:
          "border-warning/35 bg-warning/16 text-warning [a]:hover:bg-warning/22",
        critical:
          "border-critical/35 bg-critical/16 text-critical [a]:hover:bg-critical/22",
        muted:
          "border-border/80 bg-card/75 text-muted-foreground [a]:hover:bg-card [a]:hover:text-foreground",
        info: "border-accent/45 bg-accent/18 text-accent-foreground [a]:hover:bg-accent/24",
        destructive:
          "border-critical/35 bg-critical/16 text-critical [a]:hover:bg-critical/22",
        ghost:
          "border-transparent bg-transparent text-muted-foreground shadow-none [a]:hover:bg-card/80 [a]:hover:text-foreground",
        link: "border-transparent bg-transparent px-0 text-accent-foreground underline-offset-4 shadow-none hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
