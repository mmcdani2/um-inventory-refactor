import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { ZodError } from "zod"

import { updateItem } from "@/lib/services/items"

type RouteContext = {
  params: Promise<{
    id: string
  }>
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
    }

    const { id } = await context.params

    if (!id?.trim()) {
      return NextResponse.json({ error: "Item id is required." }, { status: 400 })
    }

    const body = (await request.json()) as {
      sku?: string
      name?: string
      uom?: string
      barcode?: string
      cost?: number | string
      aliases?: string
    }

    const item = await updateItem({
      id,
      sku: body.sku ?? "",
      name: body.name ?? "",
      uom: body.uom ?? "",
      barcode: body.barcode ?? "",
      cost: body.cost,
      aliases: body.aliases ?? "",
    })

    return NextResponse.json({ item })
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Invalid item input.",
          fieldErrors: error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const message =
      error instanceof Error ? error.message : "Failed to update item."

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
