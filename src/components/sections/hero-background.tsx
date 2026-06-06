'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type HeroBackgroundProps = {
  src?: string;
  videoSrc?: string;
  alt: string;
};

export function HeroBackground({ src, videoSrc, alt }: HeroBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '40%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.08]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y, scale }}
        initial={reduceMotion ? false : { scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        {videoSrc && !reduceMotion ? (
          <video
            src={videoSrc}
            poster={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 70% 30%, rgba(201,169,97,0.18) 0%, rgba(201,169,97,0) 55%), radial-gradient(ellipse at 20% 80%, rgba(184,84,58,0.10) 0%, rgba(184,84,58,0) 50%), linear-gradient(180deg, #1A1410 0%, #0C0907 100%)',
            }}
          />
        )}
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(12,9,7,0.65)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-espresso-deep via-espresso/80 to-transparent"
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />
    </div>
  );
}
