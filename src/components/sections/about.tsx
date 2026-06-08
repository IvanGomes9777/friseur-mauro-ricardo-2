import { Scissors } from 'lucide-react';
import { CountUp } from '@/components/ui/count-up';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/lib/site';

const stats = [
  { value: 25, suffix: '+', label: 'Jahre Erfahrung', isPlaceholder: true },
  { value: site.rating.average, decimals: 1, suffix: ' ★', label: 'auf Google' },
  { value: site.rating.count, suffix: '', label: 'Bewertungen' },
] as const;

export function About() {
  return (
    <section
      id="ueber-uns"
      aria-labelledby="ueber-uns-h"
      className="relative section-padding"
    >
      <div className="container-wide grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal from="left">
            <h2
              id="ueber-uns-h"
              className="font-display text-display italic text-cream"
            >
              Handwerk mit Stil.
              <br />
              <span className="text-brass/90">Mit Herz gemacht.</span>
            </h2>
          </Reveal>

          <Reveal from="left" delay={0.15}>
            <div className="mt-10 max-w-prose space-y-5 text-lg text-cream/75">
              <p>
                Seit vielen Jahren steht unser Salon für Stil, Ruhe und
                handwerkliche Sorgfalt. Eine Schere, geführt mit der Gelassenheit
                eines Handwerks, das Generationen überdauert hat.
              </p>
              <p>
                Bei uns ist nichts Standard. Wir nehmen uns Zeit für deinen
                Schnitt, für deinen Espresso, für ein Gespräch.{' '}
                <span className="italic text-brass/90">Senza fretta.</span> So
                wie zuhause.
              </p>
            </div>
          </Reveal>

          <Reveal from="left" delay={0.25}>
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-stone-700/60 pt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <dt className="font-display text-3xl italic text-brass sm:text-4xl">
                    <CountUp
                      to={stat.value}
                      decimals={'decimals' in stat ? stat.decimals : 0}
                    />
                    {stat.suffix}
                  </dt>
                  <dd className="text-eyebrow uppercase tracking-eyebrow text-cream/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal from="right" delay={0.15}>
            <PortraitPlaceholder />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <figure className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-stone-700/80 bg-espresso-deep lg:max-w-none">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 70% 25%, rgba(201,169,97,0.25) 0%, rgba(201,169,97,0) 55%), radial-gradient(ellipse at 25% 80%, rgba(184,84,58,0.14) 0%, rgba(184,84,58,0) 55%), linear-gradient(160deg, #1A1410 0%, #0C0907 100%)',
        }}
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div aria-hidden className="absolute inset-6 border border-brass/20" />

      <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
        <Scissors
          className="h-10 w-10 text-brass/70 transition-transform duration-700 ease-cinematic group-hover:rotate-[8deg]"
          strokeWidth={1.25}
        />
        <p className="font-display text-2xl italic text-cream/90">{site.name}</p>
        <p className="px-6 text-eyebrow uppercase tracking-eyebrow text-stone-500">
          Portrait folgt
        </p>
      </figcaption>
    </figure>
  );
}
