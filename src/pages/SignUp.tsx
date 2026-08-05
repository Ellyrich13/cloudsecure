import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { validateSignUpForm } from '../utils/validation'

interface FormErrors {
  name?: string
  email?: string
  password?: string
}

function SignUp() {
  const [searchParams] = useSearchParams()
  const plan = searchParams.get('plan') || 'Starter'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const next = validateSignUpForm(name, email, password)
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Mock account creation — no real backend, this is a portfolio demo.
    await new Promise((resolve) => setTimeout(resolve, 700))
    setSubmitting(false)
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex items-center justify-center px-6">
        <div className="max-w-sm text-center">
          <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="text-teal-400" size={28} />
          </div>
          <h1 className="text-2xl font-bold mb-2">You're all set, {name.split(' ')[0]}</h1>
          <p className="text-slate-400 mb-6">
            Your {plan} plan account has been created. This is a demo flow, so there's nothing more to
            do — but in a real app you'd land in your dashboard right about now.
          </p>
          <Link
            to="/"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-2.5 rounded-lg transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-sm bg-blue-950/40 border border-slate-800 rounded-xl p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-3">
            <ShieldCheck className="text-teal-400" size={22} />
          </div>
          <h1 className="text-xl font-bold">Create your account</h1>
          <p className="text-slate-400 text-sm mt-1">Signing up for the {plan} plan</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              aria-label="Full name"
              className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 text-sm outline-none focus:border-teal-500 transition ${
                errors.name ? 'border-red-500' : 'border-slate-700'
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
              className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 text-sm outline-none focus:border-teal-500 transition ${
                errors.email ? 'border-red-500' : 'border-slate-700'
              }`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
              className={`w-full px-4 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 text-sm outline-none focus:border-teal-500 transition ${
                errors.password ? 'border-red-500' : 'border-slate-700'
              }`}
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold py-2.5 rounded-lg text-sm transition disabled:opacity-50"
          >
            {submitting ? 'Creating account…' : `Start ${plan} Plan`}
          </button>
        </form>

        <p className="text-slate-500 text-xs text-center mt-6">
          Demo signup — no real account is created.
        </p>
      </div>
    </div>
  )
}

export default SignUp