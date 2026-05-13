import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type SplashScreenProps = {
  onComplete: () => void
}

type Particle = {
  left: string
  top: string
  size: number
  driftX: number
  driftY: number
  duration: number
  delay: number
  opacity: number
}

const firstName = 'ADHISHA'
const lastName = 'SAMARASINGHE'

function buildAmbientParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * Math.PI * 2
    const ring = index % 2 === 0 ? 22 : 34
    const driftScale = 12 + (index % 5) * 4

    return {
      left: `${50 + Math.cos(angle) * ring}%`,
      top: `${50 + Math.sin(angle * 1.15) * ring * 0.72}%`,
      size: 1 + (index % 3),
      driftX: Math.cos(angle * 1.7) * driftScale,
      driftY: Math.sin(angle * 1.45) * driftScale * 0.75,
      duration: 5.2 + (index % 4) * 0.8,
      delay: index * 0.12,
      opacity: 0.12 + (index % 4) * 0.06,
    }
  })
}

function buildDissolveParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const column = index % 10
    const row = Math.floor(index / 10)
    const left = 31 + column * 3.8 + ((index % 3) - 1) * 0.35
    const top = 39 + row * 4.4 + ((index % 4) - 1.5) * 0.25
    const direction = index % 2 === 0 ? -1 : 1

    return {
      left: `${left}%`,
      top: `${top}%`,
      size: 1 + (index % 3),
      driftX: direction * (18 + (index % 5) * 11),
      driftY: -16 + (index % 6) * 7,
      duration: 1.1 + (index % 4) * 0.12,
      delay: (index % 10) * 0.04 + row * 0.05,
      opacity: 0.85,
    }
  })
}

