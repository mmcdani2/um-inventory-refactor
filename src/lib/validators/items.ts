import { z } from "zod"

function trimString(value: unknown) {
  return typeof value === "string" ? value.trim() : value
}

function parseOptionalCost(value: unknown) {
  if (typeof value === "string") {
    const trimmed = value.trim()

    if (!trimmed) {
      return undefined
    }

    const numericValue = Number(trimmed)
    return Number.isNaN(numericValue) ? value : numericValue
  }

  return value
}

export const createItemSchema = z.object({
  sku: z.preprocess(trimString, z.string().min(1, "SKU is required.")),
  name: z.preprocess(trimString, z.string().min(1, "Name is required.")),
  uom: z.preprocess(trimString, z.string().min(1, "UOM is required.")),
  barcode: z.preprocess(
    trimString,
    z.string().optional().or(z.literal(""))
  ),
  cost: z.preprocess(
    parseOptionalCost,
    z.number().nonnegative("Cost cannot be negative.").optional()
  ),
  aliases: z.preprocess(
    trimString,
    z.string().optional().or(z.literal(""))
  ),
})

export type CreateItemInput = z.infer<typeof createItemSchema>
