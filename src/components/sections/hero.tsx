import { BookingButton } from '@/components/ui/booking-button';
import { HeroBackground } from './hero-background';
import { HeroHeadline } from './hero-headline';
import { HeroScrollIndicator } from './hero-scroll-indicator';

type HeroProps = {
  imageSrc?: string;
  videoSrc?: string;
};

export function Hero({ imageSrc, videoSrc }: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-espresso-deep"
    >
      <HeroBackground
        src={imageSrc}
        videoSrc={videoSrc}
        alt="Italienischer Friseur, Hände führen die Schere im warmen Tungsten-Licht"
      />

      <div className="relative z-10 container-default pb-28 pt-40 md:pb-40">
        <p className="eyebrow mb-8 animate-fade-up [animation-delay:0.15s]">
          Friseur · Demo-Seite
        </p>

        <HeroHeadline />

        <p className="mt-10 max-w-prose font-display text-lg italic text-cream/85 animate-fade-up [animation-delay:1.6s] md:text-xl">
          Forbice, mano, pazienza.
        </p>
        <p className="mt-4 max-w-prose text-base text-cream/65 animate-fade-up [animation-delay:1.7s]">
          Friseurhandwerk seit{' '}
          <span className="text-brass">[JAHR]</span> mitten in der Stadt.
        </p>

        <div className="mt-12 flex flex-col gap-4 animate-fade-up [animation-delay:1.8s] sm:flex-row sm:items-center">
          <BookingButton />
          <BookingButton href="#leistungen" variant="ghost">
            Unsere Leistungen
          </BookingButton>
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
