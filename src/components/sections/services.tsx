import {
  Crown,
  Droplet,
  Leaf,
  MessageCircle,
  Scissors,
  Wand2,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  priceFrom: string;
};

const services: readonly Service[] = [
  {
    icon: Scissors,
    title: 'Damen Schnitt & Styling',
    description:
      'Präziser Schnitt, geschmeidiges Finish. Wir lesen deine Haarstruktur — und arbeiten mit ihr.',
    priceFrom: '[ab €XX]',
  },
  {
    icon: Wand2,
    title: 'Herren Schnitt & Bart',
    description:
      'Classic, Fade oder eigenwillig. Kurz oder lang, mit Bart oder ohne — handgeführt, nicht abgewickelt.',
    priceFrom: '[ab €XX]',
  },
  {
    icon: Droplet,
    title: 'Coloration & Strähnen',
    description:
      'Von Caramel bis Mailand-Schwarz. Volle Tönung, Strähnen oder Balayage — gemischt für deinen Teint.',
    priceFrom: '[ab €XX]',
  },
  {
    icon: Crown,
    title: 'Hochsteckfrisuren & Anlässe',
    description:
      'Hochzeit, Gala oder ein besonderer Abend. Eine Frisur, die hält und sich leicht anfühlt.',
    priceFrom: '[ab €XX]',
  },
  {
    icon: Leaf,
    title: 'Pflege & Treatments',
    description:
      'Tiefenpflege, Keratin oder Glanzbehandlung. Damit dein Haar nicht nur fällt, sondern fließt.',
    priceFrom: '[ab €XX]',
  },
  {
    icon: MessageCircle,
    title: 'Beratung & Typberatung',
    description:
      'Vor dem Schnitt steht das Gespräch. Welcher Look passt zu deinem Gesicht, Alltag, zu dir?',
    priceFrom: 'Auf Anfrage',
  },
] as const;

export function Services() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-h"
      className="relative section-padding bg-espresso-deep"
    >
      <div className="container-wide">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">Unsere Leistungen</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="leistungen-h"
              className="font-display text-display italic text-cream"
            >
              Italienisches Handwerk —
              <br />
              <span className="text-brass/90">auf den Punkt.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden border border-stone-700/60 bg-stone-700/60 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              as="li"
              delay={i * 0.08}
              className="h-full"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col gap-6 bg-espresso p-8 transition-colors duration-500 ease-cinematic hover:bg-espresso-deep sm:p-10">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brass transition-transform duration-500 ease-cinematic group-hover:scale-x-100"
      />

      <div className="flex h-12 w-12 items-center justify-center border border-brass/30 text-brass transition-all duration-500 ease-cinematic group-hover:border-brass group-hover:bg-brass/5">
        <Icon className="h-6 w-6" strokeWidth={1.25} />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-display text-2xl italic text-cream">{service.title}</h3>
        <p className="text-cream/65">{service.description}</p>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-stone-700/60 pt-5 text-eyebrow uppercase tracking-eyebrow">
        <span className="text-stone-500">Preis</span>
        <span className="text-brass">{service.priceFrom}</span>
      </div>
    </article>
  );
}
