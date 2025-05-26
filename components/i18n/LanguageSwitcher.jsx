'use client';

import React, { useRef, useState } from 'react';
import { usePathname } from '@/i18n/navigation';
import { AiOutlineGlobal } from 'react-icons/ai'; // 地球儀圖示
import { availableLocales } from '@/i18n/localeConfig';
import useClickOutside from '@/utils/hooks/useClickOutside';
import LanguageCard from './LanguageCard';

const LanguageSwitcher = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);
  const pathname = usePathname();

  useClickOutside(switcherRef, () => setIsOpen(false));

  return (
    <div className="relative w-fit min-w-24" ref={switcherRef}>
      <button
        className="flex w-full items-center gap-1 px-4 py-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineGlobal />
        <span>{availableLocales.find(l => l.code === locale)?.label ?? locale}</span>
      </button>

      {/* click btn to show LanguageCard list */}
      {isOpen && (
        <div className="absolute top-10 right-0 z-50 flex w-full flex-col items-center gap-2 rounded-lg shadow-lg backdrop-blur-sm">
          {availableLocales.map(l => (
            <LanguageCard
              key={l.code}
              locale={l}
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
