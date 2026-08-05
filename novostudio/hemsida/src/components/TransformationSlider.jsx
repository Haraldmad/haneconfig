import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal, Maximize2, X } from 'lucide-react';

const PULSE_PEAK = 62;
const RESTING_POSITION = 50;

export default function TransformationSlider() {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const hasPulsedRef = useRef(false);
  const pulseTimeoutsRef = useRef([]);

  const [position, setPosition] = useState(RESTING_POSITION);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const clearPulseTimers = () => {
    pulseTimeoutsRef.current.forEach(clearTimeout);
    pulseTimeoutsRef.current = [];
  };

  // Auto-pulse hint: the first time the slider scrolls into view, nudge the
  // handle 50% → 62% → 50% over ~1s so first-time visitors see it's draggable.
  useEffect(() => {
    if (!containerRef.current) return undefined;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPulsedRef.current || hasInteracted) return;
        hasPulsedRef.current = true;
        setIsPulsing(true);
        setPosition(PULSE_PEAK);
        pulseTimeoutsRef.current.push(
          setTimeout(() => {
            setPosition(RESTING_POSITION);
            pulseTimeoutsRef.current.push(setTimeout(() => setIsPulsing(false), 500));
          }, 500)
        );
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasInteracted]);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(Math.max(percentage, 0), 100));
  }, []);

  const handlePointerDown = (e) => {
    clearPulseTimers();
    setIsPulsing(false);
    setHasInteracted(true);
    isDraggingRef.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [updatePosition]);

  useEffect(() => clearPulseTimers, []);

  useEffect(() => {
    if (!isZoomOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsZoomOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomOpen]);

  return (
    <section className="py-24 px-8 max-w-6xl mx-auto bg-warm-cream relative z-0">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="font-data-mono text-[12px] uppercase tracking-widest text-clay-terracotta mb-4">
          Transformation ➔ 24 timmar
        </p>
        <h2 className="font-cormorant italic font-normal text-[44px] md:text-[56px] text-ink leading-tight mb-4">
          Före &amp; Efter Novo Studio.
        </h2>
        <p className="font-body-tight font-normal text-base md:text-lg text-ink/70 leading-relaxed">
          Dra i reglaget för att se hur en föråldrad byråsajt förvandlas till en blixtsnabb skandinavisk närvaro.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[3/2] rounded-[24px] overflow-hidden border border-ink/10 shadow-2xl select-none"
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
      >
        {/* Bottom layer — New 2026 website (base) */}
        <img
          src="/assets/new-site.png"
          alt="Nya sajten"
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        {/* Top layer — Old 2007 website, clipped away from the left as position grows, revealing the new site underneath */}
        <img
          src="/assets/old-site.png"
          alt="Gamla sajten"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 0 0 ${position}%)`,
            willChange: 'clip-path',
            transition: isPulsing ? 'clip-path 0.5s ease-in-out' : 'none',
          }}
          draggable="false"
        />

        {/* Vertical divider line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-lg z-20 pointer-events-none"
          style={{ left: `${position}%`, transition: isPulsing ? 'left 0.5s ease-in-out' : 'none' }}
        />

        {/* Circular handle */}
        <div
          className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-deep-moss border-2 border-white shadow-xl flex items-center justify-center text-warm-cream cursor-ew-resize"
          style={{ left: `${position}%`, transition: isPulsing ? 'left 0.5s ease-in-out' : 'none' }}
        >
          <MoveHorizontal size={20} />
        </div>

        {/* Discreet fullscreen-zoom button for the new site */}
        <button
          type="button"
          className="absolute top-4 right-4 z-40 flex items-center justify-center w-9 h-9 rounded-full bg-warm-cream/90 backdrop-blur-sm border border-ink/10 text-ink shadow-md hover:-translate-y-0.5 transition-transform"
          onClick={(event) => {
            event.stopPropagation();
            setIsZoomOpen(true);
          }}
          aria-label="Visa nya sajten i fullskärm"
        >
          <Maximize2 size={16} />
        </button>
      </div>

      {isZoomOpen && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
          onClick={() => setIsZoomOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Nya sajten i fullskärm"
        >
          <button
            type="button"
            className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center justify-center w-11 h-11 rounded-full bg-warm-cream text-ink hover:-translate-y-0.5 transition-transform"
            onClick={() => setIsZoomOpen(false)}
            aria-label="Stäng"
          >
            <X size={22} />
          </button>
          <img
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
            alt="Nya sajten"
            src="/assets/new-site.png"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
