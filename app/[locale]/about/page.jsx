/**
 * 關於頁面組件
 * 包含個人簡介、時間軸和聯絡表單
 */

'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Timeline } from '@/components/sections/about';

const AboutMePage = () => {
  const t = useTranslations('about');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* 個人簡介區塊 */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl">{t('description')}</p>
      </div>

      {/* 時間軸區塊 */}
      <Timeline />
    </div>
  );
};

export default AboutMePage;
