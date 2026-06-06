'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import { portfolio } from '@/lib/portfolio';

type PortfolioLightboxProps = {
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function PortfolioLightbox({ index, onClose, onPrev, onNext }: PortfolioLightboxProps) {
  const reduceMotion = useReducedMotion();
  const item = index !== null ? portfolio[index] : null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (index === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', handleKey);
    };
  }, [index, handleKey]);

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${item.label} — Vorschau`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-deep/95 backdrop-blur-2xl"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center border border-stone-700/60 bg-espresso-deep/60 text-cream transition-colors hover:border-brass hover:text-brass sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-stone-700/60 bg-espresso-deep/60 text-cream transition-colors hover:border-brass hover:text-brass sm:inline-flex sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Nächstes Bild"
            className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-stone-700/60 bg-espresso-deep/60 text-cream transition-colors hover:border-brass hover:text-brass sm:inline-flex sm:right-24"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <div
            className="relative flex w-full max-w-5xl flex-col items-center gap-6 px-4 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.figure
              layoutId={reduceMotion ? undefined : `portfolio-${item.id}`}
              className="relative aspect-[4/5] w-full max-w-2xl overflow-hidden border border-stone-700/80"
            >
              <motion.div
                layoutId={reduceMotion ? undefined : `portfolio-${item.id}-bg`}
                aria-hidden
                className="absolute inset-0"
                style={{ backgroundImage: item.gradient }}
              />
              <div aria-hidden className="grain pointer-events-none absolute inset-0" />
              <div aria-hidden className="absolute inset-6 border border-brass/15" />

              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-espresso-deep/95 via-espresso-deep/40 to-transparent p-6 sm:p-8">
                <p className="text-eyebrow uppercase tracking-eyebrow text-brass">
                  {item.category}
                </p>
                <p className="font-display text-2xl italic text-cream sm:text-3xl">
                  {item.label}
                </p>
                <p className="text-eyebrow uppercase tracking-eyebrow text-stone-500">
                  Foto folgt
                </p>
              </figcaption>
            </motion.figure>

            <p className="text-eyebrow uppercase tracking-eyebrow text-stone-500">
              {index + 1} / {portfolio.length} · ← → · Esc
            </p>

            <div className="flex gap-3 sm:hidden">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Vorheriges Bild"
                className="inline-flex h-11 w-11 items-center justify-center border border-stone-700/60 text-cream"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Nächstes Bild"
                className="inline-flex h-11 w-11 items-center justify-center border border-stone-700/60 text-cream"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
