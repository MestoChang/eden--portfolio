'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('error.NotFound');

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="mt-4 text-xl">{t('title')}</p>
      <p className="mt-2 text-gray-600">{t('description')}</p>
      <Link
        href="/"
        className="bg-primary hover:bg-primary/90 mt-8 rounded-md px-4 py-2 text-white transition-colors"
      >
        {t('backHome')}
      </Link>
    </div>
  );
}
