import type { JSX } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ItemsListRow = {
  id: string
  sku: string
  name: string
  uom: string
  barcode: string
  cost: number | null
  aliases: string[]
}

type ItemsListCardProps = {
  items?: ItemsListRow[]
  title?: string
  description?: string
  emptyMessage?: string
  onEditItem?: (item: ItemsListRow) => void
}

function formatCost(cost: number | null) {
  if (cost === null) {
    return "—"
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cost)
}

export function ItemsListCard({
  items = [],
  title = "Items list",
  description = "Review item master records before wiring search and live data.",
  emptyMessage = "No items yet.",
  onEditItem,
}: ItemsListCardProps): JSX.Element {
  const hasItems = items.length > 0

  return (
    <Card className="overflow-hidden border-white/10 bg-white/[0.04] shadow-[0_18px_60px_-32px_rgba(15,23,42,0.95)] backdrop-blur">
      <CardHeader className="border-b border-white/10 pb-4">
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-slate-400">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        {hasItems ? (
          <div className="p-4 md:p-5">
            <div className="hidden rounded-2xl border border-white/10 bg-slate-950/30 md:block">
              <div className="grid grid-cols-[minmax(0,1.3fr)_100px_120px_minmax(0,1fr)_96px] gap-4 border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                <span>Item</span>
                <span>UOM</span>
                <span>Cost</span>
                <span>Barcode / Aliases</span>
                <span className="text-right">Action</span>
              </div>

              <div className="divide-y divide-white/10">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[minmax(0,1.3fr)_100px_120px_minmax(0,1fr)_96px] gap-4 px-4 py-4"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">
                        {item.name}
                      </p>
                      <p className="truncate text-xs text-slate-400">
                        {item.sku}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm text-slate-300">
                        {item.uom || "—"}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm text-slate-300">
                        {formatCost(item.cost)}
                      </p>
                    </div>

                    <div className="min-w-0 space-y-1">
                      <p className="truncate text-sm text-slate-300">
                        {item.barcode || "—"}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {item.aliases.length > 0
                          ? item.aliases.join(", ")
                          : "No aliases"}
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => onEditItem?.(item)}
                        className="border-white/10 bg-transparent text-slate-200 hover:bg-white/5 hover:text-white"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:hidden">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4"
                >
                  <div className="space-y-1">
                    <p className="text-base font-medium text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">{item.sku}</p>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        UOM
                      </p>
                      <p className="text-sm text-slate-300">
                        {item.uom || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Cost
                      </p>
                      <p className="text-sm text-slate-300">
                        {formatCost(item.cost)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Barcode
                      </p>
                      <p className="text-sm text-slate-300">
                        {item.barcode || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Aliases
                      </p>
                      <p className="text-sm text-slate-300">
                        {item.aliases.length > 0
                          ? item.aliases.join(", ")
                          : "No aliases"}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => onEditItem?.(item)}
                        className="w-full border-white/10 bg-transparent text-slate-200 hover:bg-white/5 hover:text-white"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-5">
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] px-4 py-10 text-center">
              <p className="text-sm font-medium text-white">{emptyMessage}</p>
              <p className="mt-1 text-sm text-slate-400">
                Create an item on the left and it will show up here immediately.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
