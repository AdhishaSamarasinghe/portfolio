import { Container } from './Container'
import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-400">
          © {year} {profile.name}. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            className="text-slate-300 hover:text-white"
            href={profile.github}
            target={profile.github?.startsWith('http') ? '_blank' : undefined}
            rel={profile.github?.startsWith('http') ? 'noreferrer' : undefined}
          >
            GitHub
          </a>
          <a
            className="text-slate-300 hover:text-white"
            href={profile.linkedin}
            target={profile.linkedin?.startsWith('http') ? '_blank' : undefined}
            rel={profile.linkedin?.startsWith('http') ? 'noreferrer' : undefined}
          >
            LinkedIn
          </a>
          <a className="text-slate-300 hover:text-white" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </Container>
    </footer>
  )
}
