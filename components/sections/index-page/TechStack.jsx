import React from 'react';
import { useTranslations } from 'next-intl';

const TechStack = () => {
  const t = useTranslations('home.techStack');

  return (
    <section className="section">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{t('title')}</h1>
    </section>
  );
};

export default TechStack;
