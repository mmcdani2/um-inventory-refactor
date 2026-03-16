import type { ComponentProps, FormEventHandler, JSX } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ItemsCreateCardProps = {
  sku?: string
  name?: string
  uom?: string
  barcode?: string
  aliases?: string
  onSkuChange?: ComponentProps<typeof Input>["onChange"]
  onNameChange?: ComponentProps<typeof Input>["onChange"]
  onUomChange?: ComponentProps<typeof Input>["onChange"]
  onBarcodeChange?: ComponentProps<typeof Input>["onChange"]
  onAliasesChange?: ComponentProps<typeof Input>["onChange"]
  onSubmit?: FormEventHandler<HTMLFormElement>
  isSubmitting?: boolean
}

export function ItemsCreateCard({
  sku = "",
  name = "",
  uom = "",
  barcode = "",
  aliases = "",
  onSkuChange,
  onNameChange,
  onUomChange,
  onBarcodeChange,
  onAliasesChange,
  onSubmit,
  isSubmitting = false,
}: ItemsCreateCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Create item</CardTitle>
        <CardDescription>
          Add clean item master data for receiving, checkout, and counts.
        </CardDescription>
      </CardHeader>

      <form onSubmit={onSubmit}>
        <CardContent className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="item-sku"
              >
                SKU
              </label>
              <Input
                id="item-sku"
                name="sku"
                onChange={onSkuChange}
                placeholder="Filter-Drier-3/8"
                value={sku}
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="item-name"
              >
                Name
              </label>
              <Input
                id="item-name"
                name="name"
                onChange={onNameChange}
                placeholder="Filter Drier 3/8"
                value={name}
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="item-uom"
              >
                UOM
              </label>
              <Input
                id="item-uom"
                name="uom"
                onChange={onUomChange}
                placeholder="Each"
                value={uom}
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="item-barcode"
              >
                Barcode
              </label>
              <Input
                id="item-barcode"
                name="barcode"
                onChange={onBarcodeChange}
                placeholder="Optional barcode"
                value={barcode}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="item-aliases"
            >
              Aliases
            </label>
            <Input
              id="item-aliases"
              name="aliases"
              onChange={onAliasesChange}
              placeholder="TXV, expansion valve, metering device"
              value={aliases}
            />
            <p className="text-sm text-muted-foreground">
              Separate aliases with commas so your team can find items the way
              they actually say them.
            </p>
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <Button
            size="default"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Item"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

