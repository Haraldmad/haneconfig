import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-24 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-ink/10 bg-warm-cream text-ink">
      <div className="font-soft-serif text-[32px] italic mb-8 md:mb-0">
        Novo Studio
      </div>
      <div className="font-body-tight text-sm text-ink/60 mb-8 md:mb-0 text-center">
        © 2024 Novo Studio. Clinical Precision. Scandinavian Heart.
      </div>
      <nav className="flex gap-8">
        <a className="font-body-tight text-sm text-ink/80 hover:text-deep-moss transition-colors uppercase tracking-widest" href="#">Terms</a>
        <a className="font-body-tight text-sm text-ink/80 hover:text-deep-moss transition-colors uppercase tracking-widest" href="#">Privacy</a>
        <a className="font-body-tight text-sm text-ink/80 hover:text-deep-moss transition-colors uppercase tracking-widest" href="#">Twitter</a>
        <a className="font-body-tight text-sm text-ink/80 hover:text-deep-moss transition-colors uppercase tracking-widest" href="#">LinkedIn</a>
      </nav>
    </footer>
  );
}
