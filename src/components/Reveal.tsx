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
  const [reduceMotion, setReduceMotion] = useState(false)
  const motion = useRef<{ offsetX: number; offsetY: number; delay: number } | null>(null)

  if (!motion.current) {
    const direction = Math.random() > 0.5 ? 1 : -1
    const distance = 40 + Math.random() * 30
    motion.current = {
      offsetX: direction * distance,
      offsetY: 12 + Math.random() * 10,
      delay: Math.round(Math.random() * 180),
    }
  }

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

  useEffect(() => {
    if (!window.matchMedia) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(media.matches)
    onChange()
    if (media.addEventListener) {
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    }
    media.addListener(onChange)
    return () => media.removeListener(onChange)
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'motion-reduce:opacity-100 motion-reduce:transform-none',
        'transition-[transform,opacity] duration-700 ease-out will-change-transform',
        visible ? 'opacity-100' : 'opacity-0',
        className,
      )}
      style={
        reduceMotion
          ? undefined
          : {
              transform: visible
                ? 'translate3d(0, 0, 0)'
                : `translate3d(${motion.current.offsetX}vw, ${motion.current.offsetY}px, 0)`,
              transitionDelay: `${motion.current.delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
