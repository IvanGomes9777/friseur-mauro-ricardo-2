import type { Metadata } from 'next';
import { LegalPage, Placeholder } from '@/components/legal/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage eyebrow="Rechtliches" title="Impressum" updated="06.06.2026">
      <h2>Angaben gemäß § 5 TMG</h2>
      <address>
        <strong>{site.fullName}</strong>
        <br />
        <Placeholder>Vor- und Nachname des Inhabers</Placeholder>
        <br />
        {site.contact.address.street}
        <br />
        {site.contact.address.postalCode} {site.contact.address.city}
        <br />
        {site.contact.address.country}
      </address>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={site.contact.phoneHref}>{site.contact.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{' '}
        <Placeholder>DE000000000</Placeholder>
      </p>
      <p>
        Alternativ Steuernummer: <Placeholder>000/0000/0000</Placeholder>
      </p>

      <h2>Aufsichtsbehörde / Zuständige Kammer</h2>
      <address>
        Handwerkskammer Münster
        <br />
        Bismarckallee 1
        <br />
        48151 Münster
        <br />
        <a href="https://www.hwk-muenster.de" target="_blank" rel="noopener noreferrer">
          hwk-muenster.de
        </a>
      </address>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        <strong>Berufsbezeichnung:</strong> <Placeholder>Friseurmeister/-in</Placeholder>
        <br />
        <strong>Verleihender Staat:</strong> Bundesrepublik Deutschland
      </p>
      <p>
        <strong>Berufsrechtliche Regelungen:</strong>
      </p>
      <ul>
        <li>Handwerksordnung (HwO), Anlage A</li>
        <li>Gesetz zur Ordnung des Handwerks</li>
      </ul>
      <p>
        Einsehbar unter{' '}
        <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer">
          gesetze-im-internet.de/hwo
        </a>
        .
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        <Placeholder>Name, Anschrift wie oben</Placeholder>
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
        (OS) bereit:{' '}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
        wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
        der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
        bzw. Erstellers.
      </p>
    </LegalPage>
  );
}
