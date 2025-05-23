import React from 'react';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations('home.hero');

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{t('title')}</h1>
    </div>
  );
};

export default HeroSection;
