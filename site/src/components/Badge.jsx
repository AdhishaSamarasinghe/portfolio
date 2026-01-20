import { cn } from '../utils/cn'

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10',
        className,
      )}
    >
      {children}
    </span>
  )
}
