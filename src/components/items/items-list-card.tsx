import type { JSX, ReactNode } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ItemsListCardProps = {
  children?: ReactNode
  title?: string
  description?: string
  emptyMessage?: string
  hasItems?: boolean
}

export function ItemsListCard({
  children,
  title = "Items list",
  description = "Review item master records before wiring search and live data.",
  emptyMessage = "No items yet.",
  hasItems = false,
}: ItemsListCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        {hasItems ? (
          <div className="divide-y">{children}</div>
        ) : (
          <div className="flex min-h-48 items-center justify-center px-6 py-10 text-center">
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                {emptyMessage}
              </p>
              <p className="text-sm text-muted-foreground">
                Items you create will show up here once the page is wired.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
