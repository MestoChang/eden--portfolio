'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Timeline from '@/components/sections/about/Timeline';

const AboutMePage = () => {
  const t = useTranslations('about');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl">{t('description')}</p>
      </div>
      <Timeline />
    </div>
  );
};

export default AboutMePage;
