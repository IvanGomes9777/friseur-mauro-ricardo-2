import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { CookieSettingsButton } from '@/components/sections/cookie-settings-button';
import { Logo } from '@/components/ui/logo';
import { navItems } from '@/lib/nav';
import { legalLinks, socialLinks } from '@/lib/legal';
import { site } from '@/lib/site';

const socialIcons = { Instagram, Facebook } as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-stone-700/60 bg-espresso-deep">
      <div className="container-wide py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm font-display text-lg italic text-cream/70">
              {site.tagline}.
              <br />
              Mitten in Münster-Nord.
            </p>

            <ul className="mt-10 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-label={`${item.label}, Link folgt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-11 w-11 items-center justify-center border border-stone-700/80 text-cream/70 transition-all duration-500 ease-cinematic hover:border-brass hover:bg-brass/5 hover:text-brass"
                      title={item.placeholder ? `${item.label} (Link folgt)` : item.label}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Footer-Navigation" className="lg:col-span-3">
            <p className="text-eyebrow uppercase tracking-eyebrow text-stone-500">
              Navigation
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative inline-flex font-display text-lg italic text-cream/85 transition-colors hover:text-brass"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-500 ease-cinematic group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-eyebrow uppercase tracking-eyebrow text-stone-500">
              Kontakt
            </p>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-start gap-3 text-cream/85">
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-brass"
                  strokeWidth={1.5}
                />
                <span>
                  {site.contact.address.street}
                  <br />
                  {site.contact.address.postalCode} {site.contact.address.city}
                </span>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-3 text-cream/85 transition-colors hover:text-brass"
                >
                  <Phone className="h-4 w-4 text-brass" strokeWidth={1.5} />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 break-all text-cream/85 transition-colors hover:text-brass"
                >
                  <Mail className="h-4 w-4 text-brass" strokeWidth={1.5} />
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-700/60">
        <div className="container-wide flex flex-col gap-5 py-6 text-eyebrow uppercase tracking-eyebrow text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brass"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
