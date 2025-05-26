'use client';

import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('error.NotFound');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="mt-4 text-xl">{t('title')}</p>
      <p className="mt-2">{t('description')}</p>
    </div>
  );
}
