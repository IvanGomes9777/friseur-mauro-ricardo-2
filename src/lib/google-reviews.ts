import { staticData, type Review, type ReviewsData } from './reviews';

type GoogleReview = {
  rating?: number;
  text?: { text?: string; languageCode?: string };
  authorAttribution?: { displayName?: string };
  publishTime?: string;
};

type GooglePlace = {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
};

const REVALIDATE_SECONDS = 60 * 60 * 6;

function formatRelative(publishTime: string, now: number = Date.now()): string {
  const then = new Date(publishTime).getTime();
  if (Number.isNaN(then)) return '';
  const diffMs = Math.max(0, now - then);
  const days = Math.floor(diffMs / 86_400_000);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years >= 1) return years === 1 ? 'vor einem Jahr' : `vor ${years} Jahren`;
  if (months >= 1) return months === 1 ? 'vor einem Monat' : `vor ${months} Monaten`;
  if (weeks >= 1) return weeks === 1 ? 'vor einer Woche' : `vor ${weeks} Wochen`;
  if (days >= 1) return days === 1 ? 'vor einem Tag' : `vor ${days} Tagen`;
  return 'heute';
}

function clampRating(value: number | undefined): Review['rating'] {
  const rounded = Math.max(1, Math.min(5, Math.round(value ?? 5)));
  return rounded as Review['rating'];
}

function authorSlug(name: string, fallbackIndex: number) {
  const slug = name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return slug || `google-${fallbackIndex}`;
}

export async function getReviewsData(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) {
    return staticData;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        method: 'GET',
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
        next: { revalidate: REVALIDATE_SECONDS, tags: ['google-reviews'] },
      },
    );

    if (!res.ok) {
      console.error('[google-reviews] HTTP', res.status);
      return staticData;
    }

    const place = (await res.json()) as GooglePlace;
    const apiReviews = place.reviews ?? [];

    const reviews: Review[] = apiReviews
      .filter((r): r is GoogleReview & { publishTime: string } => Boolean(r.publishTime))
      .sort(
        (a, b) =>
          new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime(),
      )
      .slice(0, 3)
      .map((r, i) => {
        const author = r.authorAttribution?.displayName?.trim() || 'Google-Gast';
        return {
          id: authorSlug(author, i),
          author,
          rating: clampRating(r.rating),
          date: formatRelative(r.publishTime),
          quote: (r.text?.text ?? '').trim(),
        };
      })
      .filter((r) => r.quote.length > 0);

    if (reviews.length === 0) return staticData;

    return {
      reviews,
      meta: {
        average: place.rating ?? staticData.meta.average,
        count: place.userRatingCount ?? staticData.meta.count,
      },
      source: 'google',
    };
  } catch (err) {
    console.error('[google-reviews] fetch failed', err);
    return staticData;
  }
}
