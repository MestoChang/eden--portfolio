import React from 'react';
import { Link } from '@/i18n/navigation';

const LanguageSwitcher = () => {
  return (
    <div className="flex gap-2">
      <Link
        href="/"
        locale="en"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        English
      </Link>
      <Link
        href="/"
        locale="zh-Hant"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        繁體中文
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