function AnimatedWord({
  text,
  phase,
  className,
  staggerDelay,
  stagger,
}: {
  text: string
  phase: 'intro' | 'hold' | 'outro'
  className: string
  staggerDelay: number
  stagger: number
}) {
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      animate={phase === 'outro' ? 'outro' : 'visible'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: staggerDelay,
          },
        },
        outro: {
          transition: {
            staggerChildren: stagger * 0.7,
            staggerDirection: -1,
          },
        },
      }}
    >
      {text.split('').map((character, index) => (
        <motion.span
          key={`${text}-${index}`}
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
              y: 34,
              scale: 1.06,
              filter: 'blur(14px)',
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0.72,
                ease: [0.16, 1, 0.3, 1],
              },
            },
            outro: {
              opacity: 0,
              y: -18,
              scale: 0.88,
              filter: 'blur(16px)',
              transition: {
                duration: 0.52,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {character}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const reducedMotion = useReducedMotion() ?? false
  const [phase, setPhase] = useState<'intro' | 'hold' | 'outro'>('intro')

  const ambientParticles = useMemo(
    () => buildAmbientParticles(reducedMotion ? 8 : 14),
    [reducedMotion],
  )
  const dissolveParticles = useMemo(
    () => buildDissolveParticles(reducedMotion ? 16 : 30),
    [reducedMotion],
  )

  useEffect(() => {
    const timings = reducedMotion
      ? { intro: 220, hold: 520, outro: 420, total: 1160 }
      : { intro: 640, hold: 1820, outro: 1420, total: 4880 }

    const holdTimer = window.setTimeout(() => setPhase('hold'), timings.intro)
    const outroTimer = window.setTimeout(() => setPhase('outro'), timings.intro + timings.hold)
    const completeTimer = window.setTimeout(onComplete, timings.total)

    return () => {
      window.clearTimeout(holdTimer)
      window.clearTimeout(outroTimer)
      window.clearTimeout(completeTimer)
    }
  }, [onComplete, reducedMotion])

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)' }}
      transition={{ duration: reducedMotion ? 0.35 : 0.9, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_55%)] opacity-90" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_24%)] blur-3xl"
        animate={{ scale: [0.82, 1.02, 0.96], opacity: [0.18, 0.58, 0.24] }}
        transition={{ duration: reducedMotion ? 1.2 : 6.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-[120px]"
        animate={{ scale: [0.72, 1, 0.88], opacity: [0.12, 0.45, 0.18] }}
        transition={{ duration: reducedMotion ? 1.1 : 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0">
        {ambientParticles.map((particle, index) => (
          <motion.span
            key={`ambient-${index}`}
            className="absolute rounded-full bg-white will-change-transform"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: '0 0 18px rgba(255, 255, 255, 0.35)',
              opacity: particle.opacity,
            }}
            animate={
              phase === 'outro'
                ? {
                    opacity: [particle.opacity, 0.82, 0],
                    x: particle.driftX * 2.2,
                    y: particle.driftY * 2.2,
                    scale: [1, 1.6, 0.08],
                  }
                : {
                    opacity: [particle.opacity * 0.45, particle.opacity, particle.opacity * 0.55],
                    x: [0, particle.driftX, 0],
                    y: [0, particle.driftY, 0],
                    scale: [0.85, 1.15, 0.95],
                  }
            }
            transition={{
              duration: phase === 'outro' ? 1.15 : particle.duration,
              delay: particle.delay,
              ease: [0.16, 1, 0.3, 1],
              repeat: phase === 'outro' ? 0 : Infinity,
              repeatType: 'mirror',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {dissolveParticles.map((particle, index) => (
          <motion.span
            key={`dissolve-${index}`}
            className="absolute rounded-full bg-white/90 will-change-transform"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: '0 0 22px rgba(255, 255, 255, 0.65)',
              opacity: 0,
            }}
            animate={
              phase === 'outro'
                ? {
                    opacity: [0, 1, 0],
                    x: [0, particle.driftX],
                    y: [0, particle.driftY],
                    scale: [0.45, 1.35, 0.05],
                    filter: ['blur(0px)', 'blur(0px)', 'blur(2px)'],
                  }
                : { opacity: 0, x: 0, y: 0, scale: 0.45 }
            }
            transition={{
              duration: particle.duration,
              delay: phase === 'outro' ? particle.delay : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm"
        animate={phase === 'outro' ? { opacity: [0.28, 0.85, 0], scaleX: [0.82, 1, 1.06] } : { opacity: [0.08, 0.45, 0.15], x: [-28, 28, -10] }}
        transition={{ duration: reducedMotion ? 0.9 : 3.8, ease: [0.16, 1, 0.3, 1], repeat: phase === 'outro' ? 0 : Infinity, repeatType: 'mirror' }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[140%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/16 to-transparent opacity-40 blur-[1px]"
        animate={{ opacity: [0.05, 0.22, 0.08], scaleY: [0.92, 1, 1.04], x: [-18, 18, -8] }}
        transition={{ duration: reducedMotion ? 1.1 : 6.4, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-6 py-16 text-center sm:px-10">
        <div className="relative flex max-w-5xl flex-col items-center gap-6">
          <motion.div
            className="absolute inset-[-8rem] rounded-full bg-white/[0.04] blur-[120px]"
            animate={{ scale: [0.76, 1, 0.88], opacity: [0.12, 0.46, 0.18] }}
            transition={{ duration: reducedMotion ? 1 : 6.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:px-10 sm:py-10"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={phase === 'outro' ? { opacity: 0, y: -12, scale: 0.985 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.4 : 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.08)_24%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.08)_76%,transparent_100%)] opacity-50 mix-blend-screen" />
            <motion.div
              className="pointer-events-none absolute inset-x-[-25%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent"
              animate={phase === 'outro' ? { x: ['-8%', '8%'], opacity: [0.65, 0] } : { x: ['-12%', '12%', '-6%'], opacity: [0.12, 0.7, 0.18] }}
              transition={{ duration: reducedMotion ? 0.85 : 3.1, ease: 'easeInOut', repeat: phase === 'outro' ? 0 : Infinity, repeatType: 'mirror' }}
            />

            <div className="relative flex flex-col items-center gap-4 sm:gap-5">
              <AnimatedWord
                text={firstName}
                phase={phase}
                className="flex items-center justify-center text-[clamp(3rem,9vw,7.5rem)] font-semibold tracking-[0.32em] text-white"
                staggerDelay={0.28}
                stagger={0.08}
              />

              <AnimatedWord
                text={lastName}
                phase={phase}
                className="flex items-center justify-center text-[clamp(1.25rem,3vw,2.75rem)] font-medium tracking-[0.44em] text-white/85 sm:tracking-[0.48em]"
                staggerDelay={1.05}
                stagger={0.03}
              />
            </div>
          </motion.div>

          <motion.p
            className="max-w-xl text-xs uppercase tracking-[0.45em] text-white/35 sm:text-sm"
            animate={phase === 'outro' ? { opacity: 0, y: 8 } : { opacity: [0.15, 0.8, 0.28], y: [2, 0, -2] }}
            transition={{ duration: reducedMotion ? 0.6 : 2.6, ease: 'easeInOut', repeat: phase === 'outro' ? 0 : Infinity, repeatType: 'mirror' }}
          >
            Cinematic portfolio intro
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}