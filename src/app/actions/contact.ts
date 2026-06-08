'use server';

import { site } from '@/lib/site';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export const initialState: ContactState = { status: 'idle', message: '' };

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const sanitize = (value: string, max = 2000) => value.trim().slice(0, max);

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honey = formData.get('website')?.toString() ?? '';
  if (honey.length > 0) {
    return { status: 'success', message: 'Danke für deine Anfrage.' };
  }

  const name = sanitize(formData.get('name')?.toString() ?? '', 120);
  const email = sanitize(formData.get('email')?.toString() ?? '', 200);
  const phone = sanitize(formData.get('phone')?.toString() ?? '', 60);
  const wish = sanitize(formData.get('wish')?.toString() ?? '', 120);
  const message = sanitize(formData.get('message')?.toString() ?? '', 4000);

  if (name.length < 2 || !isValidEmail(email) || message.length < 5) {
    return {
      status: 'error',
      message: 'Bitte fülle Name, eine gültige E-Mail und eine kurze Nachricht aus.',
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? site.contact.email;
  const from = process.env.CONTACT_EMAIL_FROM ?? 'website@example.com';

  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY not set — logging only');
    console.info('[contact] would send', { to, from, name, email, phone, wish });
    return {
      status: 'success',
      message: 'Danke! Wir melden uns in Kürze bei dir.',
    };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Neue Anfrage von ${name}`,
        text: [
          `Name: ${name}`,
          `E-Mail: ${email}`,
          phone && `Telefon: ${phone}`,
          wish && `Wunschtermin: ${wish}`,
          '',
          'Nachricht:',
          message,
        ]
          .filter(Boolean)
          .join('\n'),
      }),
    });

    if (!res.ok) {
      console.error('[contact] Resend HTTP', res.status, await res.text());
      return {
        status: 'error',
        message: 'Beim Senden ist etwas schiefgelaufen. Bitte ruf uns einfach an.',
      };
    }

    return {
      status: 'success',
      message: 'Danke! Wir melden uns in Kürze bei dir.',
    };
  } catch (err) {
    console.error('[contact] fetch failed', err);
    return {
      status: 'error',
      message: 'Beim Senden ist etwas schiefgelaufen. Bitte ruf uns einfach an.',
    };
  }
}
