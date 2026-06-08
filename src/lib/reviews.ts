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
    id: 'review-1',
    author: 'Anna M.',
    rating: 5,
    date: 'vor 2 Monaten',
    quote:
      'Absolut begeistert. Super Service, entspannte Atmosphäre und handwerklich einfach top. Man merkt sofort, dass hier mit Leidenschaft gearbeitet wird. Immer wieder gerne!',
  },
  {
    id: 'review-2',
    author: 'Thomas K.',
    rating: 5,
    date: 'vor einem Jahr',
    quote:
      'Immer freundlich und kompetent! Gehe gerne dorthin, Termine werden eingehalten, und es wird vorzüglich geschnitten!',
  },
  {
    id: 'review-3',
    author: 'Sabine L.',
    rating: 5,
    date: 'vor 4 Jahren',
    quote:
      'Ich war dort zum Spitzen schneiden und wurde sehr freundlich empfangen. Beratung war top und meine Haare wurden wirklich schön geschnitten.',
  },
] as const;

const staticData: ReviewsData = {
  reviews: [...staticReviews],
  meta: { average: 4.8, count: 42 },
  source: 'static',
};

export { staticData };
