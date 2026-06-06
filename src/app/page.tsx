import { site } from '@/lib/site';

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
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="container-default section-padding pt-40">
          <p className="eyebrow mb-6">100% Italian · Münster</p>
          <h1 className="font-display text-hero italic">
            Wo Münster
            <br />
            italienisch wird.
          </h1>
          <p className="mt-8 max-w-prose text-lg text-cream/70">
            Hero-Platzhalter. Die nächste Section, an der wir arbeiten, ist der
            Hero selbst — mit cinematischem Loop und finaler Headline.
          </p>
          <div className="mt-12 inline-flex items-center gap-3 border-b border-brass/40 pb-2 text-sm text-brass">
            <span className="h-px w-12 bg-brass" />
            <span>
              {site.contact.address.street}, {site.contact.address.postalCode}{' '}
              {site.contact.address.city}
            </span>
          </div>
        </div>
      </section>

      {sectionStub('ueber-uns', 'Über uns')}
      {sectionStub('leistungen', 'Leistungen')}
      {sectionStub('oeffnungszeiten', 'Öffnungszeiten')}
      {sectionStub('bewertungen', 'Bewertungen')}
      {sectionStub('kontakt', 'Kontakt')}
    </>
  );
}
