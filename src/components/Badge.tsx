import type { PropsWithChildren } from 'react'

import { cn } from '../lib/cn'

type BadgeProps = PropsWithChildren<{
  className?: string
}>

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-slate-100/[0.85] shadow-sm shadow-black/25 backdrop-blur',
        className,
      )}
    >
      {children}
    </span>
  )
}
