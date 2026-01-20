import { cn } from '../utils/cn'
import { Container } from './Container'

export function Section({ id, eyebrow, title, description, children, className }) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-14 sm:py-20', className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mx-auto max-w-2xl">
            {eyebrow && (
              <div className="text-sm font-semibold tracking-wide text-indigo-300">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={cn('mt-10', !(eyebrow || title || description) && 'mt-0')}>
          {children}
        </div>
      </Container>
    </section>
  )
}
