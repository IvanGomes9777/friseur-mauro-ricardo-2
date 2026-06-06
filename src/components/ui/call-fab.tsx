'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { site } from '@/lib/site';

export function CallFab() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={site.contact.phoneHref}
      aria-label={`Salon anrufen, ${site.contact.phone}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.6, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : 1.6,
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brass text-espresso-deep shadow-[0_8px_30px_-4px_rgba(201,169,97,0.5),0_4px_12px_-2px_rgba(0,0,0,0.6)] transition-colors duration-300 ease-cinematic hover:bg-brass-deep hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      {!reduceMotion && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-brass/40 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-100"
        />
      )}
      <Phone
        aria-hidden
        className="relative h-5 w-5 transition-transform duration-500 ease-cinematic group-hover:-rotate-12 sm:h-6 sm:w-6"
        strokeWidth={1.75}
      />
      <span className="sr-only">{site.contact.phone}</span>
    </motion.a>
  );
}
