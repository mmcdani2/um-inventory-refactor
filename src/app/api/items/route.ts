import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { ZodError } from "zod"

import { createItem } from "@/lib/services/items"

export async function POST(request: Request) {
  try {
    const { userId } = await auth()

    const body = (await request.json()) as {
      sku?: string
      name?: string
      uom?: string
      barcode?: string
      aliases?: string
    }

    const item = await createItem({
      sku: body.sku ?? "",
      name: body.name ?? "",
      uom: body.uom ?? "",
      barcode: body.barcode ?? "",
      aliases: body.aliases ?? "",
      createdBy: userId ?? "dev-local-user",
    })

    return NextResponse.json({ item }, { status: 201 })
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
      error instanceof Error ? error.message : "Failed to create item."

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
