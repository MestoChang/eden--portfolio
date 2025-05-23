'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import '../globals.css';

export default function Error({ error, reset }) {
  const t = useTranslations('error.Error');

  useEffect(() => {
    // 可以將錯誤記錄到錯誤追蹤服務
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{t('title')}</h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t('description')}</p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 text-white transition-colors"
          >
            {t('tryAgain')}
          </button>
          <Link
            href="/"
            className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            {t('backHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
