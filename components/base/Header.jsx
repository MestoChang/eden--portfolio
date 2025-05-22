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
          <Link href="/" className="text-xl font-bold">
            Website Name
          </Link>
        </div>

        <ul className="flex gap-5 rounded-full bg-gray-950/30 px-8 py-2">
          <li>
            <Link href="/about" className="link">
              {t('about')}
            </Link>
          </li>
          <li>
            <Link href="/projects" className="link">
              {t('projects')}
            </Link>
          </li>
        </ul>

        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
