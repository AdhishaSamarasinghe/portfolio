import { Container } from '../components/Container'
import { navItems, profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="grid gap-8 sm:grid-cols-2 sm:items-start">
        <div>
          <p className="text-base font-semibold text-white">{profile.name}</p>
          <p className="mt-2 text-base text-slate-200/60">© {new Date().getFullYear()} • Built with React + Tailwind.</p>
        </div>

        <div className="grid gap-4 sm:justify-items-end">
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
            {navItems.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className="text-base font-semibold text-slate-100/70 hover:text-white"
              >
                {i.label}
              </a>
            ))}
            <a href="#top" className="text-base font-semibold text-slate-100/70 hover:text-white">
              Top
            </a>
          </nav>

          <div className="flex flex-wrap gap-4 sm:justify-end">
            {profile.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-base font-semibold text-slate-100/70 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
