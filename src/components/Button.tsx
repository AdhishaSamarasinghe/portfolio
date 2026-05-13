import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
  }
>

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base font-semibold transition will-change-transform hover:-translate-y-0.5 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 shadow-sm shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

const variants: Record<Variant, string> = {
  primary:
    'relative overflow-hidden text-white bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400 hover:from-zinc-800 hover:to-zinc-300 shadow-[0_14px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.5)]',
  secondary:
    'border border-white/16 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/24 shadow-sm shadow-black/25',
  ghost:
    'bg-transparent text-white/[0.82] hover:bg-white/[0.07] hover:text-white',
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
  download?: string | boolean
  'aria-label'?: string
}>

export function ButtonLink({
  href,
  className,
  variant = 'primary',
  target,
  rel,
  download,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      download={download}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </a>
  )
}
