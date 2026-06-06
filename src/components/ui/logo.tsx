import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Mauro Ricardo, zur Startseite"
      className={cn(
        'group inline-flex items-baseline gap-2 leading-none transition-colors',
        className,
      )}
    >
      <span className="font-display text-xl italic tracking-tightest text-cream sm:text-2xl">
        Mauro<span className="text-brass">.</span>Ricardo
      </span>
      <span className="hidden text-eyebrow uppercase tracking-eyebrow text-stone-500 transition-colors group-hover:text-brass sm:inline">
        100% Italy
      </span>
    </Link>
  );
}
