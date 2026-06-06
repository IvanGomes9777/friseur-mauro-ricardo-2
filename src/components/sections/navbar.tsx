'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BookingButton } from '@/components/ui/booking-button';
import { Logo } from '@/components/ui/logo';
import { useFocusTrap } from '@/lib/hooks/use-focus-trap';
import { useScrolled } from '@/lib/hooks/use-scrolled';
import { navItems } from '@/lib/nav';
import { cn } from '@/lib/utils';

export function Navbar() {
  const scrolled = useScrolled(80);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const trapRef = useFocusTrap<HTMLDivElement>(open);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-cinematic',
          scrolled
            ? 'border-b border-stone-700/60 bg-espresso/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          aria-label="Hauptnavigation"
          className="container-wide flex h-20 items-center justify-between md:h-20"
        >
          <Logo />

          <ul className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-flex py-2 text-sm font-medium text-cream/80 transition-colors hover:text-cream"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-500 ease-cinematic group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <BookingButton />
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:text-brass lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={trapRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="absolute inset-0 bg-espresso-deep/95 backdrop-blur-2xl" />
            <div className="relative flex h-full flex-col">
              <div className="container-wide flex h-20 items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menü schließen"
                  className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:text-brass"
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>

              <nav
                aria-label="Mobile Hauptnavigation"
                className="container-wide flex flex-1 flex-col justify-between pb-12 pt-8"
              >
                <ul className="flex flex-col gap-2">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                        delay: reduceMotion ? 0 : 0.15 + i * 0.06,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-stone-700/60 py-5 font-display text-3xl italic text-cream transition-colors hover:text-brass sm:text-4xl"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                  className="mt-12"
                >
                  <BookingButton className="w-full" />
                  <p className="mt-6 text-eyebrow uppercase tracking-eyebrow text-stone-500">
                    Idenbrockpl. 5A · 48159 Münster
                  </p>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
