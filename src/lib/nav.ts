export type NavItem = {
  label: string;
  href: string;
};

export const navItems: readonly NavItem[] = [
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Öffnungszeiten', href: '#oeffnungszeiten' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;
