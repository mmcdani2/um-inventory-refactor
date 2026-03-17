import type { JSX } from "react"

export function ItemsPageHeader(): JSX.Element {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_20px_80px_-32px_rgba(59,130,246,0.45)] backdrop-blur md:px-7 md:py-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="flex flex-col gap-3">
        <div className="inline-flex w-fit items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-200">
          Items
        </div>
      </div>
    </header>
  )
}
