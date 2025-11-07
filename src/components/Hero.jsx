import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-[#0b0b0f]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/60 via-transparent to-[#0b0b0f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.12),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6">
        {/* Top nav */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 shadow-lg">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">FlareSaaS</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-white/80 transition hover:text-white">Pricing</a>
            <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a
              href="#pricing"
              className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-400 hover:to-amber-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Now in Public Beta
          </span>
          <h1 className="mt-3 bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Launch faster with a modern, orange-tinted SaaS toolkit
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            Build, launch, and scale with an all‑in‑one platform designed for speed. Beautiful defaults, powerful analytics, and effortless collaboration.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-400 hover:to-amber-300"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              <PlayCircle className="h-4 w-4" />
              See Features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
            {[
              { label: 'Uptime', value: '99.99%' },
              { label: 'Migrations', value: '1-click' },
              { label: 'Integrations', value: '50+' },
              { label: 'Latency', value: '<50ms' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">
                <div className="text-xs text-white/60">{s.label}</div>
                <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
