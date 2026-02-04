import { useMemo, useState } from 'react'

import { Button } from '../components/Button'
import { ButtonLink } from '../components/Button'
import { Section } from '../components/Section'
import { contact, ctas, profile } from '../data/portfolio'

function buildMailto(params: { name: string; email: string; message: string }) {
  const subject = `Portfolio inquiry — ${params.name}`
  const body = `Hi,\n\n${params.message}\n\n— ${params.name}\n${params.email}`
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const canSubmit = useMemo(() => {
    return name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0
  }, [name, email, message])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      // Fallback for older browsers / non-secure contexts
      const input = document.createElement('input')
      input.value = contact.email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let’s talk" className="border-t border-white/10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-5">
          <div className="card p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold">Email</h3>
                <p className="mt-3 text-base text-slate-200/70">
                  Fastest way to reach me. I usually respond within 24–48 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-xl border border-white/[0.12] bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-100/[0.8] transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                aria-label="Copy email address"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
                {contact.email}
              </ButtonLink>
              <ButtonLink href="#projects" variant="ghost">
                View projects
              </ButtonLink>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-base font-semibold">What to include</p>
              <ul className="mt-3 space-y-2 text-base text-slate-200/70">
                <li>Role + timeline</li>
                <li>Location / remote details</li>
                <li>Tech stack (if relevant)</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card h-full p-7">
              <h3 className="text-base font-semibold">LinkedIn</h3>
              <p className="mt-2 text-base text-slate-200/70">Happy to connect and chat.</p>
              <div className="mt-4">
                <ButtonLink
                  href={profile.social.find((s) => s.label === 'LinkedIn')?.href ?? '#'}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open LinkedIn
                </ButtonLink>
              </div>
            </div>
            <div className="card h-full p-7">
              <h3 className="text-base font-semibold">Resume</h3>
              <p className="mt-2 text-base text-slate-200/70">One-page overview and links.</p>
              <div className="mt-4">
                <ButtonLink href={ctas.resumeHref} variant="secondary">
                  Open resume
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <form
          className="card p-7"
          onSubmit={(e) => {
            e.preventDefault()
            if (!canSubmit) return
            window.location.href = buildMailto({ name, email, message })
          }}
        >
          <h3 className="text-base font-semibold">Quick message</h3>
          <p className="mt-2 text-base text-slate-200/70">Sends via your email client (mailto).</p>

          <div className="mt-6 grid gap-5">
            <label className="grid gap-2">
              <span className="text-base font-semibold text-slate-100/90">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-base text-slate-100/90 outline-none placeholder:text-slate-200/40 focus:border-teal-300/60 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-300/40"
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-base font-semibold text-slate-100/90">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-base text-slate-100/90 outline-none placeholder:text-slate-200/40 focus:border-teal-300/60 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-300/40"
                placeholder="jane@email.com"
                autoComplete="email"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-base font-semibold text-slate-100/90">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-36 resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-base text-slate-100/90 outline-none placeholder:text-slate-200/40 focus:border-teal-300/60 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-300/40"
                placeholder="Hi! We’re looking for a summer intern..."
              />
            </label>

            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-slate-200/60">Tip: include role, timeline, and stack.</p>
              <Button type="submit" disabled={!canSubmit} className="disabled:opacity-60">
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  )
}
