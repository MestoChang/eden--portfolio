import React from 'react';
import { useTranslations } from 'next-intl';
import { TitleHeader } from '@/components/base';

const HeroSection = () => {
  const t = useTranslations('home.hero');

  return (
    <section className="section">
      <TitleHeader title={t('title')} sub="💬 Have questions or ideas? Let’s talk! 🚀" />
    </section>
  );
};

export default HeroSection;
