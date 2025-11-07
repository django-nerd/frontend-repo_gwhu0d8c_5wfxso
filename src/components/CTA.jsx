import React from 'react';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#0b0b0f] py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-amber-400/30 bg-gradient-to-b from-amber-500/10 to-white/[0.03] p-8 text-center shadow-[0_0_40px_-10px_rgba(251,146,60,0.4)] md:p-12">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
          Ready to turn your idea into a product?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Start free, upgrade when you grow. No credit card required. Cancel anytime.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-400 hover:to-amber-300"
          >
            Start Building Free
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
