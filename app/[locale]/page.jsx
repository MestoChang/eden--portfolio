'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { HeroSection, ShowcaseSection } from '@/components/sections/index-page/index';

const HomePage = () => {
  const t = useTranslations('home');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl">{t('description')}</p>
      </div>

      <HeroSection />
      <ShowcaseSection />
    </div>
  );
};

export default HomePage;
