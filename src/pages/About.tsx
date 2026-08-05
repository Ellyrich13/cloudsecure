import FadeIn from '../components/FadeIn'
import { team } from '../data/team'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Our Mission</h1>
          <div className="w-12 h-1 bg-teal-400 rounded-full mx-auto mb-6" />
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            CloudSecure was founded on a simple belief: enterprise-grade security
            shouldn't require an enterprise-sized team. We build tools that let
            small and mid-sized companies defend their cloud infrastructure with
            the same confidence as the giants — without the complexity or cost.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-10">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 100}>
                <div className="bg-blue-950/40 border border-slate-800 rounded-xl p-6 text-center hover:border-teal-500/50 transition">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 mx-auto mb-4 flex items-center justify-center text-2xl font-semibold text-teal-400">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-teal-400 text-sm mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About