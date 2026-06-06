'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function HeroScrollIndicator() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
      className="absolute inset-x-0 bottom-10 flex justify-center"
    >
      <a
        href="#ueber-uns"
        aria-label="Weiter zur nächsten Section"
        className="group flex flex-col items-center gap-3 text-eyebrow uppercase tracking-eyebrow text-cream/60 transition-colors hover:text-brass"
      >
        <span>Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-stone-700">
          <motion.span
            animate={reduceMotion ? undefined : { y: ['-100%', '100%'] }}
            transition={{ duration: 2, ease: [0.65, 0, 0.35, 1], repeat: Infinity }}
            className="absolute inset-x-0 top-0 block h-1/2 bg-brass"
          />
        </span>
      </a>
    </motion.div>
  );
}
