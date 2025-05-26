'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Error({ error, reset }) {
  const t = useTranslations('error.Error');

  useEffect(() => {
    // 可以將錯誤記錄到錯誤追蹤服務
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold">{t('title')}</h2>
      <p className="mb-4">{error.description}</p>
    </div>
  );
}
