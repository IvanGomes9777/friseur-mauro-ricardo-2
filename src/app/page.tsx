import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container-default section-padding">
        <p className="eyebrow mb-6">100% Italian · Münster</p>
        <h1 className="font-display text-hero italic">
          Wo Münster
          <br />
          italienisch wird.
        </h1>
        <p className="mt-8 max-w-prose text-lg text-cream/70">
          Scaffold-Platzhalter. Die Sections werden ab jetzt einzeln gebaut —
          beginnend mit der Navbar.
        </p>
        <div className="mt-12 inline-flex items-center gap-3 border-b border-brass/40 pb-2 text-sm text-brass">
          <span className="h-px w-12 bg-brass" />
          <span>{site.contact.address.street}, {site.contact.address.postalCode} {site.contact.address.city}</span>
        </div>
      </div>
    </div>
  );
}
