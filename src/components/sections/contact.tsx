import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/sections/contact-form';
import { MapEmbed } from '@/components/sections/map-embed';
import { Reveal } from '@/components/ui/reveal';
import { displayOrder, germanDayShort } from '@/lib/opening-hours';
import { site } from '@/lib/site';

export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-h"
      className="relative section-padding bg-espresso-deep"
    >
      <div className="container-wide">
        <Reveal>
          <h2
            id="kontakt-h"
            className="font-display text-display italic text-cream"
          >
            Komm vorbei.
            <br />
            <span className="text-brass/90">Wir freuen uns.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal from="left" delay={0.15} className="lg:col-span-5">
            <ContactInfo />
          </Reveal>

          <Reveal from="right" delay={0.2} className="lg:col-span-7">
            <MapEmbed />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 border-t border-stone-700/60 pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-2xl italic text-cream sm:text-3xl">
              Schreib uns, wir antworten persönlich.{' '}
              <span className="text-brass/90">Meistens noch am selben Tag.</span>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <span className="flex items-center gap-3 text-eyebrow uppercase tracking-eyebrow text-stone-500">
          <MapPin className="h-3 w-3" strokeWidth={1.5} />
          Adresse
        </span>
        <p className="font-display text-2xl italic text-cream sm:text-3xl">
          {site.contact.address.street}
          <br />
          {site.contact.address.postalCode} {site.contact.address.city}
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <a
          href={site.contact.phoneHref}
          className="group flex flex-col gap-3"
        >
          <span className="flex items-center gap-3 text-eyebrow uppercase tracking-eyebrow text-stone-500">
            <Phone className="h-3 w-3" strokeWidth={1.5} />
            Telefon
          </span>
          <span className="font-display text-xl italic text-brass transition-colors group-hover:text-cream sm:text-2xl">
            {site.contact.phone}
          </span>
        </a>

        <a
          href={`mailto:${site.contact.email}`}
          className="group flex flex-col gap-3"
        >
          <span className="flex items-center gap-3 text-eyebrow uppercase tracking-eyebrow text-stone-500">
            <Mail className="h-3 w-3" strokeWidth={1.5} />
            E-Mail
          </span>
          <span className="break-all font-display text-xl italic text-brass transition-colors group-hover:text-cream sm:text-2xl">
            {site.contact.email}
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-eyebrow uppercase tracking-eyebrow text-stone-500">
          Öffnungszeiten
        </span>
        <ul className="divide-y divide-stone-700/60 border-y border-stone-700/60">
          {displayOrder.map((key) => {
            const hours = site.hours[key];
            return (
              <li
                key={key}
                className="grid grid-cols-[auto_1fr] items-center gap-6 py-2.5"
              >
                <span className="w-8 text-eyebrow uppercase tracking-eyebrow text-cream/70">
                  {germanDayShort[key]}
                </span>
                <span className="text-right tabular-nums text-cream/85">
                  {hours ? `${hours.open} – ${hours.close}` : (
                    <span className="text-stone-500">Geschlossen</span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
