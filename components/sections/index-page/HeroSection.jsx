import React from 'react';
import { useTranslations } from 'next-intl';
import { TitleHeader } from '@/components/base';

const HeroSection = () => {
  const t = useTranslations('home.hero');

  return (
    <section className="section flex-col gap-8">
      <TitleHeader title={t('title')} />

      <div className="flex items-center gap-3">
        <button className="primary-button">Primary</button>
        <button className="secondary-button">Secondary</button>
      </div>
    </section>
  );
};

export default HeroSection;
