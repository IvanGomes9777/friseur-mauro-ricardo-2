'use client';

import { useCallback, useState } from 'react';
import { PortfolioLightbox } from '@/components/sections/portfolio-lightbox';
import { PortfolioTile } from '@/components/sections/portfolio-tile';
import { Reveal } from '@/components/ui/reveal';
import { portfolio } from '@/lib/portfolio';

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onOpen = useCallback((i: number) => setActiveIndex(i), []);
  const onClose = useCallback(() => setActiveIndex(null), []);
  const onPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + portfolio.length) % portfolio.length)),
    [],
  );
  const onNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % portfolio.length)),
    [],
  );

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-h"
      className="relative section-padding"
    >
      <div className="container-wide">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <h2
                id="portfolio-h"
                className="font-display text-display italic text-cream"
              >
                Was hier
                <br />
                <span className="text-brass/90">passiert.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-cream/60">
              Klicke ein Motiv an, um es größer zu sehen. Foto-Material folgt,
              die Layouts stehen bereits.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {portfolio.map((item, i) => (
            <Reveal
              key={item.id}
              as="li"
              delay={(i % 3) * 0.08}
              className={item.aspect === 'tall' ? 'aspect-[4/5]' : 'aspect-square'}
            >
              <PortfolioTile item={item} index={i} onOpen={onOpen} />
            </Reveal>
          ))}
        </ul>
      </div>

      <PortfolioLightbox
        index={activeIndex}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </section>
  );
}
