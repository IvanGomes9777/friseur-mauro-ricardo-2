export type Review = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  quote: string;
};

export type ReviewsData = {
  reviews: Review[];
  meta: {
    average: number;
    count: number;
  };
  source: 'google' | 'static';
};

const staticReviews: readonly Review[] = [
  {
    id: 'di-piazza',
    author: 'Di Piazza Uomo E Donna',
    rating: 5,
    date: 'vor 2 Monaten',
    quote:
      'War heute wieder dort und bin absolut begeistert. Super Service, entspannte Atmosphäre und handwerklich einfach top. Man merkt sofort, dass hier mit Leidenschaft gearbeitet wird. Immer wieder gerne!',
  },
  {
    id: 'horst-duebner',
    author: 'Horst Dübner',
    rating: 5,
    date: 'vor einem Jahr',
    quote:
      'Immer freundlich und kompetent! Gehe gerne dorthin, Termine werden eingehalten, Chef und alle Damen schneiden vorzüglich!',
  },
  {
    id: 'lenchen-k',
    author: 'Lenchen K.',
    rating: 5,
    date: 'vor 4 Jahren',
    quote:
      'Ich war dort zum Spitzen schneiden und wurde von einer sehr freundlichen jungen Frau empfangen. Sie beriet mich sehr gut und schnitt mir meine Haare wirklich schön.',
  },
] as const;

const staticData: ReviewsData = {
  reviews: [...staticReviews],
  meta: { average: 4.6, count: 84 },
  source: 'static',
};

export { staticData };
