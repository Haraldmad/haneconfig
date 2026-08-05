import React from 'react';

export default function ValueCards() {
  return (
    <section id="fordelar" className="py-32 px-8 max-w-7xl mx-auto bg-warm-cream relative z-0">
      <h2 className="font-soft-serif text-[48px] md:text-[56px] mb-20 text-center italic text-ink font-light">Designad för prestation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="rounded-xl p-10 bg-white shadow-lg border border-[#D4CFC6] flex flex-col justify-center min-h-[300px] hover:-translate-y-2 transition-transform">
          <div className="font-data-mono text-[44px] text-deep-moss leading-none mb-6">
            &lt;0.3s
          </div>
          <div>
            <h3 className="font-soft-serif text-2xl mb-3 text-ink">Blixtsnabb prestanda</h3>
            <p className="font-body-tight text-ink/70 text-sm leading-relaxed">Optimerad kod och blixtsnabba servrar garanterar omedelbar laddningstid för dina besökare.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl p-10 bg-deep-moss text-warm-cream flex flex-col justify-center min-h-[300px] shadow-xl hover:-translate-y-2 transition-transform lg:col-span-2">
          <span className="material-symbols-outlined text-[48px] text-warm-cream mb-6 opacity-80">sms</span>
          <div>
            <h3 className="font-soft-serif text-2xl mb-3">Skicka ett SMS så ändrar vi...</h3>
            <p className="font-body-tight text-warm-cream/80 text-sm leading-relaxed">Ingen CMS-huvudvärk. Behöver du uppdatera text eller bild? Meddela oss, vi löser det samma dag.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl p-10 bg-white shadow-lg border border-[#D4CFC6] flex flex-col justify-center min-h-[300px] hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-emerald-green/10 text-emerald-green font-data-mono text-sm w-fit mb-6">
            <span className="material-symbols-outlined text-[18px]">lock</span> SSL-Certifikat
          </div>
          <div>
            <h3 className="font-soft-serif text-2xl mb-3 text-ink">Alltid säker anslutning</h3>
            <p className="font-body-tight text-ink/70 text-sm leading-relaxed">Banknivå-kryptering ingår som standard, vilket bygger förtroende och förbättrar din ranking på Google.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl p-10 bg-white shadow-lg border border-[#D4CFC6] flex flex-col justify-center min-h-[300px] hover:-translate-y-2 transition-transform">
          <span className="material-symbols-outlined text-[48px] text-deep-moss mb-6">troubleshoot</span>
          <div>
            <h3 className="font-soft-serif text-2xl mb-3 text-ink">Teknisk SEO</h3>
            <p className="font-body-tight text-ink/70 text-sm leading-relaxed">Byggd med ren, semantisk kod och schema-markup för att sökmotorer ska älska din närvaro.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-xl p-10 bg-white flex flex-col justify-center min-h-[300px] border border-[#D4CFC6] shadow-lg hover:-translate-y-2 transition-transform">
          <div className="flex flex-col mb-6">
            <span className="font-data-mono text-sm text-ink/50 line-through mb-1">30 000 kr byrå</span>
            <span className="font-data-mono text-3xl text-deep-moss">0 kr startavgift</span>
          </div>
          <div>
            <h3 className="font-soft-serif text-2xl mb-3 text-ink">Ingen dold kostnad</h3>
            <p className="font-body-tight text-ink/70 text-sm leading-relaxed">Slipp dyra byråarvoden. Vi bygger sidan gratis, du betalar endast en fast låg månadskostnad när du är nöjd.</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="rounded-xl p-10 bg-white shadow-lg border border-[#D4CFC6] flex flex-col justify-center min-h-[300px] hover:-translate-y-2 transition-transform">
          <div className="flex flex-col mb-6">
            <span className="font-data-mono text-sm text-ink/50 line-through mb-1">1 000 kr/mån</span>
            <span className="font-soft-serif text-[40px] text-deep-moss leading-none">500 kr</span>
          </div>
          <div>
            <h3 className="font-soft-serif text-2xl mb-3 text-ink">3 månaders provtid</h3>
            <p className="font-body-tight text-ink/70 text-sm leading-relaxed">Halva priset under dina första tre månader. Helt riskfritt, avsluta när du vill.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
