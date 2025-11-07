import React from 'react';
import { ShieldCheck, LightningBolt, BarChart3, Sparkles } from 'lucide-react';

const features = [
  {
    icon: LightningBolt,
    title: 'Blazing Performance',
    desc: 'Optimized architecture with edge caching and auto-scaling for instant responses.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    desc: 'Understand user behavior with funnels, cohorts, and real-time dashboards.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    desc: 'SOC2-ready controls, SSO/SAML, and field-level encryption by default.'
  },
  {
    icon: Sparkles,
    title: 'No-Code Automations',
    desc: 'Trigger workflows across your stack with prebuilt, composable blocks.'
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#0b0b0f] py-20">
      <div className="absolute inset-x-0 top-0 -z-0 h-24 bg-gradient-to-b from-amber-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to ship, in orange
          </h2>
          <p className="mt-3 text-white/70">
            Thoughtful defaults and battle‑tested primitives so you can focus on your product.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:translate-y-[-2px] hover:border-amber-400/30"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 p-2 text-white shadow-lg shadow-orange-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
