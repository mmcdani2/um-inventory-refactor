import { randomUUID } from "crypto"

import { prisma } from "@/lib/prisma"
import { createItemSchema } from "@/lib/validators/items"

type CreateItemArgs = {
  sku: string
  name: string
  uom: string
  barcode?: string
  cost?: number | string
  aliases?: string
  createdBy: string
}

type UpdateItemArgs = {
  id: string
  sku: string
  name: string
  uom: string
  barcode?: string
  cost?: number | string
  aliases?: string
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
    cost: args.cost,
    aliases: args.aliases ?? "",
  })

  const item = await prisma.item.create({
    data: {
      id: randomUUID(),
      name: parsed.name,
      sku: parsed.sku || null,
      barcode: parsed.barcode || null,
      uom: parsed.uom || null,
      cost: parsed.cost ?? null,
    },
  })

  return {
    ...item,
    cost: item.cost ? Number(item.cost) : null,
    aliases: (parsed.aliases ?? "")
      .split(",")
      .map((alias) => alias.trim())
      .filter(Boolean),
  }
}

export async function updateItem(args: UpdateItemArgs) {
  const id = args.id.trim()

  if (!id) {
    throw new Error("Item id is required.")
  }

  const parsed = createItemSchema.parse({
    sku: args.sku,
    name: args.name,
    uom: args.uom,
    barcode: args.barcode ?? "",
    cost: args.cost,
    aliases: args.aliases ?? "",
  })

  const item = await prisma.item.update({
    where: {
      id,
    },
    data: {
      name: parsed.name,
      sku: parsed.sku || null,
      barcode: parsed.barcode || null,
      uom: parsed.uom || null,
      cost: parsed.cost ?? null,
    },
  })

  return {
    ...item,
    cost: item.cost ? Number(item.cost) : null,
    aliases: (parsed.aliases ?? "")
      .split(",")
      .map((alias) => alias.trim())
      .filter(Boolean),
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
    uom: item.uom ?? "",
    barcode: item.barcode ?? "",
    cost: item.cost ? Number(item.cost) : null,
    aliases: [],
  }))
}
