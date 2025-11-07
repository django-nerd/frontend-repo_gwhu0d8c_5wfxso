import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'Perfect to explore the platform',
    features: ['1 project', 'Community support', 'Basic analytics'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    desc: 'Scaling teams and startups',
    features: ['Unlimited projects', 'Team access', 'Automation workflows', 'Advanced analytics'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact',
    desc: 'Security, scale, and support',
    features: ['SSO/SAML', 'Custom SLAs', 'Dedicated manager'],
    cta: 'Talk to Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-[#0b0b0f] py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that grows with you. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                tier.highlighted
                  ? 'border-amber-400/40 bg-gradient-to-b from-amber-500/10 to-white/[0.03] shadow-[0_0_40px_-10px_rgba(251,146,60,0.4)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <div className="text-3xl font-bold text-white">
                  {tier.price}
                  {tier.period && <span className="text-base font-medium text-white/70">{tier.period}</span>}
                </div>
              </div>
              <p className="text-sm text-white/70">{tier.desc}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20">
                      <Check className="h-3 w-3 text-amber-400" />
                    </span>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-amber-300'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
