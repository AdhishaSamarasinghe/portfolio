import { cn } from '../utils/cn'

export function Button({
  as = 'a',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const Component = as
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-60 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-indigo-500 text-white hover:bg-indigo-400 shadow-sm shadow-indigo-500/20',
    secondary:
      'bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15',
    ghost: 'text-slate-200 hover:bg-white/10',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  }

  return (
    <Component
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  )
}
