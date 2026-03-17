"use client"

import type { FormEvent, JSX } from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type CreateItemFormValues = {
  sku: string
  name: string
  uom: string
  barcode: string
  aliases: string
}

type CreateItemFormErrors = Partial<Record<keyof CreateItemFormValues, string>>

type ItemsCreateCardProps = {
  onSubmit?: (values: CreateItemFormValues) => void | Promise<void>
}

const initialValues: CreateItemFormValues = {
  sku: "",
  name: "",
  uom: "",
  barcode: "",
  aliases: "",
}

const initialErrors: CreateItemFormErrors = {}

export function ItemsCreateCard({
  onSubmit,
}: ItemsCreateCardProps): JSX.Element {
  const [values, setValues] = useState<CreateItemFormValues>(initialValues)
  const [errors, setErrors] = useState<CreateItemFormErrors>(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function updateField<K extends keyof CreateItemFormValues>(
    field: K,
    value: CreateItemFormValues[K]
  ) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }))

    setErrors((current) => {
      if (!current[field]) {
        return current
      }

      const next = { ...current }
      delete next[field]
      return next
    })
  }

  function validate(nextValues: CreateItemFormValues): CreateItemFormErrors {
    const nextErrors: CreateItemFormErrors = {}

    if (!nextValues.sku.trim()) {
      nextErrors.sku = "SKU is required."
    }

    if (!nextValues.name.trim()) {
      nextErrors.name = "Name is required."
    }

    if (!nextValues.uom.trim()) {
      nextErrors.uom = "UOM is required."
    }

    return nextErrors
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedValues: CreateItemFormValues = {
      sku: values.sku.trim(),
      name: values.name.trim(),
      uom: values.uom.trim(),
      barcode: values.barcode.trim(),
      aliases: values.aliases.trim(),
    }

    const nextErrors = validate(trimmedValues)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    if (!onSubmit) {
      return
    }

    try {
      setIsSubmitting(true)
      await onSubmit(trimmedValues)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="overflow-hidden border-white/10 bg-white/[0.04] shadow-[0_18px_60px_-32px_rgba(15,23,42,0.95)] backdrop-blur">
      <CardHeader className="border-b border-white/10 pb-4">
        <CardTitle className="text-white">Create item</CardTitle>
        <CardDescription className="text-slate-400">
          Add clean master data before you start receiving and moving stock.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit} noValidate>
        <CardContent className="space-y-5 pt-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="item-sku"
              >
                SKU
              </label>
              <Input
                id="item-sku"
                name="sku"
                placeholder="FILTER-1224-01"
                value={values.sku}
                onChange={(event) => updateField("sku", event.target.value)}
                aria-invalid={Boolean(errors.sku)}
                aria-describedby={errors.sku ? "item-sku-error" : undefined}
                className="h-11 border-white/10 bg-slate-950/40 text-white placeholder:text-slate-500"
              />
              {errors.sku ? (
                <p id="item-sku-error" className="text-sm text-rose-400">
                  {errors.sku}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="item-name"
              >
                Name
              </label>
              <Input
                id="item-name"
                name="name"
                placeholder="Filter 12x24x1"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "item-name-error" : undefined}
                className="h-11 border-white/10 bg-slate-950/40 text-white placeholder:text-slate-500"
              />
              {errors.name ? (
                <p id="item-name-error" className="text-sm text-rose-400">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="item-uom"
              >
                UOM
              </label>
              <Input
                id="item-uom"
                name="uom"
                placeholder="Each"
                value={values.uom}
                onChange={(event) => updateField("uom", event.target.value)}
                aria-invalid={Boolean(errors.uom)}
                aria-describedby={errors.uom ? "item-uom-error" : undefined}
                className="h-11 border-white/10 bg-slate-950/40 text-white placeholder:text-slate-500"
              />
              {errors.uom ? (
                <p id="item-uom-error" className="text-sm text-rose-400">
                  {errors.uom}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="item-barcode"
              >
                Barcode
              </label>
              <Input
                id="item-barcode"
                name="barcode"
                placeholder="Optional barcode"
                value={values.barcode}
                onChange={(event) => updateField("barcode", event.target.value)}
                className="h-11 border-white/10 bg-slate-950/40 text-white placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-200"
              htmlFor="item-aliases"
            >
              Aliases
            </label>
            <Input
              id="item-aliases"
              name="aliases"
              placeholder="1-inch filter, standard return filter, media filter"
              value={values.aliases}
              onChange={(event) => updateField("aliases", event.target.value)}
              className="h-11 border-white/10 bg-slate-950/40 text-white placeholder:text-slate-500"
            />
            <p className="text-sm text-slate-400">
              Separate aliases with commas so search works the way your techs
              actually talk.
            </p>
          </div>
        </CardContent>

        <CardFooter className="justify-end border-t border-white/10 pt-5">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-w-32 bg-blue-500 text-white hover:bg-blue-400"
          >
            {isSubmitting ? "Creating..." : "Create Item"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
