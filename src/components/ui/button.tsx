import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative isolate inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl border border-border/70 bg-card/90 bg-clip-padding font-medium whitespace-nowrap text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.24)] outline-none select-none transition-[transform,background-color,border-color,color,box-shadow,opacity] duration-150 ease-out before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/15 before:opacity-80 before:content-[''] focus-visible:border-border focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:outline-none active:translate-y-px active:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_4px_10px_rgba(0,0,0,0.28)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-border/45 disabled:bg-card/45 disabled:text-muted-foreground disabled:shadow-none disabled:before:opacity-0 aria-invalid:border-critical/60 aria-invalid:ring-2 aria-invalid:ring-critical/25 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-current [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-primary/75 bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:border-primary hover:bg-primary/94 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_14px_30px_rgba(0,0,0,0.32)] active:bg-primary/88",
        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:border-border/90 hover:bg-secondary/92 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_22px_rgba(0,0,0,0.26)] active:bg-secondary/86",
        outline:
          "bg-background/55 text-foreground hover:-translate-y-0.5 hover:border-border/90 hover:bg-card/78 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_22px_rgba(0,0,0,0.24)] active:bg-card/72",
        ghost:
          "border-transparent bg-transparent text-muted-foreground shadow-none before:opacity-0 hover:-translate-y-0.5 hover:border-border/45 hover:bg-card/60 hover:text-foreground hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_6px_14px_rgba(0,0,0,0.18)] active:bg-card/72",
        destructive:
          "border-critical/70 bg-critical text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:border-critical/85 hover:bg-critical/94 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_28px_rgba(0,0,0,0.34)] active:bg-critical/88 focus-visible:ring-critical/30",
        success:
          "border-success/60 bg-success text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:border-success/80 hover:bg-success/94 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_28px_rgba(0,0,0,0.32)] active:bg-success/88 focus-visible:ring-success/30",
        warning:
          "border-warning/40 bg-warning/16 text-warning shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_18px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:border-warning/55 hover:bg-warning/22 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_24px_rgba(0,0,0,0.26)] active:bg-warning/28 focus-visible:ring-warning/25",
        critical:
          "border-critical/45 bg-critical/18 text-critical shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_18px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:border-critical/60 hover:bg-critical/24 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_24px_rgba(0,0,0,0.28)] active:bg-critical/30 focus-visible:ring-critical/25",
        glass:
          "bg-card/55 text-foreground backdrop-blur-md hover:-translate-y-0.5 hover:border-border hover:bg-card/68 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_24px_rgba(0,0,0,0.24)] active:bg-card/74",
        action:
          "border-primary/70 bg-primary text-primary-foreground tracking-[0.01em] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_26px_rgba(0,0,0,0.32)] hover:-translate-y-0.5 hover:border-primary hover:bg-primary/93 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_16px_32px_rgba(0,0,0,0.36)] active:bg-primary/87 [&_svg]:scale-100",
      },
      size: {
        default:
          "h-10 min-w-10 px-4 text-sm [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 min-w-9 rounded-lg px-3.5 text-[0.8125rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 min-w-11 px-5 text-sm [&_svg:not([class*='size-'])]:size-[1.125rem]",
        xl: "h-12 min-w-12 rounded-2xl px-6 text-[0.95rem] [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 px-0 [&_svg:not([class*='size-'])]:size-4.5",
        "icon-sm":
          "size-8 rounded-lg px-0 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg":
          "size-12 rounded-2xl px-0 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    compoundVariants: [
      {
        variant: "action",
        size: "default",
        className: "h-12 rounded-2xl px-5 text-sm",
      },
      {
        variant: "action",
        size: "sm",
        className: "h-10 rounded-xl px-4 text-sm",
      },
      {
        variant: "action",
        size: "lg",
        className: "h-[3.25rem] rounded-2xl px-6 text-base",
      },
      {
        variant: "action",
        size: "xl",
        className:
          "h-14 rounded-2xl px-7 text-base [&_svg:not([class*='size-'])]:size-[1.375rem]",
      },
      {
        variant: "action",
        size: "icon",
        className: "size-12 rounded-2xl [&_svg:not([class*='size-'])]:size-5",
      },
      {
        variant: "action",
        size: "icon-sm",
        className: "size-10 rounded-xl [&_svg:not([class*='size-'])]:size-4",
      },
      {
        variant: "action",
        size: "icon-lg",
        className:
          "size-14 rounded-2xl [&_svg:not([class*='size-'])]:size-[1.375rem]",
      },
      {
        variant: "ghost",
        size: "icon",
        className: "rounded-xl",
      },
      {
        variant: "ghost",
        size: "icon-sm",
        className: "rounded-lg",
      },
      {
        variant: "default",
        className:
          "disabled:border-primary/30 disabled:bg-primary/45 disabled:text-primary-foreground/75",
      },
      {
        variant: "secondary",
        className:
          "disabled:border-border/35 disabled:bg-secondary/45 disabled:text-secondary-foreground/65",
      },
      {
        variant: "outline",
        className: "disabled:bg-background/35",
      },
      {
        variant: "ghost",
        className: "disabled:bg-transparent disabled:text-muted-foreground/70",
      },
      {
        variant: "destructive",
        className:
          "disabled:border-critical/30 disabled:bg-critical/40 disabled:text-primary-foreground/75",
      },
      {
        variant: "success",
        className:
          "disabled:border-success/30 disabled:bg-success/40 disabled:text-primary-foreground/75",
      },
      {
        variant: "warning",
        className:
          "disabled:border-warning/25 disabled:bg-warning/10 disabled:text-warning/55",
      },
      {
        variant: "critical",
        className:
          "disabled:border-critical/25 disabled:bg-critical/10 disabled:text-critical/55",
      },
      {
        variant: "glass",
        className:
          "disabled:border-border/35 disabled:bg-card/35 disabled:text-muted-foreground/75",
      },
      {
        variant: "action",
        className:
          "disabled:border-primary/30 disabled:bg-primary/45 disabled:text-primary-foreground/75",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      "aria-pressed": ariaPressed,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot.Root : "button"
    const isPressed = ariaPressed === true || ariaPressed === "true"

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        aria-pressed={ariaPressed}
        className={cn(
          buttonVariants({ variant, size, className }),
          isPressed &&
            "translate-y-px shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_4px_10px_rgba(0,0,0,0.3)] before:opacity-50"
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
