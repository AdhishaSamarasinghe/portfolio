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
    <section id={id} className={cn('scroll-mt-24 py-16 sm:py-20', className)}>
      <Container>
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-300 to-cyan-200">
            <span className="h-px w-8 bg-gradient-to-r from-indigo-400/70 to-cyan-300/70" aria-hidden="true" />
            {title}
          </p>
          {subtitle ? (
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {subtitle}
            </h2>
          ) : null}
        </Reveal>

        <Reveal className="mt-8">{children}</Reveal>
      </Container>
    </section>
  )
}
