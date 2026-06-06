import type { Metadata } from 'next';
import { LegalPage, Placeholder } from '@/components/legal/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage eyebrow="Rechtliches" title="Datenschutzerklärung" updated="06.06.2026">
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <address>
        <strong>{site.fullName}</strong>
        <br />
        <Placeholder>Vor- und Nachname des Inhabers</Placeholder>
        <br />
        {site.contact.address.street}
        <br />
        {site.contact.address.postalCode} {site.contact.address.city}
        <br />
        Telefon: <a href={site.contact.phoneHref}>{site.contact.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </address>

      <h2>2. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
      <p>
        Zuständige Aufsichtsbehörde: Landesbeauftragte für Datenschutz und
        Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213
        Düsseldorf —{' '}
        <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
          ldi.nrw.de
        </a>
        .
      </p>

      <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <h3>3.1 Beim Besuch der Website (Server-Log-Dateien)</h3>
      <p>
        Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch
        Daten in sog. Server-Log-Dateien erfasst:
      </p>
      <ul>
        <li>IP-Adresse (anonymisiert)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Browsertyp und Betriebssystem</li>
        <li>Referrer-URL</li>
      </ul>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an sicherem Betrieb der Website).
      </p>

      <h3>3.2 Kontaktformular / E-Mail-Kontakt</h3>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden
        Ihre Angaben (Name, E-Mail-Adresse, ggf. Telefon, Nachricht) zur
        Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen
        gespeichert. <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (Anbahnung Vertrag) bzw. lit. f DSGVO.
      </p>
      <p>
        <strong>Speicherdauer:</strong> bis Abschluss der Anfrage; gesetzliche
        Aufbewahrungspflichten bleiben unberührt.
      </p>

      <h2>4. Hosting</h2>
      <p>
        Diese Website wird gehostet bei <strong>Vercel Inc.</strong>, 340 S Lemon
        Ave #4133, Walnut, CA 91789, USA. Vercel verarbeitet die Daten in
        Rechenzentren in der EU bzw. den USA. Für die Datenübermittlung in die USA
        bestehen Standardvertragsklauseln (SCC) gemäß Art. 46 DSGVO sowie der EU-US
        Data Privacy Framework.
      </p>
      <p>
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung Vercel
        </a>{' '}
        ·{' '}
        <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer">
          Data Processing Addendum
        </a>
      </p>

      <h2>5. Cookies und ähnliche Technologien</h2>
      <p>
        Wir verwenden technisch notwendige Cookies, die für den Betrieb der
        Website erforderlich sind. Diese werden ohne Ihre Einwilligung gesetzt
        (§ 25 Abs. 2 Nr. 2 TTDSG).
      </p>
      <p>
        Optionale Funktionen (insbesondere die Google-Maps-Karte) werden
        ausschließlich nach Ihrer ausdrücklichen Einwilligung geladen
        (§ 25 Abs. 1 TTDSG / Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre
        Einwilligung jederzeit über den Link <strong>„Cookie-Einstellungen"</strong>{' '}
        im Footer widerrufen.
      </p>

      <h2>6. Google Maps</h2>
      <p>
        Auf unserer Kontakt-Sektion binden wir Google Maps zur Anzeige des
        Standorts ein. Anbieter: <strong>Google Ireland Limited</strong>, Gordon
        House, Barrow Street, Dublin 4, Irland. Google Maps wird{' '}
        <strong>erst nach Ihrer Einwilligung</strong> geladen. Vorher sehen Sie
        einen Platzhalter. Bei Einwilligung werden u. a. Ihre IP-Adresse an Google
        übertragen.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
        Datenschutzerklärung:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>
      </p>

      <h2>7. Webfonts (lokal gehostet)</h2>
      <p>
        Wir verwenden die Schriftarten <strong>Playfair Display</strong> und{' '}
        <strong>Inter</strong>. Diese Schriften werden ausschließlich von unserem
        eigenen Server ausgeliefert. Es findet{' '}
        <strong>keine Verbindung zu Google-Servern</strong> statt. Es werden keine
        Daten an Dritte übermittelt.
      </p>

      <h2>8. Google Bewertungen (Places API)</h2>
      <p>
        Sofern aktiviert, rufen wir die aktuellen Google-Bewertungen für unseren
        Salon über die <strong>Google Places API</strong> ab. Der Abruf erfolgt{' '}
        <strong>serverseitig</strong> — es werden keine personenbezogenen Daten
        des Website-Besuchers an Google übermittelt. Es wird lediglich der
        bestehende, öffentliche Inhalt unseres Google-Business-Profils angezeigt.
      </p>

      <h2>9. Kontaktformular-Versand (Resend)</h2>
      <p>
        Anfragen aus dem Kontaktformular werden über den Dienstleister{' '}
        <strong>Resend</strong> (Resend Inc., 2261 Market Street #5039, San
        Francisco, CA 94114, USA) per E-Mail an uns versendet. Es wurde eine
        Vereinbarung zur Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen.
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>10. Auftragsverarbeitung</h2>
      <p>
        Mit allen Auftragsverarbeitern (Vercel, ggf. Resend) wurden Verträge zur
        Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen.
      </p>

      <h2>11. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Gründen der Sicherheit eine SSL-/TLS-Verschlüsselung.
        Erkennbar am „https://" und dem Schloss-Symbol in der Browserzeile.
      </p>

      <h2>12. Aktualität und Änderung dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 2026-06-06.
        Aufgrund geänderter gesetzlicher Anforderungen kann es notwendig werden,
        die Datenschutzerklärung anzupassen.
      </p>
    </LegalPage>
  );
}
