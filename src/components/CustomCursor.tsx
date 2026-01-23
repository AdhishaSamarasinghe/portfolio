import { useEffect, useRef } from 'react'

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

function isFinePointer() {
  return window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!isFinePointer()) return
    if (prefersReducedMotion()) return

    const dotEl = dotRef.current
    const ringEl = ringRef.current
    if (!dotEl || !ringEl) return

    const dot = dotEl
    const ring = ringEl

    let raf = 0
    let visible = true

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2

    let ringX = targetX
    let ringY = targetY

    function setVisible(next: boolean) {
      visible = next
      dot.style.opacity = next ? '1' : '0'
      ring.style.opacity = next ? '1' : '0'
    }

    function setPointer(next: boolean) {
      ring.dataset.pointer = next ? 'true' : 'false'
    }

    function setPressed(next: boolean) {
      ring.dataset.pressed = next ? 'true' : 'false'
      dot.dataset.pressed = next ? 'true' : 'false'
    }

    function onMove(e: PointerEvent) {
      targetX = e.clientX
      targetY = e.clientY
      if (!visible) setVisible(true)
    }

    function onDown() {
      setPressed(true)
    }

    function onUp() {
      setPressed(false)
    }

    function onEnter() {
      setVisible(true)
    }

    function onLeave() {
      setVisible(false)
    }

    function isInteractive(el: Element | null) {
      if (!el) return false
      return Boolean(
        el.closest(
          'a,button,[role="button"],input,select,textarea,summary,label,[data-cursor="pointer"]',
        ),
      )
    }

    function onOver(e: PointerEvent) {
      setPointer(isInteractive(e.target as Element | null))
    }

    function onOut(e: PointerEvent) {
      const to = (e.relatedTarget ?? null) as Element | null
      setPointer(isInteractive(to))
    }

    function loop() {
      // Ring gently follows the dot
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`

      raf = window.requestAnimationFrame(loop)
    }

    // init
    setVisible(true)
    setPressed(false)
    setPointer(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)

    // capture hover state across all interactive elements
    window.addEventListener('pointerover', onOver, true)
    window.addEventListener('pointerout', onOut, true)

    raf = window.requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('pointerover', onOver, true)
      window.removeEventListener('pointerout', onOut, true)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[70] hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      aria-hidden="true"
    >
      <div
        ref={ringRef}
        className="cursor-ring"
      />
      <div
        ref={dotRef}
        className="cursor-dot"
      />
    </div>
  )
}
