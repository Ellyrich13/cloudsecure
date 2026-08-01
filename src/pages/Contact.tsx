import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xgogbgjb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('sent')
        form.reset()
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
          <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
          <p className="text-slate-400">Questions about CloudSecure? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-slate-800 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            required
            className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-slate-800 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition"
          />
          <textarea
            name="message"
            placeholder="How can we help?"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-slate-800 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && (
            <p className="text-teal-400 text-center">Message sent — we'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact