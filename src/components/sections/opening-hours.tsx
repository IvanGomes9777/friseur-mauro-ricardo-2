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

        <Reveal delay={0.3}>
          <HoursTable todayKey={status?.todayKey ?? null} />
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 flex items-center gap-3 text-eyebrow uppercase tracking-eyebrow text-stone-500">
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
  const stateLabel = status === null
    ? 'Status wird geladen'
    : status.isOpen
      ? 'Jetzt geöffnet'
      : 'Heute geschlossen';

  return (
    <div className="mt-14">
      <AnimatePresence mode="wait">
        <motion.div
          key={status?.isOpen ? 'open' : status === null ? 'pending' : 'closed'}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-wrap items-center gap-3 text-eyebrow uppercase tracking-eyebrow text-stone-500">
            <span className="relative inline-flex h-2.5 w-2.5">
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
            <span className="text-cream">{stateLabel}</span>
            {status && (
              <>
                <span aria-hidden className="text-stone-700">·</span>
                <span>Heute · {germanDayLong[status.todayKey]}</span>
              </>
            )}
          </div>

          <p className="font-display text-3xl italic leading-[1.1] text-cream sm:text-4xl md:text-[clamp(2.25rem,4vw,3.25rem)]">
            {status?.message ?? ' '}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function HoursTable({ todayKey }: { todayKey: string | null }) {
  return (
    <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-stone-700/60 bg-stone-700/60 sm:grid-cols-7">
      {displayOrder.map((key) => {
        const hours = site.hours[key];
        const isToday = key === todayKey;
        return (
          <li
            key={key}
            data-today={isToday || undefined}
            className={cn(
              'group flex items-center justify-between gap-4 bg-espresso-deep px-4 py-4 transition-colors duration-500 ease-cinematic sm:flex-col sm:items-stretch sm:justify-start sm:gap-2 sm:px-3 sm:py-5',
              isToday && 'bg-brass/5',
            )}
          >
            <div
              className={cn(
                'flex items-baseline gap-2 text-eyebrow uppercase tracking-eyebrow sm:flex-col sm:gap-1',
                isToday ? 'text-brass' : 'text-stone-500',
              )}
            >
              <span className="font-medium">{germanDayShort[key]}</span>
              <span className="hidden text-stone-500 sm:inline">
                {germanDayLong[key]}
              </span>
            </div>
            <div
              className={cn(
                'text-right tabular-nums sm:text-left',
                hours
                  ? isToday
                    ? 'font-display italic text-cream'
                    : 'text-cream/80'
                  : 'text-stone-500',
              )}
            >
              {hours ? (
                <>
                  <span>{hours.open}</span>
                  <span className="mx-1.5 text-stone-500">–</span>
                  <span>{hours.close}</span>
                </>
              ) : (
                <span className="text-eyebrow uppercase tracking-eyebrow">
                  Zu
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
