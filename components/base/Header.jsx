import React from 'react';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

const Header = () => {
  return (
    <header className="flex p-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div>Website Name</div>

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
