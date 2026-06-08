import type { Metadata, Viewport } from 'next';
import { Footer } from '@/components/sections/footer';
import { Navbar } from '@/components/sections/navbar';
import { fontDisplay, fontSans } from '@/lib/fonts';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: ['Friseur', 'Haarschnitt', 'Salon', 'Demo'],
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.fullName,
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.fullName,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1A1410',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={cn(fontSans.variable, fontDisplay.variable)}>
      <body className="bg-espresso text-cream antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-brass focus:px-4 focus:py-2 focus:font-medium focus:text-espresso-deep"
        >
          Zum Hauptinhalt springen
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
