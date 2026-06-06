'use client';

import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const CONSENT_KEY = 'mr-maps-consent';

const fullAddress = [
  site.contact.address.street,
  `${site.contact.address.postalCode} ${site.contact.address.city}`,
].join(', ');

const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;

export function MapEmbed() {
  const [consented, setConsented] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setConsented(window.localStorage.getItem(CONSENT_KEY) === 'true');
    } catch {
      setConsented(false);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(CONSENT_KEY, 'true');
    } catch {}
    setConsented(true);
  };

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone-700/60 bg-espresso-deep lg:aspect-auto lg:h-full">
      {consented ? (
        <iframe
          src={embedUrl}
          title={`Karte: ${fullAddress}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full grayscale-[40%] [filter:invert(0.9)_hue-rotate(180deg)_grayscale(40%)]"
        />
      ) : (
        <MapPlaceholder onAccept={accept} />
      )}

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 border border-brass/50 bg-espresso-deep/80 px-4 py-2 text-eyebrow uppercase tracking-eyebrow text-brass backdrop-blur-md transition-colors hover:bg-brass hover:text-espresso-deep"
      >
        <MapPin className="h-3 w-3" strokeWidth={1.5} />
        Route planen
      </a>
    </div>
  );
}

function MapPlaceholder({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 40%, rgba(201,169,97,0.18) 0%, rgba(201,169,97,0) 60%), linear-gradient(160deg, #1A1410 0%, #0C0907 100%)',
        }}
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div className="relative flex h-16 w-16 items-center justify-center border border-brass/40 text-brass">
        <MapPin className="h-7 w-7" strokeWidth={1.25} />
      </div>

      <div className="relative max-w-xs space-y-3">
        <p className="font-display text-xl italic text-cream">Karte aktivieren</p>
        <p className="text-sm text-cream/65">
          Beim Anzeigen der Karte werden Daten an Google übertragen.
          Mit einem Klick stimmst du dem zu.
        </p>
      </div>

      <button
        type="button"
        onClick={onAccept}
        className="relative inline-flex items-center justify-center border border-brass bg-brass px-5 py-2.5 text-eyebrow uppercase tracking-eyebrow font-medium text-espresso-deep transition-all duration-300 ease-cinematic hover:-translate-y-0.5 hover:bg-brass-deep hover:text-cream"
      >
        Karte laden
      </button>

      <a
        href="/datenschutz"
        className="relative text-eyebrow uppercase tracking-eyebrow text-stone-500 underline-offset-4 hover:text-brass hover:underline"
      >
        Mehr im Datenschutz
      </a>
    </div>
  );
}
