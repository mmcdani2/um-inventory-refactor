import type { ComponentProps, JSX } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type ItemsSearchCardProps = {
  value?: string
  onChange?: ComponentProps<typeof Input>["onChange"]
  placeholder?: string
}

export function ItemsSearchCard({
  value,
  onChange,
  placeholder = "Search by SKU, name, barcode, or alias",
}: ItemsSearchCardProps): JSX.Element {
  return (
    <Card className="overflow-hidden border-white/10 bg-white/[0.04] shadow-[0_16px_50px_-28px_rgba(15,23,42,0.95)] backdrop-blur">
      <CardHeader className="border-b border-white/10 pb-4">
        <CardTitle className="text-white">Search items</CardTitle>
        <CardDescription className="text-slate-400">
          Find items the same way your team talks about them in the field.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 pt-5">
        <Input
          aria-label="Search items"
          onChange={onChange}
          placeholder={placeholder}
          type="search"
          value={value}
          className="h-12 border-white/10 bg-slate-950/40 text-base text-white placeholder:text-slate-500"
        />

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
            SKU
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
            Barcode
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
            Alias
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
            Name
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
