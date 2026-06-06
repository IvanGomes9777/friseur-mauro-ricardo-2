import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <div className="pt-32 pb-20 sm:pt-40">
      <article className="container-narrow">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-eyebrow uppercase tracking-eyebrow text-cream/60 transition-colors hover:text-brass"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
          Zur Startseite
        </Link>

        <header className="mt-12 border-b border-stone-700/60 pb-10">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-display text-display italic text-cream">{title}</h1>
          <p className="mt-6 text-eyebrow uppercase tracking-eyebrow text-stone-500">
            Stand: {updated}
          </p>
        </header>

        <div className="legal-prose mt-10">{children}</div>
      </article>
    </div>
  );
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="placeholder">[Platzhalter: {children}]</span>;
}
