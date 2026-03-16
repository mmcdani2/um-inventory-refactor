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
    <Card size="sm">
      <CardHeader className="border-b">
        <CardTitle>Search items</CardTitle>
        <CardDescription>
          Find items by the product details your team uses most often.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          aria-label="Search items"
          onChange={onChange}
          placeholder={placeholder}
          type="search"
          value={value}
        />
      </CardContent>
    </Card>
  )
}
