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

export async function createItem(args: CreateItemArgs) {
  const parsed = createItemSchema.parse({
    sku: args.sku,
    name: args.name,
    uom: args.uom,
    barcode: args.barcode ?? "",
    aliases: args.aliases ?? "",
  })

  const aliases = (parsed.aliases ?? "")
    .split(",")
    .map((alias) => alias.trim())
    .filter(Boolean)

  const createdBy = args.createdBy.trim()

  if (!createdBy) {
    throw new Error("createdBy is required.")
  }

  const item = await prisma.item.create({
    data: {
      sku: parsed.sku,
      name: parsed.name,
      unitOfMeasure: parsed.uom,
      barcode: parsed.barcode || null,
      createdBy,
    },
  })

  return {
    ...item,
    aliases,
  }
}
