import type { PropsWithChildren } from 'react'

import { cn } from '../lib/cn'
import { Container } from './Container'

type SectionProps = PropsWithChildren<{
  id?: string
  title: string
  subtitle?: string
  className?: string
}>

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 sm:py-20', className)}>
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wider text-indigo-300/90">{title}</p>
          {subtitle ? <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{subtitle}</h2> : null}
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}
