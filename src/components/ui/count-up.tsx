'use client';

import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type CountUpProps = {
  to: number;
  duration?: number;
  decimals?: number;
  className?: string;
};

export function CountUp({ to, duration = 1.8, decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const value = useMotionValue(reduceMotion ? to : 0);
  const display = useTransform(value, (v) => v.toFixed(decimals).replace('.', ','));

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(value, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, value, reduceMotion]);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const unsub = display.on('change', (v) => {
      el.textContent = v;
    });
    el.textContent = display.get();
    return () => unsub();
  }, [display]);

  return <span ref={ref} className={className} aria-label={to.toString()} />;
}
