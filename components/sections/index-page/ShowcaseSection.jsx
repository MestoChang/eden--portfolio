import React from 'react';
import { useTranslations } from 'next-intl';

const ShowcaseSection = () => {
  const t = useTranslations('home.showcase');
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{t('title')}</h1>
    </div>
  );
};

export default ShowcaseSection;
