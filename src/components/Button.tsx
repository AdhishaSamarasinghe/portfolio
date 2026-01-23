import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
  }
>

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition will-change-transform active:translate-y-px disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

const variants: Record<Variant, string> = {
  primary:
    'relative overflow-hidden text-white shadow-sm shadow-indigo-500/25 bg-gradient-to-r from-indigo-500 via-indigo-500 to-cyan-500 hover:from-indigo-400 hover:via-indigo-400 hover:to-cyan-400',
  secondary:
    'border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.10] hover:border-white/25',
  ghost:
    'bg-transparent text-white/90 hover:bg-white/10 hover:text-white',
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />
}

type ButtonLinkProps = PropsWithChildren<{
  href: string
  className?: string
  variant?: Variant
  target?: string
  rel?: string
  'aria-label'?: string
}>

export function ButtonLink({
  href,
  className,
  variant = 'primary',
  target,
  rel,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </a>
  )
}
