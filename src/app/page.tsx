import { Hero } from '@/components/sections/hero';

const sectionStub = (id: string, label: string) => (
  <section
    id={id}
    aria-labelledby={`${id}-h`}
    className="container-default section-padding border-t border-stone-700/40"
  >
    <p className="eyebrow mb-4">Section · {label}</p>
    <h2 id={`${id}-h`} className="font-display text-display">
      {label}
    </h2>
    <p className="mt-4 max-w-prose text-cream/60">
      Diese Section wird als Nächstes gebaut. Aktuell nur Anchor-Stub für die
      Navbar-Sprünge.
    </p>
  </section>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      {sectionStub('ueber-uns', 'Über uns')}
      {sectionStub('leistungen', 'Leistungen')}
      {sectionStub('oeffnungszeiten', 'Öffnungszeiten')}
      {sectionStub('bewertungen', 'Bewertungen')}
      {sectionStub('kontakt', 'Kontakt')}
    </>
  );
}
