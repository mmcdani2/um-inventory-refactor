import { randomUUID } from "crypto"

import { prisma } from "@/lib/prisma"
import { createItemSchema } from "@/lib/validators/items"

type CreateItemArgs = {
  sku: string
  name: string
  uom: string
  barcode?: string
  aliases?: string
  createdBy: string
}

type SearchItemsArgs = {
  query?: string
}

export async function createItem(args: CreateItemArgs) {
  const parsed = createItemSchema.parse({
    sku: args.sku,
    name: args.name,
    uom: args.uom,
    barcode: args.barcode ?? "",
    aliases: args.aliases ?? "",
  })

  const item = await prisma.item.create({
    data: {
      id: randomUUID(),
      name: parsed.name,
      sku: parsed.sku || null,
      barcode: parsed.barcode || null,
    },
  })

  return {
    ...item,
    aliases: (parsed.aliases ?? "")
      .split(",")
      .map((alias) => alias.trim())
      .filter(Boolean),
    uom: parsed.uom,
  }
}

export async function searchItems({ query = "" }: SearchItemsArgs = {}) {
  const trimmedQuery = query.trim()

  const items = await prisma.item.findMany({
    where: trimmedQuery
      ? {
          OR: [
            {
              name: {
                contains: trimmedQuery,
                mode: "insensitive",
              },
            },
            {
              sku: {
                contains: trimmedQuery,
                mode: "insensitive",
              },
            },
            {
              barcode: {
                contains: trimmedQuery,
                mode: "insensitive",
              },
            },
          ],
        }
      : undefined,
    orderBy: {
      createdAt: "desc",
    },
  })

  return items.map((item) => ({
    id: item.id,
    sku: item.sku ?? "",
    name: item.name,
    uom: "",
    barcode: item.barcode ?? "",
    aliases: [],
  }))
}
