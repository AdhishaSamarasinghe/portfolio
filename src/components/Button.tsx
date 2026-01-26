import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
  }
>

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base font-semibold transition will-change-transform active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'relative overflow-hidden text-white shadow-sm shadow-teal-500/20 bg-gradient-to-r from-brand-indigo via-teal-500 to-brand-cyan hover:from-teal-400 hover:to-sky-300',
  secondary:
    'border border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.07] hover:border-white/20',
  ghost:
    'bg-transparent text-white/90 hover:bg-white/[0.08] hover:text-white',
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
