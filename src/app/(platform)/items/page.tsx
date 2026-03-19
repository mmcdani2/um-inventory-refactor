"use client"

import { useEffect, useState } from "react"

import { ItemsCreateCard } from "@/components/items/items-create-card"
import { ItemsListCard } from "@/components/items/items-list-card"
import { ItemsPageHeader } from "@/components/items/items-page-header"
import { ItemsSearchCard } from "@/components/items/items-search-card"

type ItemRecord = {
  id: string
  sku: string
  name: string
  uom: string
  barcode: string
  cost: number | null
  aliases: string[]
}

type CreateItemValues = {
  sku: string
  name: string
  uom: string
  barcode: string
  cost: string
  aliases: string
}

type EditItemValues = CreateItemValues & {
  id: string
}

function toEditValues(item: ItemRecord): EditItemValues {
  return {
    id: item.id,
    sku: item.sku,
    name: item.name,
    uom: item.uom,
    barcode: item.barcode,
    cost: item.cost === null ? "" : String(item.cost),
    aliases: item.aliases.join(", "),
  }
}

export default function ItemsPage() {
  const [search, setSearch] = useState("")
  const [items, setItems] = useState<ItemRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingItem, setEditingItem] = useState<EditItemValues | null>(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    async function loadItems() {
      try {
        setIsLoading(true)

        const query = search.trim()
        const url = query
          ? `/api/items?q=${encodeURIComponent(query)}`
          : "/api/items"

        const response = await fetch(url, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        })

        const payload = (await response.json()) as {
          items?: ItemRecord[]
          error?: string
        }

        if (!response.ok) {
          throw new Error(payload.error ?? "Failed to load items.")
        }

        if (isMounted) {
          setItems(payload.items ?? [])
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        console.error(error)

        if (isMounted) {
          setItems([])
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadItems()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [search])

  async function handleCreateItem(values: CreateItemValues) {
    const response = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        cost: values.cost.trim() ? values.cost : undefined,
      }),
    })

    const payload = (await response.json()) as {
      item?: ItemRecord
      error?: string
      fieldErrors?: Record<string, string[] | undefined>
    }

    if (!response.ok || !payload.item) {
      throw new Error(payload.error ?? "Failed to create item.")
    }

    const query = search.trim().toLowerCase()
    const costText =
      payload.item.cost === null ? "" : String(payload.item.cost).toLowerCase()

    const matchesCurrentSearch =
      !query ||
      payload.item.sku.toLowerCase().includes(query) ||
      payload.item.name.toLowerCase().includes(query) ||
      payload.item.uom.toLowerCase().includes(query) ||
      payload.item.barcode.toLowerCase().includes(query) ||
      costText.includes(query) ||
      payload.item.aliases.some((alias) => alias.toLowerCase().includes(query))

    if (matchesCurrentSearch) {
      setItems((current) => [payload.item as ItemRecord, ...current])
    }
  }

  async function handleUpdateItem(values: EditItemValues) {
    const response = await fetch(`/api/items/${values.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sku: values.sku,
        name: values.name,
        uom: values.uom,
        barcode: values.barcode,
        cost: values.cost.trim() ? values.cost : undefined,
        aliases: values.aliases,
      }),
    })

    const payload = (await response.json()) as {
      item?: ItemRecord
      error?: string
      fieldErrors?: Record<string, string[] | undefined>
    }

    if (!response.ok || !payload.item) {
      throw new Error(payload.error ?? "Failed to update item.")
    }

    setItems((current) =>
      current.map((item) => (item.id === payload.item!.id ? payload.item! : item))
    )
    setEditingItem(null)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1d2740_0%,#0b1020_32%,#050814_100%)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8 xl:gap-8">
        <ItemsPageHeader />

        <ItemsSearchCard
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)] xl:items-start">
          <ItemsCreateCard
            mode={editingItem ? "edit" : "create"}
            initialValues={editingItem ?? undefined}
            onSubmit={editingItem ? handleUpdateItem : handleCreateItem}
            onCancel={editingItem ? () => setEditingItem(null) : undefined}
          />
          <ItemsListCard
            items={items}
            emptyMessage={isLoading ? "Loading items..." : "No items yet."}
            onEditItem={(item) => setEditingItem(toEditValues(item))}
          />
        </div>
      </div>
    </div>
  )
}
