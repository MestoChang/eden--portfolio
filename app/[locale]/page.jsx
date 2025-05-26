'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { HeroSection, ShowcaseSection, TechStack } from '@/components/sections/index-page/index';
import NotFound from './not-found';

const HomePage = () => {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      <NotFound />
      <HeroSection />
      <ShowcaseSection />
      <TechStack />
    </div>
  );
};

export default HomePage;
