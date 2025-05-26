/**
 * 頁面底部組件
 * 包含社交媒體連結和版權信息
 */

import React from 'react';
import { useTranslations } from 'next-intl';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

/**
 * 社交媒體圖標配置
 * 每個項目包含：
 * - icon: 圖標組件
 * - href: 社交媒體連結
 * - label: 無障礙標籤文字
 */
const SOCIAL_ICONS = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/your-profile',
    label: 'LinkedIn Profile',
  },
  {
    icon: FaGithub,
    href: 'https://www.github.com/your-profile',
    label: 'GitHub Profile',
  },
];

/**
 * 頁面底部組件
 */
const Footer = () => {
  const t = useTranslations('common.Footer');

  /**
   * 渲染社交媒體圖標
   */
  const renderSocialIcons = () => {
    return SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-base transition-all md:text-xl"
        aria-label={`Visit ${label}`}
      >
        <Icon />
      </a>
    ));
  };

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-xs md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* 社交媒體圖標區域 */}
          <div className="flex gap-4">{renderSocialIcons()}</div>

          {/* 版權信息 */}
          <span className="text-center text-gray-600 dark:text-gray-400">{t('copyright')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
