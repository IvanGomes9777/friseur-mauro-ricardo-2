import { ArrowUpRight, Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { getReviewsData } from '@/lib/google-reviews';
import type { Review } from '@/lib/reviews';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export async function Reviews() {
  const { reviews, meta } = await getReviewsData();
  const ratingLabel = meta.average.toFixed(1).replace('.', ',');
  const [featured, ...rest] = reviews;

  return (
    <section
      id="bewertungen"
      aria-labelledby="bewertungen-h"
      className="relative section-padding"
    >
      <div className="container-wide">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3">
                <Star
                  className="h-3 w-3 fill-brass text-brass"
                  strokeWidth={1.5}
                />
                <span>
                  {ratingLabel} auf Google · {meta.count} Rezensionen
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="bewertungen-h"
                className="font-display text-display italic text-cream"
              >
                Was unsere
                <br />
                <span className="text-brass/90">Gäste sagen.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <a
              href={site.rating.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 self-start text-eyebrow uppercase tracking-eyebrow text-cream/70 transition-colors hover:text-brass"
            >
              <span>Alle Bewertungen auf Google</span>
              <span className="flex h-9 w-9 items-center justify-center border border-brass/40 text-brass transition-all duration-500 ease-cinematic group-hover:border-brass group-hover:bg-brass group-hover:text-espresso-deep">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </a>
          </Reveal>
        </div>

        {featured && (
          <Reveal delay={0.25}>
            <FeaturedReview review={featured} />
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-16 grid gap-px overflow-hidden border-t border-stone-700/60 sm:grid-cols-2 lg:gap-12 lg:border-0">
            {rest.map((review, i) => (
              <Reveal key={review.id} delay={i * 0.1}>
                <SecondaryReview review={review} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedReview({ review }: { review: Review }) {
  return (
    <figure className="relative mt-16 overflow-hidden lg:mt-20">
      <Quote
        aria-hidden
        className="absolute -left-4 -top-8 h-40 w-40 text-brass/10 sm:-left-6 sm:h-56 sm:w-56 lg:-left-8 lg:h-72 lg:w-72"
        strokeWidth={0.5}
      />

      <div className="relative grid gap-10 pl-0 lg:grid-cols-12 lg:gap-16 lg:pl-20">
        <div className="lg:col-span-2">
          <Stars rating={review.rating} size="md" />
        </div>

        <div className="lg:col-span-10">
          <blockquote className="font-display italic leading-[1.15] text-cream">
            <span className="text-[clamp(1.75rem,3.5vw,3rem)]">
              <span aria-hidden>„</span>
              {review.quote}
              <span aria-hidden>"</span>
            </span>
          </blockquote>

          <figcaption className="mt-10 flex items-center gap-6 border-t border-stone-700/60 pt-6">
            <cite className="not-italic">
              <span className="block font-medium text-cream">
                {review.author}
              </span>
              <span className="block text-eyebrow uppercase tracking-eyebrow text-stone-500">
                {review.date}
              </span>
            </cite>
            <span aria-hidden className="h-8 w-px bg-stone-700/80" />
            <GoogleBadge />
          </figcaption>
        </div>
      </div>
    </figure>
  );
}

function SecondaryReview({ review, index }: { review: Review; index: number }) {
  return (
    <article
      className={cn(
        'group relative flex flex-col gap-5 py-10 transition-colors duration-500 ease-cinematic sm:py-12',
        index === 0 ? 'sm:pr-10 lg:pr-0' : 'sm:pl-10 lg:pl-0',
      )}
    >
      <span
        aria-hidden
        className={cn(
          'absolute top-0 h-px bg-stone-700/60 sm:hidden',
          'left-0 right-0',
        )}
      />

      <Stars rating={review.rating} />

      <blockquote className="font-display text-lg italic leading-relaxed text-cream/85 sm:text-xl">
        <span aria-hidden>„</span>
        {review.quote}
        <span aria-hidden>"</span>
      </blockquote>

      <footer className="mt-auto flex items-end justify-between gap-4 pt-2">
        <div className="flex flex-col gap-1">
          <cite className="not-italic font-medium text-cream">
            {review.author}
          </cite>
          <span className="text-eyebrow uppercase tracking-eyebrow text-stone-500">
            {review.date}
          </span>
        </div>
        <GoogleBadge subtle />
      </footer>
    </article>
  );
}

function Stars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const dim = size === 'md' ? 'h-5 w-5' : 'h-4 w-4';
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} von 5 Sternen`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            dim,
            i < rating ? 'fill-brass text-brass' : 'text-stone-700',
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function GoogleBadge({ subtle = false }: { subtle?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-eyebrow uppercase tracking-eyebrow',
        subtle
          ? 'text-stone-500'
          : 'border border-stone-700/80 px-3 py-1.5 text-cream/70',
      )}
    >
      <span aria-hidden className="font-display text-sm italic text-brass">
        G
      </span>
      Google
    </span>
  );
}
