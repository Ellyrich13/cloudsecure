import { Shield, Lock, BarChart3, Zap, Globe, TrendingUp } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { features } from '../data/features'

const icons = [Shield, Lock, BarChart3, Zap, Globe, TrendingUp]

function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Everything you need to stay secure</h1>
            <div className="w-12 h-1 bg-teal-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto">
            CloudSecure combines detection, response, and compliance in a single platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = icons[i % icons.length]
            return (
              <FadeIn key={f.title} delay={i * 100}>
                <div className="bg-blue-950/40 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition">
                  <Icon size={28} className="text-teal-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features