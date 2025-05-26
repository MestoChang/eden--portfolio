'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { HeroSection, ShowcaseSection, TechStack } from '@/components/sections/index-page/index';

const HomePage = () => {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ShowcaseSection />
      <TechStack />
    </div>
  );
};

export default HomePage;
