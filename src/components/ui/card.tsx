import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card/78 px-0 py-5 text-sm text-foreground shadow-[0_14px_40px_-24px_rgb(0_0_0_/_0.85)] ring-1 ring-white/6 backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03)_28%,transparent_68%)] before:opacity-80 before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-white/12 after:content-[''] hover:-translate-y-0.5 hover:border-border/80 hover:bg-card/84 hover:shadow-[0_22px_52px_-26px_rgb(0_0_0_/_0.92)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:rounded-xl data-[size=sm]:py-4 data-[size=sm]:shadow-[0_12px_32px_-24px_rgb(0_0_0_/_0.8)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-2xl *:[img:last-child]:rounded-b-2xl data-[size=sm]:*:[img:first-child]:rounded-t-xl data-[size=sm]:*:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "relative z-10 grid auto-rows-min items-start gap-2 px-5 group-data-[size=sm]/card:gap-1.5 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:border-border/60 [.border-b]:pb-5 group-data-[size=sm]/card:[.border-b]:pb-4",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base leading-snug font-semibold tracking-tight text-foreground group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm leading-6 text-muted-foreground group-data-[size=sm]/card:text-[0.8125rem] group-data-[size=sm]/card:leading-5",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "relative z-10 px-5 group-data-[size=sm]/card:px-4",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "relative z-10 mt-auto flex items-center rounded-b-2xl border-t border-border/60 bg-background/30 px-5 py-4 backdrop-blur-sm group-data-[size=sm]/card:rounded-b-xl group-data-[size=sm]/card:px-4 group-data-[size=sm]/card:py-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
