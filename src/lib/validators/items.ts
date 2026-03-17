import { z } from "zod"

function trimString(value: unknown) {
  return typeof value === "string" ? value.trim() : value
}

export const createItemSchema = z.object({
  sku: z.preprocess(
    trimString,
    z.string().min(1, "SKU is required.")
  ),
  name: z.preprocess(
    trimString,
    z.string().min(1, "Name is required.")
  ),
  uom: z.preprocess(
    trimString,
    z.string().min(1, "UOM is required.")
  ),
  barcode: z.preprocess(
    trimString,
    z.string().optional().or(z.literal(""))
  ),
  aliases: z.preprocess(
    trimString,
    z.string().optional().or(z.literal(""))
  ),
})

export type CreateItemInput = z.infer<typeof createItemSchema>
