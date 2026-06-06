import { ArrowUpRight, Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { getReviewsData } from '@/lib/google-reviews';
import type { Review } from '@/lib/reviews';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export async function Reviews() {
  const { reviews, meta } = await getReviewsData();
  const ratingLabel = meta.average.toFixed(1).replace('.', ',');

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

        <ul className="mt-16 hidden gap-px overflow-hidden border border-stone-700/60 bg-stone-700/60 lg:mt-20 lg:grid lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} as="li" delay={i * 0.08} className="h-full">
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </ul>

        <div
          aria-label="Bewertungen, horizontal scrollbar"
          className="-mx-6 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-[88%] shrink-0 snap-center border border-stone-700/60 sm:w-[70%]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group relative flex h-full flex-col gap-6 bg-espresso p-8 transition-colors duration-500 ease-cinematic hover:bg-espresso-deep sm:p-10">
      <Quote
        aria-hidden
        className="absolute right-6 top-6 h-12 w-12 text-stone-700/60 transition-colors duration-500 group-hover:text-brass/20 sm:right-8 sm:top-8"
        strokeWidth={1}
      />

      <Stars rating={review.rating} />

      <blockquote className="flex-1 font-display text-lg italic leading-relaxed text-cream/90 sm:text-xl">
        <span aria-hidden>„</span>
        {review.quote}
        <span aria-hidden>"</span>
      </blockquote>

      <footer className="flex items-end justify-between gap-4 border-t border-stone-700/60 pt-5">
        <div className="flex flex-col gap-1">
          <cite className="not-italic font-medium text-cream">{review.author}</cite>
          <span className="text-eyebrow uppercase tracking-eyebrow text-stone-500">
            {review.date}
          </span>
        </div>
        <GoogleBadge />
      </footer>
    </article>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} von 5 Sternen`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < rating ? 'fill-brass text-brass' : 'text-stone-700',
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <span className="inline-flex items-center gap-2 border border-stone-700/80 px-3 py-1.5 text-eyebrow uppercase tracking-eyebrow text-cream/70">
      <span aria-hidden className="font-display text-sm italic text-brass">
        G
      </span>
      Google
    </span>
  );
}
