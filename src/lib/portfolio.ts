export type PortfolioItem = {
  id: string;
  label: string;
  category: string;
  aspect: 'tall' | 'square';
  gradient: string;
};

export const portfolio: readonly PortfolioItem[] = [
  {
    id: 'caramel-balayage',
    label: 'Caramel Balayage',
    category: 'Coloration',
    aspect: 'tall',
    gradient:
      'radial-gradient(ellipse at 30% 20%, rgba(201,169,97,0.35) 0%, rgba(201,169,97,0) 60%), linear-gradient(155deg, #2A1F18 0%, #0C0907 100%)',
  },
  {
    id: 'italian-classic',
    label: 'Italian Cut — Classic',
    category: 'Herren',
    aspect: 'square',
    gradient:
      'radial-gradient(ellipse at 70% 40%, rgba(184,84,58,0.22) 0%, rgba(184,84,58,0) 55%), linear-gradient(170deg, #1A1410 0%, #0C0907 100%)',
  },
  {
    id: 'honey-lights',
    label: 'Honey Lights',
    category: 'Strähnen',
    aspect: 'tall',
    gradient:
      'radial-gradient(ellipse at 50% 30%, rgba(201,169,97,0.32) 0%, rgba(201,169,97,0) 55%), radial-gradient(ellipse at 80% 80%, rgba(155,126,63,0.20) 0%, rgba(155,126,63,0) 60%), linear-gradient(180deg, #221A14 0%, #0C0907 100%)',
  },
  {
    id: 'beard-sculpt',
    label: 'Beard Sculpt',
    category: 'Herren',
    aspect: 'square',
    gradient:
      'radial-gradient(ellipse at 25% 75%, rgba(155,126,63,0.28) 0%, rgba(155,126,63,0) 55%), linear-gradient(140deg, #1A1410 0%, #060403 100%)',
  },
  {
    id: 'bob-pony',
    label: 'Bob mit Pony',
    category: 'Damen',
    aspect: 'tall',
    gradient:
      'radial-gradient(ellipse at 60% 25%, rgba(201,169,97,0.28) 0%, rgba(201,169,97,0) 55%), radial-gradient(ellipse at 20% 80%, rgba(184,84,58,0.16) 0%, rgba(184,84,58,0) 50%), linear-gradient(160deg, #1F1812 0%, #0C0907 100%)',
  },
  {
    id: 'updo-romantic',
    label: 'Romantische Hochsteckfrisur',
    category: 'Anlässe',
    aspect: 'square',
    gradient:
      'radial-gradient(ellipse at 50% 50%, rgba(245,241,234,0.10) 0%, rgba(245,241,234,0) 55%), radial-gradient(ellipse at 80% 30%, rgba(201,169,97,0.25) 0%, rgba(201,169,97,0) 60%), linear-gradient(150deg, #1A1410 0%, #0C0907 100%)',
  },
  {
    id: 'copper-bob',
    label: 'Copper Bob',
    category: 'Coloration',
    aspect: 'tall',
    gradient:
      'radial-gradient(ellipse at 70% 35%, rgba(184,84,58,0.42) 0%, rgba(184,84,58,0) 55%), linear-gradient(165deg, #2A1714 0%, #0C0907 100%)',
  },
  {
    id: 'slick-back',
    label: 'Slick Back',
    category: 'Herren',
    aspect: 'square',
    gradient:
      'radial-gradient(ellipse at 50% 60%, rgba(201,169,97,0.20) 0%, rgba(201,169,97,0) 50%), linear-gradient(180deg, #1A1410 0%, #060403 100%)',
  },
  {
    id: 'natural-curls',
    label: 'Natural Curls',
    category: 'Damen',
    aspect: 'tall',
    gradient:
      'radial-gradient(ellipse at 30% 70%, rgba(201,169,97,0.30) 0%, rgba(201,169,97,0) 60%), radial-gradient(ellipse at 75% 25%, rgba(155,126,63,0.18) 0%, rgba(155,126,63,0) 55%), linear-gradient(170deg, #1F1812 0%, #0C0907 100%)',
  },
] as const;
