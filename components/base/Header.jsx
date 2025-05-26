/**
 * 頁面頭部導航組件
 * 包含網站標誌、導航選單和語言切換器
 * 支援響應式設計，在移動設備上顯示漢堡選單
 */

'use client';

import React, { useState, useRef } from 'react';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { HiMenu, HiX } from 'react-icons/hi';
import useClickOutside from '@/utils/hooks/useClickOutside';

/**
 * 導航項目配置
 * 每個項目包含：
 * - href: 導航連結
 * - translationKey: 翻譯鍵值
 */
const NAV_ITEMS = [
  { href: '/about', translationKey: 'about' },
  { href: '/projects', translationKey: 'projects' },
];

/**
 * 頭部導航組件
 * @param {Object} props - 組件屬性
 * @param {string} props.locale - 當前語言
 */
const Header = ({ locale }) => {
  const t = useTranslations('common.Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // 使用自定義 hook 處理點擊外部關閉選單
  useClickOutside(menuRef, event => {
    if (isMenuOpen && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  });

  /**
   * 渲染導航項目
   * @param {boolean} isMobile - 是否為移動版選單
   */
  const renderNavItems = (isMobile = false) => {
    return NAV_ITEMS.map(({ href, translationKey }) => (
      <li key={href}>
        <Link
          href={href}
          className={isMobile ? 'block py-2' : 'link'}
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          {t(translationKey)}
        </Link>
      </li>
    ));
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between p-4">
        {/* 網站標誌 */}
        <div className="min-w-fit">
          <Link href="/" className="text-base font-bold md:text-xl">
            Website
          </Link>
        </div>

        {/* 桌面版導航選單 */}
        <ul className="hidden gap-5 rounded-full bg-gray-950/40 px-8 py-2 md:flex">
          {renderNavItems()}
        </ul>

        {/* 桌面版語言切換器 */}
        <div className="hidden md:block">
          <LanguageSwitcher locale={locale} />
        </div>

        {/* 移動版選單按鈕 */}
        <button
          ref={buttonRef}
          className="block cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* 移動版導航選單 */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-gray-900/80 p-4 shadow-lg backdrop-blur-sm md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {renderNavItems(true)}
              <li className="border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="flex items-center justify-end">
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
