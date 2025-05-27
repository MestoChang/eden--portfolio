import React from 'react';
import { useTranslations } from 'next-intl';
import { TitleHeader } from '@/components/base';

const TechStack = () => {
  const t = useTranslations('home.techStack');

  return (
    <section className="section">
      <TitleHeader title={t('title')} />
    </section>
  );
};

export default TechStack;
