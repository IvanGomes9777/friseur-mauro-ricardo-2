'use client';

import { motion, useReducedMotion } from 'framer-motion';

const lines = [
  ['Wo', 'Münster'],
  ['italienisch', 'wird.'],
];

export function HeroHeadline() {
  const reduceMotion = useReducedMotion();

  let wordIndex = 0;

  return (
    <h1 className="font-display text-hero italic text-cream">
      <span className="sr-only">Wo Münster italienisch wird.</span>
      <span aria-hidden className="block">
        {lines.map((line, li) => (
          <span key={li} className="block overflow-hidden pb-1">
            {line.map((word, wi) => {
              const i = wordIndex++;
              return (
                <motion.span
                  key={`${li}-${wi}`}
                  initial={reduceMotion ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.25 + i * 0.12,
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    </h1>
  );
}
