import type { PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'

import { cn } from '../lib/cn'

type RevealProps = PropsWithChildren<{
  className?: string
  once?: boolean
}>

export function Reveal({ className, once = true, children }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={cn(
        'motion-reduce:opacity-100 motion-reduce:transform-none',
        'transition duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        className,
      )}
    >
      {children}
    </div>
  )
}
