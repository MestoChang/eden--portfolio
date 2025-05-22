import React from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="flex px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div>Social icons</div>
        <span>{t('copyright')}</span>
      </div>
    </footer>
  );
};

export default Footer;
