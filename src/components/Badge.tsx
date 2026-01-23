import type { PropsWithChildren } from 'react'

import { cn } from '../lib/cn'

type BadgeProps = PropsWithChildren<{
  className?: string
}>

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-gradient-to-b from-white/[0.10] to-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-100/90 shadow-sm backdrop-blur',
        className,
      )}
    >
      {children}
    </span>
  )
}
