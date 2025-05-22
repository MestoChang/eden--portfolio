'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { AiOutlineGlobal } from 'react-icons/ai'; // 地球儀圖示
import Image from 'next/image';

const availableLocales = [
  // 支持語系
  {
    code: 'zh-Hant',
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

const LanguageCard = ({ locale, onClick }) => {
  return (
    <Link
      href="/"
      locale={locale.code}
      className="bg-secondary hover:bg-background hover:text-primary flex w-full items-center gap-2 rounded px-4 py-2 text-sm text-white transition-all"
      onClick={onClick}
    >
      <Image src={locale.flagImg} alt={locale.label} width={16} height={16} />
      {locale.label}
    </Link>
  );
};

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switcherRef = useRef(null);

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
    <div className="relative" ref={switcherRef}>
      <button
        className="flex cursor-pointer items-center gap-1 px-4 py-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineGlobal />
        {/* <span>{displayLabel}</span> */}
      </button>

      {/* click btn to show LanguageCard list */}
      {isOpen && (
        <div className="absolute top-10 right-0 flex flex-col items-center gap-2">
          {availableLocales.map(locale => (
            <LanguageCard locale={locale} key={locale.code} onClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
