'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { AiOutlineGlobal } from 'react-icons/ai'; // 地球儀圖示
import Image from 'next/image';

const availableLocales = [
  // 支持語系
  {
    code: 'zh-TW',
    label: '中文',
    flagsCode: '🇹🇼',
    flagImg: '/flags/taiwan_flag.png', // 國旗圖片路徑
  },
  {
    code: 'en',
    label: 'English',
    flagsCode: '🇺🇸',
    flagImg: '/flags/us_flag.png',
  },
];

const LanguageCard = ({ locale, currentPath, onClick }) => {
  return (
    <Link
      href={currentPath}
      locale={locale.code}
      className="bg-secondary/50 hover:bg-background/50 hover:text-primary flex w-full items-center justify-center gap-2 rounded px-4 py-2 text-sm text-white transition-all"
      onClick={onClick}
    >
      <Image
        src={locale.flagImg}
        alt={locale.label}
        width={12}
        height={12}
        className="h-auto w-4"
        // tailwind: w-5 = 20px
      />
      {locale.label}
    </Link>
  );
};

const LanguageSwitcher = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);
  const pathname = usePathname();

  // ✅ 點擊外部關閉邏輯
  useEffect(() => {
    const handleClickOutside = event => {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-fit min-w-24" ref={switcherRef}>
      <button
        className="flex w-full cursor-pointer items-center justify-center gap-1 px-4 py-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineGlobal />
        <span>{availableLocales.find(l => l.code === locale)?.label ?? locale}</span>
      </button>

      {/* click btn to show LanguageCard list */}
      {isOpen && (
        <div className="bg-background absolute top-10 right-0 z-50 flex w-full flex-col items-center gap-2 rounded-lg shadow-lg backdrop-blur-sm">
          {availableLocales.map(locale => (
            <LanguageCard
              key={locale.code}
              locale={locale}
              currentPath={pathname}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
