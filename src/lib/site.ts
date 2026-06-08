export const site = {
  name: 'Salon Beispiel',
  fullName: 'Friseursalon Beispiel',
  tagline: 'Uomo E Donna — Demo-Seite',
  description:
    'Demo-Website eines Friseursalons. Alle Inhalte sind Platzhalter und dienen ausschließlich der Vorschau.',
  url: 'https://example.com',
  locale: 'de-DE',
  timezone: 'Europe/Berlin',
  contact: {
    phone: '0123 4567890',
    phoneHref: 'tel:+491234567890',
    email: 'info@example.com',
    address: {
      street: 'Musterstraße 1',
      postalCode: '12345',
      city: 'Musterstadt',
      country: 'Deutschland',
    },
  },
  hours: {
    monday: { open: '09:00', close: '18:00' },
    tuesday: { open: '09:00', close: '18:00' },
    wednesday: { open: '09:00', close: '18:00' },
    thursday: { open: '09:00', close: '18:00' },
    friday: { open: '09:00', close: '18:00' },
    saturday: null,
    sunday: null,
  } as const,
  rating: {
    average: 4.8,
    count: 42,
    href: 'https://www.google.com/maps',
  },
} as const;

export type Site = typeof site;
