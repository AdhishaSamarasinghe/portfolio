import { useMemo, useState } from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { profile } from '../data/profile'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoHref = useMemo(() => {
    const subject = `Internship inquiry — ${name || 'Your Name'}`
    const body = `Hi ${profile.name},%0D%0A%0D%0A${message || ''}%0D%0A%0D%0AFrom,%0D%0A${name || ''}%0D%0A${email || ''}`

    return `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent(subject)}&body=${body}`
  }, [name, email, message])

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s connect"
      description="If you’re hiring interns, I’d love to chat. Send a quick note and I’ll reply soon."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailtoHref
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-slate-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Hi! We’d like to invite you to interview..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="button" type="submit" size="lg">
                Send email
              </Button>
              <Button
                href={`mailto:${profile.email}`}
                variant="secondary"
                size="lg"
              >
                Copy email
              </Button>
            </div>

            <p className="text-xs text-slate-400">
              This form opens your email client (no backend needed).
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">Links</div>
          <p className="mt-2 text-sm text-slate-300">
            Prefer socials? Here are the fastest ways to reach me.
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <a
              className="block rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-200 hover:bg-white/10 hover:text-white"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
            <a
              className="block rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-200 hover:bg-white/10 hover:text-white"
              href={profile.github}
              target={profile.github?.startsWith('http') ? '_blank' : undefined}
              rel={profile.github?.startsWith('http') ? 'noreferrer' : undefined}
            >
              GitHub
            </a>
            <a
              className="block rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-200 hover:bg-white/10 hover:text-white"
              href={profile.linkedin}
              target={profile.linkedin?.startsWith('http') ? '_blank' : undefined}
              rel={profile.linkedin?.startsWith('http') ? 'noreferrer' : undefined}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
