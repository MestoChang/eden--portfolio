'use client';

import React, { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = ({ locale }) => {
  const t = useTranslations('common.Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // click outside to close menu
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between p-4">
        {/* Logo */}
        <div className="min-w-fit">
          <Link href="/" className="text-base font-bold md:text-xl">
            Website Name
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden gap-5 rounded-full bg-gray-950/30 px-8 py-2 md:flex">
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

        <div className="hidden md:block">
          <LanguageSwitcher locale={locale} />
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="block cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-gray-900 p-4 shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/about" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                  {t('projects')}
                </Link>
              </li>
              <li className="border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <LanguageSwitcher locale={locale} />
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
