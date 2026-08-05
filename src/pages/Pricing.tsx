import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { tiers } from '../data/pricing'

function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Simple, transparent pricing</h1>
          <div className="w-12 h-1 bg-teal-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-400">Choose the plan that fits your team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 100}>
              <div
                className={`rounded-xl p-8 border ${
                  tier.highlighted
                    ? 'bg-teal-500/10 border-teal-500 md:scale-105'
                    : 'bg-blue-950/40 border-slate-800'
                }`}
              >
                {tier.highlighted && (
                  <span className="inline-block bg-teal-500 text-slate-950 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check size={16} className="text-teal-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/signup?plan=${tier.name}`}
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    tier.highlighted
                      ? 'bg-teal-500 hover:bg-teal-400 text-slate-950'
                      : 'border border-slate-600 hover:border-slate-400 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing