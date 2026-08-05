import React, { useState } from 'react';

const INITIAL_FORM = {
  companyName: '',
  cityIndustry: '',
  contact: '',
};

export default function PricingSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(INITIAL_FORM);
  };

  return (
    <section id="pris" className="py-32 bg-ink text-warm-cream relative">
      <div className="relative z-10 px-8 max-w-5xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[40px] border border-white/10 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-soft-serif text-[40px] mb-4 italic font-light text-white">Novo Studio Abonnemang</h2>
            <p className="font-body-tight text-warm-cream/70 mb-10 text-lg">Allt du behöver för en professionell närvaro online.</p>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-soft-serif text-[64px] leading-none text-white">500 kr</span>
              <span className="font-data-mono text-warm-cream/60">/ mån</span>
              <span className="font-data-mono text-sm text-warm-cream/40 line-through ml-2">1 000 kr</span>
            </div>
            <ul className="space-y-6 font-body-tight text-warm-cream/90">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-white/80 text-[24px]">check_circle</span>
                Snabb &amp; säker hosting inkluderad
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-white/80 text-[24px]">check_circle</span>
                Löpande teknisk SEO-optimering
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-white/80 text-[24px]">check_circle</span>
                Fria ändringar (SMS/Mail-support)
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 bg-white p-8 rounded-2xl shadow-2xl min-h-[356px]">
                <span className="material-symbols-outlined text-deep-moss text-[48px]">check_circle</span>
                <h3 className="font-soft-serif text-2xl text-ink">Tack för ditt intresse!</h3>
                <p className="font-body-tight text-ink/70 text-sm leading-relaxed max-w-xs">
                  Vi hör av oss inom kort med din kostnadsfria prototyp.
                </p>
                <button
                  className="font-body-tight text-sm text-deep-moss uppercase tracking-widest font-medium mt-2 hover:underline"
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                >
                  Skicka ett nytt förslag
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-2xl" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-body-tight text-xs uppercase tracking-widest text-ink/80 mb-2 font-medium" htmlFor="companyName">Företagsnamn</label>
                  <input
                    className="w-full px-5 py-4 rounded-xl border border-ink/20 text-ink focus:outline-none focus:ring-2 focus:ring-deep-moss bg-white transition-all font-body-tight"
                    id="companyName"
                    name="companyName"
                    placeholder="Ditt företag AB"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block font-body-tight text-xs uppercase tracking-widest text-ink/80 mb-2 font-medium" htmlFor="cityIndustry">Stad / Bransch</label>
                  <input
                    className="w-full px-5 py-4 rounded-xl border border-ink/20 text-ink focus:outline-none focus:ring-2 focus:ring-deep-moss bg-white transition-all font-body-tight"
                    id="cityIndustry"
                    name="cityIndustry"
                    placeholder="Stockholm / Snickare"
                    type="text"
                    value={formData.cityIndustry}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block font-body-tight text-xs uppercase tracking-widest text-ink/80 mb-2 font-medium" htmlFor="contact">Mail eller Telefon</label>
                  <input
                    className="w-full px-5 py-4 rounded-xl border border-ink/20 text-ink focus:outline-none focus:ring-2 focus:ring-deep-moss bg-white transition-all font-body-tight"
                    id="contact"
                    name="contact"
                    placeholder="hej@exempel.se"
                    type="text"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="bg-deep-moss text-warm-cream font-body-tight text-lg px-8 py-5 mt-4 w-full uppercase tracking-widest font-medium rounded-xl shadow-[0_2px_0_0_#1a241e] hover:-translate-y-0.5 transition-transform" type="submit">
                  Skapa mitt gratis förslag
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
