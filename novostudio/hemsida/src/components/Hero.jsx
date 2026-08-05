import React from 'react';
import ShowcasePreview from './ShowcasePreview';

export default function Hero() {
  return (
    <section id="erbjudande" className="relative pt-40 pb-32 px-8 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="font-cormorant text-[64px] md:text-[80px] max-w-4xl mx-auto mb-8 italic leading-[1.1] text-ink font-light">
          Din nya hemsida – gratis prototyp innan du bestämmer dig.
        </h1>

        <p className="font-body-tight max-w-2xl mx-auto mb-10 text-lg md:text-xl text-ink/80 leading-relaxed font-light">
          Blixtsnabb laddtid, inkluderat SSL-certifikat, teknisk SEO och fria ändringar för 500 kr/månad.
        </p>

        <button className="bg-deep-moss text-warm-cream text-lg px-10 py-5 mb-8 uppercase tracking-widest font-medium rounded-xl shadow-[0_2px_0_0_#1a241e] hover:-translate-y-0.5 transition-transform">
          Se din färdiga prototyp gratis
        </button>

        <p className="font-body-tight text-emerald-green flex items-center justify-center gap-2 text-sm uppercase tracking-widest font-medium bg-white px-4 py-2 rounded-2xl shadow-sm border border-ink/5">
          <span className="material-symbols-outlined text-[18px]">check</span>
          0 kr i startavgift • 3 månaders risktrygg provtid
        </p>

        <ShowcasePreview />
      </div>
    </section>
  );
}
