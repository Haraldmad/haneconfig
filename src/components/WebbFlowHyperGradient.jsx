import React, { useState } from 'react';

export default function WebbFlowHyperGradient() {
  const [activeTab, setActiveTab] = useState('tjanster');
  const [inquirySent, setInquirySent] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ee] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#f97316] selection:text-white relative overflow-hidden">
      {/* Hyper-Gradient Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#581c87] via-[#7c3aed] to-[#f97316] opacity-30 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-gradient-to-bl from-[#06b6d4] via-[#3b82f6] to-[#ec4899] opacity-25 blur-[160px] rounded-full" />
        <div className="absolute -bottom-40 left-1/4 w-[800px] h-[800px] bg-gradient-to-t from-[#f97316] via-[#d946ef] to-[#3b82f6] opacity-20 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
        {/* Navigation Header */}
        <header className="flex items-center justify-between py-6 border-b border-[#424754]/40 backdrop-blur-md bg-[#0f131c]/60 sticky top-4 rounded-2xl px-6 z-50 mb-16 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f97316] via-[#d946ef] to-[#3b82f6] p-0.5 shadow-lg shadow-[#f97316]/20">
              <div className="w-full h-full bg-[#0f131c] rounded-[10px] flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#3b82f6]">
                WF
              </div>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              Webb<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#d946ef] to-[#3b82f6]">Flow</span>
            </span>
            <span className="ml-2 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30">
              Hyper-Gradient
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#tjanster" className="hover:text-[#f97316] transition-colors">Tjänster</a>
            <a href="#portfolio" className="hover:text-[#3b82f6] transition-colors">Portfolio</a>
            <a href="#priser" className="hover:text-[#d946ef] transition-colors">Priser</a>
            <a href="#om-oss" className="hover:text-[#06b6d4] transition-colors">Om oss</a>
          </nav>

          <a
            href="#kontakt"
            className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#f97316] via-[#d946ef] to-[#3b82f6] text-white shadow-lg shadow-[#f97316]/25 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Starta Projekt
          </a>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20 lg:py-28 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#adc6ff] text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping" />
            Sveriges Ledande Hyper-Gradient Digitalbyrå
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Vi Bygger Digitala Upplevelser Med{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#d946ef] to-[#06b6d4]">
              Flytande Hyper-Gradienter
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-[#c2c6d6] mb-12 font-normal leading-relaxed">
            Skräddarsydda webbplatser, e-handel och webbapplikationer byggda med modernaste färgteknik, 3D-estetik och blixtsnabb prestanda för svenska varumärken.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#kontakt"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-[#f97316] via-[#d946ef] to-[#3b82f6] text-white shadow-xl shadow-[#f97316]/30 hover:scale-105 transition-all duration-300"
            >
              Boka Kostnadsfritt Rådgivningsmöte
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-[#1c2028]/80 hover:bg-[#262a33] text-white border border-[#424754] backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              Utforska Våra Projekt →
            </a>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-left">
            {[
              { num: '99.8%', label: 'Kundenöjdhet', color: 'from-[#f97316] to-[#d946ef]' },
              { num: '+250%', label: 'Genomsnittlig Konverteringsökning', color: 'from-[#d946ef] to-[#3b82f6]' },
              { num: '45+', label: 'Levererade Webb-Projekt 2026', color: 'from-[#3b82f6] to-[#06b6d4]' },
              { num: '100%', label: 'Svensk Support & Utveckling', color: 'from-[#06b6d4] to-[#f97316]' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1c2028]/50 border border-[#424754]/50 backdrop-blur-md relative overflow-hidden group hover:border-[#f97316]/50 transition-all duration-300"
              >
                <div className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                  {stat.num}
                </div>
                <div className="text-xs font-semibold text-[#8c909f]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="tjanster" className="py-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">
              Våra Tjänster & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#06b6d4]">Expertis</span>
            </h2>
            <p className="text-[#c2c6d6] text-base lg:text-lg max-w-xl mx-auto">
              Bespoke digitala lösningar utformade för att dominera din nisch och imponera på besökaren vid första ögonkastet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Webbdesign & UX/UI',
                desc: 'Unika Hyper-Gradient gränssnitt skapade från grunden i Figma med fokus på emotionell design och sömlös användarupplevelse.',
                gradient: 'from-[#f97316] to-[#d946ef]',
                badge: 'Populärast'
              },
              {
                title: 'E-handel & Konvertering',
                desc: 'Högpresterande nätbutiker med blixtsnabb utcheckning, betallösningar för Klarna och Swish, samt konverteringsoptimering.',
                gradient: 'from-[#d946ef] to-[#3b82f6]',
                badge: 'E-handel'
              },
              {
                title: 'Webbapplikationer & SaaS',
                desc: 'Komplexa interaktiva webbsystem, kundportaler och SaaS-lösningar byggda med React, Tailwind CSS och Next.js.',
                gradient: 'from-[#3b82f6] to-[#06b6d4]',
                badge: 'Avancerat'
              }
            ].map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#1c2028]/60 border border-[#424754] backdrop-blur-xl relative group hover:scale-[1.02] transition-all duration-300"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${srv.gradient} mb-6`}>
                  {srv.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{srv.title}</h3>
                <p className="text-[#c2c6d6] text-sm leading-relaxed mb-6">{srv.desc}</p>
                <a href="#kontakt" className="text-xs font-bold text-[#4cd7f6] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Läs mer om tjänsten →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing / Packages */}
        <section id="priser" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">
              Transparanta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#3b82f6]">Prispaket</span>
            </h2>
            <p className="text-[#c2c6d6] text-base lg:text-lg">Inga dolda avgifter. Inkluderar fullständig Hyper-Gradient design och optimering.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Foundry',
                price: '24 900 kr',
                desc: 'För mindre företag som vill ha en professionell och modern webbnärvaro.',
                features: ['5 Anpassade undersidor', 'Hyper-Gradient Design', 'Mobilanpassad & Responsiv', 'SEO-Grundoptimering', '2 Veckors fri support']
              },
              {
                name: 'Professional Scale',
                price: '49 900 kr',
                featured: true,
                desc: 'För etablerade varumärken som kräver högsta visuela kvalitet och konvertering.',
                features: ['Upp till 12 undersidor', 'Fullständig Hyper-Gradient Profil', 'CMS Integration (WordPress/Headless)', 'Avancerade Animatoner', 'Sökoptimering & Analys', '4 Veckors Support & Utbildning']
              },
              {
                name: 'Enterprise Custom',
                price: 'Offert',
                desc: 'Skräddarsydda webbsystem, e-handel och skräddarsydd applikationsutveckling.',
                features: ['Obegränsade undersidor', 'E-handel / Klarna / Swish', 'Skräddarsydd SaaS Architecture', 'Blixtsnabb CDN hosting', 'Dedikerat utvecklarteam']
              }
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl backdrop-blur-xl relative flex flex-col justify-between ${
                  pkg.featured
                    ? 'bg-gradient-to-b from-[#1c2028] via-[#262a33] to-[#1c2028] border-2 border-[#f97316] shadow-2xl shadow-[#f97316]/20 scale-105'
                    : 'bg-[#1c2028]/60 border border-[#424754]'
                }`}
              >
                <div>
                  {pkg.featured && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase bg-gradient-to-r from-[#f97316] to-[#d946ef] text-white">
                      Mest Populär
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#3b82f6] mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-xs text-[#8c909f] mb-6">{pkg.desc}</p>
                  <ul className="space-[#424754] space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#dfe2ee] flex items-center gap-2">
                        <span className="text-[#4cd7f6] font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#kontakt"
                  className={`w-full py-3 rounded-xl text-xs font-bold text-center transition-all ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-[#f97316] via-[#d946ef] to-[#3b82f6] text-white shadow-lg shadow-[#f97316]/30 hover:scale-105'
                      : 'bg-[#262a33] hover:bg-[#31353e] text-white border border-[#424754]'
                  }`}
                >
                  Välj {pkg.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="kontakt" className="py-20">
          <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-[#1c2028]/80 border border-[#424754] backdrop-blur-2xl shadow-2xl relative">
            <h2 className="text-3xl font-extrabold text-white text-center mb-4">
              Starta Ditt <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#d946ef]">Projekt</span>
            </h2>
            <p className="text-[#8c909f] text-sm text-center mb-8">
              Fyll i formuläret nedan så återkommer vi med ett konkret förslag inom 24 timmar.
            </p>

            {inquirySent ? (
              <div className="p-6 rounded-2xl bg-[#4cd7f6]/10 border border-[#4cd7f6]/40 text-center">
                <div className="text-3xl mb-2">🎉</div>
                <h3 className="text-lg font-bold text-white mb-2">Tack för din förfrågan!</h3>
                <p className="text-xs text-[#c2c6d6]">Vi kontaktar dig inom kort med förslag och tidsplan.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-semibold text-[#dfe2ee] mb-2 uppercase tracking-wider">Namn / Företag</label>
                  <input
                    type="text"
                    required
                    placeholder="Elias Hahn / Företag AB"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f131c] border border-[#424754] text-white placeholder-[#8c909f] focus:outline-none focus:border-[#f97316] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#dfe2ee] mb-2 uppercase tracking-wider">E-postadress</label>
                  <input
                    type="email"
                    required
                    placeholder="namn@foretag.se"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f131c] border border-[#424754] text-white placeholder-[#8c909f] focus:outline-none focus:border-[#d946ef] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#dfe2ee] mb-2 uppercase tracking-wider">Projektbeskrivning</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Berätta om ditt projekt, önskade funktioner och tidsplan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0f131c] border border-[#424754] text-white placeholder-[#8c909f] focus:outline-none focus:border-[#3b82f6] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#f97316] via-[#d946ef] to-[#3b82f6] text-white shadow-xl shadow-[#f97316]/30 hover:scale-[1.02] transition-all duration-300"
                >
                  Skicka Förfrågan →
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 pb-8 border-t border-[#424754]/40 text-center text-xs text-[#8c909f]">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="font-extrabold text-white text-base">WebbFlow Agency</span>
            <span className="text-[#f97316] font-bold">•</span>
            <span>Hyper-Gradient Edition</span>
          </div>
          <p>© 2026 WebbFlow AB. Utvecklad med Google Stitch & Antigravity IDE.</p>
        </footer>
      </div>
    </div>
  );
}
