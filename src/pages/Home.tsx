import { Link } from 'react-router-dom'
import Slideshow from '../components/Slideshow'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-teal-500/10 text-teal-400 text-sm font-medium px-4 py-1 rounded-full mb-6 border border-teal-500/20">
            Enterprise-grade cloud security
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Secure your cloud.<br />
            <span className="text-teal-400">Sleep at night.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            CloudSecure gives your team real-time threat detection, compliance monitoring,
            and automated incident response — all from one dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3 rounded-lg transition"
            >
              Start Free Trial
            </Link>
            <Link
              to="/features"
              className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3 rounded-lg transition"
            >
              See Features
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-wide">Trusted by security teams at</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-400 font-semibold text-lg">
            <span>Nimbus Corp</span>
            <span>Vertex Systems</span>
            <span>Northwind Digital</span>
            <span>Apex Cloud</span>
            <span>Meridian Tech</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-teal-400 mb-2">99.9%</p>
            <p className="text-slate-400 text-sm">Uptime SLA</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-400 mb-2">24/7</p>
            <p className="text-slate-400 text-sm">Threat Monitoring</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-400 mb-2">SOC 2</p>
            <p className="text-slate-400 text-sm">Type II Certified</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: '01', title: 'Connect your cloud', text: 'Link AWS, Azure, or Google Cloud in minutes with a guided setup.' },
              { step: '02', title: 'We monitor continuously', text: 'CloudSecure watches for threats and compliance drift around the clock.' },
              { step: '03', title: 'Act with confidence', text: 'Get alerted, or let automated playbooks respond before damage is done.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-teal-400 text-3xl font-bold mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Built for the modern cloud</h2>
          <Slideshow />
        </div>
      </section>
    </div>
  )
}

export default Home