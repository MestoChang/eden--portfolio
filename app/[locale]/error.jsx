'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  const t = useTranslations('Error');

  useEffect(() => {
    // 可以將錯誤記錄到錯誤報告服務
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">{t('title')}</h2>
      <p className="mt-4 text-xl">{t('description')}</p>
      <button
        onClick={reset}
        className="bg-primary hover:bg-primary/90 mt-8 rounded-md px-4 py-2 text-white transition-colors"
      >
        {t('tryAgain')}
      </button>
    </div>
  );
}
