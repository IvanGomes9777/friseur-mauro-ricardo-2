'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  from?: 'up' | 'left' | 'right';
  className?: string;
  as?: 'div' | 'span' | 'li' | 'section';
};

const variantsFor = (from: RevealProps['from'] = 'up'): Variants => {
  const offset = 40;
  const distance = { up: { y: offset }, left: { x: -offset }, right: { x: offset } }[from];
  return {
    hidden: { opacity: 0, ...distance },
    show: { opacity: 1, x: 0, y: 0 },
  };
};

export function Reveal({ children, delay = 0, from = 'up', className, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      variants={variantsFor(from)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
