import type { JSX } from "react"

export function ItemsPageHeader(): JSX.Element {
  return (
    <header className="flex flex-col gap-2 sm:gap-3">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Items
      </h1>
      <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        Manage item master data for consistent, accurate inventory operations.
      </p>
    </header>
  )
}
