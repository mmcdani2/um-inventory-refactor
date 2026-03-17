"use client"

import { useMemo, useState } from "react"

import { ItemsCreateCard } from "@/components/items/items-create-card"
import { ItemsListCard } from "@/components/items/items-list-card"
import { ItemsPageHeader } from "@/components/items/items-page-header"
import { ItemsSearchCard } from "@/components/items/items-search-card"

type ItemRecord = {
  id: string
  sku: string
  name: string
  unitOfMeasure: string
  barcode: string | null
  aliases: string[]
}

type CreateItemValues = {
  sku: string
  name: string
  uom: string
  barcode: string
  aliases: string
}

export default function ItemsPage() {
  const [search, setSearch] = useState("")
  const [items, setItems] = useState<ItemRecord[]>([])

  async function handleCreateItem(values: CreateItemValues) {
    const response = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    const payload = (await response.json()) as {
      item?: ItemRecord
      error?: string
      fieldErrors?: Record<string, string[] | undefined>
    }

    if (!response.ok || !payload.item) {
      throw new Error(payload.error ?? "Failed to create item.")
    }

    setItems((current) => [payload.item as ItemRecord, ...current])
  }

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) {
      return items
    }

    return items.filter((item) => {
      return (
        item.sku.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.unitOfMeasure.toLowerCase().includes(query) ||
        (item.barcode ?? "").toLowerCase().includes(query) ||
        item.aliases.some((alias) => alias.toLowerCase().includes(query))
      )
    })
  }, [items, search])

  const listItems = filteredItems.map((item) => ({
    id: item.id,
    sku: item.sku,
    name: item.name,
    uom: item.unitOfMeasure,
    barcode: item.barcode ?? "",
    aliases: item.aliases,
  }))

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1d2740_0%,#0b1020_32%,#050814_100%)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8 xl:gap-8">
        <ItemsPageHeader />

        <ItemsSearchCard
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)] xl:items-start">
          <ItemsCreateCard onSubmit={handleCreateItem} />
          <ItemsListCard items={listItems} />
        </div>
      </div>
    </div>
  )
}
