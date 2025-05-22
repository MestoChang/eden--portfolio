'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const Page = () => {
  const t = useTranslations('Index');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl">{t('description')}</p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            locale="en"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            English
          </Link>
          <Link
            href="/"
            locale="zh-Hant"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            繁體中文
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
