import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AGB',
  robots: { index: true, follow: true },
};

export default function AgbPage() {
  return (
    <LegalPage eyebrow="Rechtliches" title="AGB" updated="06.06.2026">
      <h2>Allgemeine Hinweise</h2>
      <p>
        Für die Inanspruchnahme unserer Dienstleistungen im Friseursalon gelten
        die gesetzlichen Bestimmungen des Bürgerlichen Gesetzbuchs (BGB) sowie die
        nachfolgenden Hinweise. Mit einer Terminbuchung erkennen Sie diese
        Bedingungen an.
      </p>

      <h2>Terminvereinbarung</h2>
      <p>
        Termine können telefonisch, per E-Mail oder über das Kontaktformular
        unserer Website vereinbart werden. Eine Buchung ist verbindlich, sobald
        wir diese ausdrücklich bestätigt haben.
      </p>

      <h2>Stornierung und Nichterscheinen</h2>
      <p>
        Bitte sage uns Bescheid, wenn du einen Termin nicht wahrnehmen kannst,
        idealerweise mindestens 24 Stunden im Voraus. So können wir die freie Zeit
        an andere Gäste vergeben.
      </p>
      <p>
        Detaillierte Stornoregelungen werden derzeit finalisiert. Bei Fragen zu
        Stornierungen melde dich gerne direkt bei uns unter{' '}
        <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
      </p>

      <h2>Preise und Zahlung</h2>
      <p>
        Die jeweils gültigen Preise findest du auf unserer Preisliste im Salon.
        Die Zahlung erfolgt vor Ort nach der Behandlung, in bar oder per
        Kartenzahlung.
      </p>

      <h2>Gewährleistung</h2>
      <p>
        Solltest du mit dem Ergebnis nicht vollumfänglich zufrieden sein, sprich
        uns bitte direkt im Salon oder unmittelbar nach deinem Besuch darauf an.
        Wir nehmen das ernst und finden eine Lösung.
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
