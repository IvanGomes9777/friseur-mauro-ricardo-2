'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { PortfolioItem } from '@/lib/portfolio';

type PortfolioTileProps = {
  item: PortfolioItem;
  index: number;
  onOpen: (index: number) => void;
};

export function PortfolioTile({ item, index, onOpen }: PortfolioTileProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      layoutId={`portfolio-${item.id}`}
      className="group relative block h-full w-full overflow-hidden border border-stone-700/60 text-left focus:outline-none focus-visible:border-brass"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${item.label} öffnen`}
    >
      <motion.div
        layoutId={`portfolio-${item.id}-bg`}
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: item.gradient }}
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div
        aria-hidden
        className="absolute inset-0 bg-espresso-deep/40 opacity-0 transition-opacity duration-500 ease-cinematic group-hover:opacity-100"
      />

      <div className="absolute inset-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div className="flex flex-col gap-1">
          <p className="text-eyebrow uppercase tracking-eyebrow text-brass/80">
            {item.category}
          </p>
          <p className="font-display text-lg italic text-cream sm:text-xl">
            {item.label}
          </p>
        </div>
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-brass/40 text-brass transition-all duration-500 ease-cinematic group-hover:border-brass group-hover:bg-brass group-hover:text-espresso-deep"
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </div>
    </motion.button>
  );
}
