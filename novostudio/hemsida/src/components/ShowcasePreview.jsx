import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function ShowcasePreview() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      <div className="mt-24 w-full max-w-5xl mx-auto relative">
        <button
          type="button"
          className="group relative block w-full p-3 bg-white border border-ink/5 rounded-[40px] shadow-2xl text-left"
          onClick={() => setIsLightboxOpen(true)}
          aria-label="Förstora bild"
        >
          <div className="relative overflow-hidden rounded-[30px]">
            <img
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              alt="Novo Studio"
              src="/assets/showcase-preview.png"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-warm-cream text-ink font-body-tight text-sm uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <Search size={16} />
                Klicka för att förstora
              </span>
            </div>
          </div>
        </button>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Förstorad bild"
        >
          <button
            type="button"
            className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center justify-center w-11 h-11 rounded-full bg-warm-cream text-ink hover:-translate-y-0.5 transition-transform"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Stäng"
          >
            <X size={22} />
          </button>
          <img
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
            alt="Novo Studio – förstorad"
            src="/assets/showcase-preview.png"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
