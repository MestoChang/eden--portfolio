import React from 'react';
import { useTranslations } from 'next-intl';
import TitleHeader from '@/components/base/TitleHeader';

const ShowcaseSection = () => {
  const t = useTranslations('home.showcase');

  return (
    <section className="section">
      <TitleHeader title={t('title')} />
    </section>
  );
};

export default ShowcaseSection;
