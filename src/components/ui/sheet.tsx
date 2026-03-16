"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      className={cn(
        "outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  )
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-background/76 duration-200 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-5 overflow-hidden border border-border/70 bg-card/92 bg-clip-padding text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(0,0,0,0.48)] supports-backdrop-filter:backdrop-blur-xl transition duration-200 ease-out outline-none before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/12 before:content-[''] data-[side=bottom]:inset-x-2 data-[side=bottom]:bottom-2 data-[side=bottom]:max-h-[85vh] data-[side=bottom]:rounded-2xl data-[side=bottom]:border-t data-[side=left]:inset-y-2 data-[side=left]:left-2 data-[side=left]:w-[calc(100%-1rem)] data-[side=left]:max-w-md data-[side=left]:rounded-2xl data-[side=left]:border-r data-[side=right]:inset-y-2 data-[side=right]:right-2 data-[side=right]:w-[calc(100%-1rem)] data-[side=right]:max-w-md data-[side=right]:rounded-2xl data-[side=right]:border-l data-[side=top]:inset-x-2 data-[side=top]:top-2 data-[side=top]:max-h-[85vh] data-[side=top]:rounded-2xl data-[side=top]:border-b sm:data-[side=left]:w-full sm:data-[side=right]:w-full data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-8 data-[side=left]:data-open:slide-in-from-left-8 data-[side=right]:data-open:slide-in-from-right-8 data-[side=top]:data-open:slide-in-from-top-8 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-8 data-[side=left]:data-closed:slide-out-to-left-8 data-[side=right]:data-closed:slide-out-to-right-8 data-[side=top]:data-closed:slide-out-to-top-8",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetClose asChild>
            <Button
              variant="ghost"
              className="absolute top-4 right-4 z-10 size-9 rounded-xl border border-border/60 bg-background/68 text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-border hover:bg-card hover:text-foreground"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-2.5 px-5 pt-5 pr-14 text-left", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col gap-2 border-t border-border/70 bg-background/55 px-5 py-4 supports-backdrop-filter:backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "text-lg leading-tight font-semibold tracking-[0.01em] text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        "text-sm leading-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
