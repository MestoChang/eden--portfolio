'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const t = useTranslations('error.NotFound');
  const locale = useLocale();
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="mt-4 text-xl">{t('title')}</p>
      <p className="mt-2">{t('description')}</p>

      <button
        onClick={() => router.push(`/${locale}`)}
        className="bg-secondary text-primary mt-6 rounded px-6 py-2"
      >
        {t('backHome')}
      </button>
    </div>
  );
}
