import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#erbjudande', label: 'Erbjudande' },
  { href: '#fordelar', label: 'Fördelar' },
  { href: '#pris', label: 'Pris' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled ? 'pt-0 px-0' : 'pt-6 px-4 md:px-8'
      }`}
    >
      <div
        className={`flex justify-between items-center gap-8 mx-auto backdrop-blur-md border-ink/10 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'max-w-full rounded-none px-8 py-4 bg-warm-cream/95 border-b shadow-md'
            : 'max-w-5xl rounded-[40px] px-6 py-3.5 bg-warm-cream/90 border shadow-lg'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-soft-serif text-[24px] text-ink tracking-tight italic">Novo Studio</span>
          <span className="w-3 h-3 rounded-full bg-deep-moss"></span>
        </div>
        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="text-sm font-body-tight text-ink hover:text-deep-moss transition-colors uppercase tracking-widest"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="bg-deep-moss text-warm-cream text-sm px-6 py-2 hidden md:block uppercase tracking-wider font-medium rounded-xl shadow-[0_2px_0_0_#1a241e] hover:-translate-y-0.5 transition-transform"
          type="button"
        >
          Se gratis prototyp
        </button>
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 text-ink"
          type="button"
          aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className={`md:hidden mx-auto flex flex-col gap-1 bg-warm-cream/95 backdrop-blur-md border border-ink/10 shadow-lg p-4 transition-all duration-500 ease-in-out ${
            isScrolled ? 'mt-0 max-w-full rounded-none border-t-0' : 'mt-3 max-w-5xl rounded-[28px]'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="text-sm font-body-tight text-ink hover:text-deep-moss transition-colors uppercase tracking-widest px-3 py-3 rounded-xl hover:bg-ink/5"
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="bg-deep-moss text-warm-cream text-sm px-6 py-3 mt-2 uppercase tracking-wider font-medium rounded-xl shadow-[0_2px_0_0_#1a241e] hover:-translate-y-0.5 transition-transform"
            type="button"
            onClick={() => setIsMenuOpen(false)}
          >
            Se gratis prototyp
          </button>
        </nav>
      )}
    </header>
  );
}
