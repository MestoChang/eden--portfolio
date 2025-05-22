import React from 'react';
import { useTranslations } from 'next-intl';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socialIcons = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/your-profile' },
  { icon: FaGithub, href: 'https://www.github.com/your-profile' },
];

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="flex px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="flex gap-4">
          {socialIcons.map(icon => (
            <a key={icon.href} href={icon.href} className="hover:text-primary transition-all">
              <icon.icon size={24} />
            </a>
          ))}
        </div>
        <span>{t('copyright')}</span>
      </div>
    </footer>
  );
};

export default Footer;
