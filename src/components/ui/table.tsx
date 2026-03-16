"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="group/table relative isolate w-full overflow-hidden rounded-2xl border border-border/60 bg-card/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_48px_rgba(0,0,0,0.32)] supports-backdrop-filter:backdrop-blur-sm before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/10 before:content-['']"
    >
      <div className="w-full overflow-x-auto">
        <table
          data-slot="table"
          className={cn(
            "w-full min-w-full border-collapse caption-bottom text-sm text-foreground tabular-nums",
            className
          )}
          {...props}
        />
      </div>
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-background/72 supports-backdrop-filter:backdrop-blur-sm [&_tr]:border-b [&_tr]:border-border/70",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t border-border/70 bg-background/80 text-sm font-medium text-foreground supports-backdrop-filter:backdrop-blur-sm [&>tr]:border-b-0 [&_td]:py-3.5 [&_td]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border/45 transition-[background-color,border-color,color,box-shadow] duration-150 hover:border-border/60 hover:bg-accent/30 focus-within:bg-accent/20 data-[state=selected]:border-primary/35 data-[state=selected]:bg-primary/10 data-[state=selected]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-[3.25rem] px-4 py-3.5 text-left align-middle text-[0.72rem] font-semibold tracking-[0.14em] whitespace-nowrap uppercase text-muted-foreground first:pl-5 last:pr-5 [&[align=center]]:text-center [&[align=right]]:text-right [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-4 py-4 align-middle whitespace-nowrap text-sm leading-5 text-foreground first:pl-5 last:pr-5 [&[align=center]]:text-center [&[align=right]]:text-right [&:has([role=checkbox])]:pr-0 [&>[data-secondary]]:mt-1 [&>[data-secondary]]:block [&>[data-secondary]]:text-xs [&>[data-secondary]]:font-normal [&>[data-secondary]]:tracking-[0.02em] [&>[data-secondary]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "px-1 pt-3 pb-1 text-sm leading-5 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
