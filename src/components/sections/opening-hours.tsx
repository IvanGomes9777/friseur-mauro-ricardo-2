'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Reveal } from '@/components/ui/reveal';
import {
  displayOrder,
  germanDayLong,
  germanDayShort,
  getSalonStatus,
  type SalonStatus,
} from '@/lib/opening-hours';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function OpeningHours() {
  const [status, setStatus] = useState<SalonStatus | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setStatus(getSalonStatus(new Date(), site.hours));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="oeffnungszeiten"
      aria-labelledby="oeffnungszeiten-h"
      className="relative section-padding bg-espresso-deep"
    >
      <div className="container-default">
        <Reveal>
          <h2
            id="oeffnungszeiten-h"
            className="font-display text-display italic text-cream"
          >
            Wann wir
            <br />
            <span className="text-brass/90">da sind.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <StatusBadge status={status} reduceMotion={!!reduceMotion} />
        </Reveal>

        <Reveal delay={0.25}>
          <HoursTable todayKey={status?.todayKey ?? null} />
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-10 flex items-center gap-3 text-eyebrow uppercase tracking-eyebrow text-stone-500">
            <Clock className="h-3 w-3" strokeWidth={1.5} />
            Zeitzone Europe/Berlin · Live-Status
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function StatusBadge({
  status,
  reduceMotion,
}: {
  status: SalonStatus | null;
  reduceMotion: boolean;
}) {
  return (
    <div className="mt-12 inline-flex flex-col gap-4 border border-stone-700/60 bg-espresso/60 px-7 py-6 sm:flex-row sm:items-center sm:gap-6 sm:py-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={status?.isOpen ? 'open' : status === null ? 'pending' : 'closed'}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="relative inline-flex h-3 w-3">
            <span
              aria-hidden
              className={cn(
                'absolute inset-0 rounded-full',
                status === null && 'bg-stone-500',
                status?.isOpen && 'bg-brass animate-pulse-soft',
                status && !status.isOpen && 'bg-terracotta',
              )}
            />
            {status?.isOpen && !reduceMotion && (
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-brass/40 animate-ping"
              />
            )}
          </span>
          <p className="text-eyebrow uppercase tracking-eyebrow text-cream">
            {status === null
              ? 'Status wird geladen'
              : status.isOpen
                ? 'Jetzt geöffnet'
                : 'Geschlossen'}
          </p>
        </motion.div>
      </AnimatePresence>

      <span aria-hidden className="hidden h-6 w-px bg-stone-700/80 sm:block" />

      <p className="font-display text-xl italic text-cream sm:text-2xl">
        {status?.message ?? ' '}
      </p>
    </div>
  );
}

function HoursTable({ todayKey }: { todayKey: string | null }) {
  return (
    <ul className="mt-14 divide-y divide-stone-700/60 border-y border-stone-700/60">
      {displayOrder.map((key) => {
        const hours = site.hours[key];
        const isToday = key === todayKey;
        return (
          <li
            key={key}
            data-today={isToday || undefined}
            className={cn(
              'group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-5 transition-colors duration-500 ease-cinematic sm:gap-10 sm:py-6',
              isToday && 'bg-brass/5',
            )}
          >
            <span
              aria-hidden
              className={cn(
                'absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 origin-left bg-brass transition-transform duration-700 ease-cinematic',
                isToday ? 'scale-x-100' : 'scale-x-0',
              )}
            />

            <span className="ml-4 w-8 text-eyebrow uppercase tracking-eyebrow text-cream/70 sm:ml-6 sm:w-10">
              {germanDayShort[key]}
            </span>

            <span
              className={cn(
                'font-display text-lg italic transition-colors',
                isToday ? 'text-cream' : 'text-cream/65',
              )}
            >
              <span className="hidden sm:inline">{germanDayLong[key]}</span>
              <span className="sm:hidden">{germanDayLong[key].slice(0, 3)}.</span>
            </span>

            <span
              className={cn(
                'mr-4 text-right sm:mr-6',
                hours ? 'text-cream' : 'text-stone-500',
                isToday && 'text-brass',
              )}
            >
              {hours ? (
                <span className="tabular-nums">
                  {hours.open}
                  <span className="mx-2 text-stone-500">–</span>
                  {hours.close}
                </span>
              ) : (
                <span className="text-eyebrow uppercase tracking-eyebrow">
                  Geschlossen
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
