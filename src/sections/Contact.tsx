import { useMemo, useState } from 'react'

import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { contact } from '../data/portfolio'

function buildMailto(params: { name: string; email: string; message: string }) {
  const subject = `Portfolio inquiry — ${params.name}`
  const body = `Hi ${contact.email},\n\n${params.message}\n\n— ${params.name}\n${params.email}`
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const canSubmit = useMemo(() => {
    return name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0
  }, [name, email, message])

  return (
    <Section id="contact" title="Contact" subtitle="Let’s talk" className="border-t border-white/10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="surface p-6">
          <h3 className="text-sm font-semibold">Email</h3>
          <p className="mt-2 text-sm text-slate-200/70">
            The fastest way to reach me is email. I usually respond within 24–48 hours.
          </p>
          <a
            className="mt-4 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold">What to include</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-200/70">
              <li>Role + timeline</li>
              <li>Location / remote details</li>
              <li>Tech stack (if relevant)</li>
            </ul>
          </div>
        </div>

        <form
          className="surface p-6"
          onSubmit={(e) => {
            e.preventDefault()
            if (!canSubmit) return
            window.location.href = buildMailto({ name, email, message })
          }}
        >
          <h3 className="text-sm font-semibold">Quick message</h3>
          <div className="mt-4 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-100/90">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-200/40 focus:ring-2 focus:ring-indigo-400/60"
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-100/90">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-200/40 focus:ring-2 focus:ring-indigo-400/60"
                placeholder="jane@email.com"
                autoComplete="email"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-100/90">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32 resize-y rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none placeholder:text-slate-200/40 focus:ring-2 focus:ring-indigo-400/60"
                placeholder="Hi! We’re looking for a summer intern..."
              />
            </label>

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-slate-200/60">Sends via your email client (mailto).</p>
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
