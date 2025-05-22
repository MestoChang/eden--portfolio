import React from 'react';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { Link } from '@/i18n/navigation';

const Header = () => {
  return (
    <header className="flex p-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div>
          <Link href="/" className="font-bold">
            Website Name
          </Link>
        </div>

        <ul className="flex gap-3">
          <li>section</li>
          <li>section</li>
          <li>section</li>
        </ul>

        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
