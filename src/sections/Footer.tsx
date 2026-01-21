import { Container } from '../components/Container'
import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-200/60">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {profile.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-sm font-semibold text-slate-100/70 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
