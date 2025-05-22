import React from 'react';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <header className="flex p-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div>
          <Link href="/" className="font-bold">
            Website Name
          </Link>
        </div>

        <ul className="flex gap-3">
          <li>
            <Link href="/about">{t('about')}</Link>
          </li>
          <li>
            <Link href="/projects">{t('projects')}</Link>
          </li>
        </ul>

        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
