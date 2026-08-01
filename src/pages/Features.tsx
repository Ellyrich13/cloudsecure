import FadeIn from '../components/FadeIn'

function Features() {
  const features = [
    {
      icon: '🛡️',
      title: 'Real-Time Threat Detection',
      description: 'AI-powered monitoring identifies suspicious activity across your cloud infrastructure the moment it happens.',
    },
    {
      icon: '🔐',
      title: 'Identity & Access Management',
      description: 'Granular role-based permissions and multi-factor authentication keep the wrong people out.',
    },
    {
      icon: '📊',
      title: 'Compliance Monitoring',
      description: 'Automated checks against SOC 2, ISO 27001, and GDPR requirements, with audit-ready reports.',
    },
    {
      icon: '⚡',
      title: 'Automated Incident Response',
      description: 'Pre-configured playbooks isolate and remediate threats automatically, before they spread.',
    },
    {
      icon: '🌐',
      title: 'Multi-Cloud Support',
      description: 'One dashboard across AWS, Azure, and Google Cloud — no more switching between consoles.',
    },
    {
      icon: '📈',
      title: 'Advanced Analytics',
      description: 'Visualize security posture over time and track key risk indicators at a glance.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Everything you need to stay secure</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            CloudSecure combines detection, response, and compliance in a single platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 100}>
              <div className="bg-blue-950/40 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features