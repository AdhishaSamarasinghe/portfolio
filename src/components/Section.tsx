import type { PropsWithChildren } from 'react'

import { cn } from '../lib/cn'
import { Container } from './Container'
import { Reveal } from './Reveal'

type SectionProps = PropsWithChildren<{
  id?: string
  title: string
  subtitle?: string
  className?: string
}>

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 sm:py-24 lg:py-28', className)}>
      <Container>
        <Reveal className="max-w-3xl">
          <p className="kicker">{title}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-4xl">
            {subtitle ?? title}
          </h2>
          <p className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" aria-hidden="true" />
        </Reveal>

        <Reveal className="mt-12">{children}</Reveal>
      </Container>
    </section>
  )
}
