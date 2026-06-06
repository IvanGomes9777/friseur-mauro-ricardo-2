'use client';

import { Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const CONSENT_KEYS = ['mr-maps-consent'];

export function CookieSettingsButton() {
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (!feedback) return;
    const id = setTimeout(() => setFeedback(null), 4000);
    return () => clearTimeout(id);
  }, [feedback]);

  const reset = () => {
    try {
      for (const key of CONSENT_KEYS) {
        window.localStorage.removeItem(key);
      }
      setFeedback('Cookie-Einstellungen zurückgesetzt');
      window.location.reload();
    } catch {
      setFeedback('Aktion fehlgeschlagen');
    }
  };

  return (
    <button
      type="button"
      onClick={reset}
      className={cn(
        'inline-flex items-center gap-2 transition-colors',
        feedback ? 'text-brass' : 'text-cream/60 hover:text-brass',
      )}
    >
      <Cookie className="h-3 w-3" strokeWidth={1.5} />
      <span>{feedback ?? 'Cookie-Einstellungen'}</span>
    </button>
  );
}
