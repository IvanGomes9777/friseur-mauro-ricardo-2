import { Inter, Playfair_Display } from 'next/font/google';

/**
 * Font loading note (GDPR):
 * next/font automatically self-hosts these fonts at build time.
 * Google's CDN is NOT contacted at runtime — fonts are downloaded
 * during `next build` and served from the same origin as the site,
 * which satisfies German "Schrems II" / Google Fonts GDPR rulings.
 *
 * Verify with: `grep -r "fonts.gstatic" .next/` after build → 0 hits.
 */

export const fontSans = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

export const fontDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});
