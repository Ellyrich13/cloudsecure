import { useState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { validateContactForm } from '../utils/validation'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function validate(): boolean {
    const next = validateContactForm(name, email, message)
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const response = await fetch('https://formspree.io/f/xgogbgjb', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white pt-32 pb-24 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Get in touch</h1>
          <div className="w-12 h-1 bg-teal-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-400">Questions about CloudSecure? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              aria-label="Your name"
              className={`w-full px-4 py-3 rounded-lg bg-blue-950/40 border text-white placeholder-slate-500 focus:border-teal-500 outline-none transition ${
                errors.name ? 'border-red-500' : 'border-slate-800'
              }`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              aria-label="Work email"
              className={`w-full px-4 py-3 rounded-lg bg-blue-950/40 border text-white placeholder-slate-500 focus:border-teal-500 outline-none transition ${
                errors.email ? 'border-red-500' : 'border-slate-800'
              }`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              aria-label="Your message"
              rows={5}
              className={`w-full px-4 py-3 rounded-lg bg-blue-950/40 border text-white placeholder-slate-500 focus:border-teal-500 outline-none transition ${
                errors.message ? 'border-red-500' : 'border-slate-800'
              }`}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="flex items-center justify-center gap-2 text-teal-400 text-center">
              <CheckCircle2 size={16} /> Message sent — we'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center justify-center gap-2 text-red-400 text-center">
              <AlertCircle size={16} /> Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact