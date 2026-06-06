export const site = {
  name: 'Mauro Ricardo',
  fullName: 'Friseursalon Mauro Ricardo',
  tagline: 'Di Piazza Uomo E Donna, 100% Italy',
  description:
    'Italienisches Friseurhandwerk im Herzen von Münster. Schnitt, Coloration und Styling mit der Seele Italiens.',
  url: 'https://mauro-ricardo.de',
  locale: 'de-DE',
  timezone: 'Europe/Berlin',
  contact: {
    phone: '0251 1624493',
    phoneHref: 'tel:+492511624493',
    email: 'info@mauro-ricardo.de',
    address: {
      street: 'Idenbrockpl. 5A',
      postalCode: '48159',
      city: 'Münster',
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
    average: 4.6,
    count: 84,
    href: 'https://www.google.com/search?q=Friseursalon+Mauro+Ricardo+M%C3%BCnster',
  },
} as const;

export type Site = typeof site;
