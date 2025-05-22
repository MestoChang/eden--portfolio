'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Tineline from '@/components/sections/about/Tineline';

const AboutMePage = () => {
  const t = useTranslations('About');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl">{t('description')}</p>
      </div>
      <Tineline />
    </div>
  );
};

export default AboutMePage;
