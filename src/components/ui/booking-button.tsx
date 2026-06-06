import Link from 'next/link';
import { cn } from '@/lib/utils';

type BookingButtonProps = {
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  children?: React.ReactNode;
};

export function BookingButton({
  href = '#kontakt',
  variant = 'primary',
  className,
  children = 'Termin buchen',
}: BookingButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-eyebrow uppercase tracking-eyebrow font-medium transition-all duration-300 ease-cinematic focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass';

  const variants = {
    primary:
      'bg-brass text-espresso-deep shadow-[0_0_0_0_rgba(201,169,97,0)] hover:bg-brass-deep hover:text-cream hover:shadow-[0_8px_30px_-4px_rgba(201,169,97,0.45)] hover:-translate-y-0.5',
    ghost:
      'border border-brass/40 text-brass hover:border-brass hover:bg-brass hover:text-espresso-deep',
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
