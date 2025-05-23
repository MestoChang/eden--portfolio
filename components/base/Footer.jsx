import React from 'react';
import { useTranslations } from 'next-intl';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socialIcons = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/your-profile' },
  { icon: FaGithub, href: 'https://www.github.com/your-profile' },
];

const Footer = () => {
  const t = useTranslations('common.Footer');

  return (
    <footer>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialIcons.map(icon => (
              <a
                key={icon.href}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all"
                aria-label={`Visit ${icon.href}`}
              >
                <icon.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <span className="text-center text-sm text-gray-600 md:text-base dark:text-gray-400">
            {t('copyright')}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
