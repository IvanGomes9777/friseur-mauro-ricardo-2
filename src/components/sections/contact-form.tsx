'use client';

import { Send } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import { initialState, sendContact } from '@/app/actions/contact';
import { cn } from '@/lib/utils';

const inputClass =
  'w-full border-b border-stone-700/80 bg-transparent py-3 text-cream placeholder:text-stone-500 transition-colors focus:border-brass focus:outline-none';

export function ContactForm() {
  const [state, formAction] = useFormState(sendContact, initialState);

  return (
    <form action={formAction} noValidate className="flex flex-col gap-7">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-7 sm:grid-cols-2">
        <Field
          name="name"
          label="Name"
          required
          autoComplete="name"
          minLength={2}
        />
        <Field
          name="email"
          type="email"
          label="E-Mail"
          required
          autoComplete="email"
        />
        <Field name="phone" type="tel" label="Telefon (optional)" autoComplete="tel" />
        <Field name="wish" label="Wunschtermin (optional)" placeholder="z. B. Fr 11.07., nachmittags" />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-eyebrow uppercase tracking-eyebrow text-cream/70">
          Deine Nachricht
        </span>
        <textarea
          name="message"
          required
          minLength={5}
          rows={4}
          placeholder="Welche Leistung interessiert dich? Gibt es etwas, das wir vorab wissen sollten?"
          className={cn(inputClass, 'resize-y leading-relaxed')}
        />
      </label>

      <p className="text-xs text-stone-500">
        Mit dem Absenden willigst du in die Verarbeitung deiner Angaben zur
        Bearbeitung deiner Anfrage ein. Details:{' '}
        <a
          href="/datenschutz"
          className="text-brass underline-offset-4 hover:underline"
        >
          Datenschutz
        </a>
        .
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        {state.status !== 'idle' && (
          <p
            role="status"
            className={cn(
              'text-sm',
              state.status === 'success' ? 'text-brass' : 'text-terracotta',
            )}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  minLength?: number;
};

function Field({ name, label, type = 'text', required, autoComplete, placeholder, minLength }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-eyebrow uppercase tracking-eyebrow text-cream/70">
        {label}
        {required && <span aria-hidden className="ml-1 text-brass">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        minLength={minLength}
        className={inputClass}
      />
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-3 border border-brass bg-brass px-7 py-3 text-eyebrow uppercase tracking-eyebrow font-medium text-espresso-deep transition-all duration-300 ease-cinematic hover:-translate-y-0.5 hover:bg-brass-deep hover:text-cream disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
    >
      <span>{pending ? 'Wird gesendet ' : 'Anfrage senden'}</span>
      <Send
        className={cn(
          'h-4 w-4 transition-transform duration-500 ease-cinematic',
          pending ? 'translate-x-2 opacity-50' : 'group-hover:translate-x-1',
        )}
        strokeWidth={1.5}
      />
    </button>
  );
}
