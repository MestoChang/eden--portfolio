/**
 * 首頁組件
 * 整合了首頁的主要區塊：
 * - HeroSection: 主要展示區
 * - ShowcaseSection: 作品展示區
 * - TechStack: 技術棧展示區
 */

'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { HeroSection, ShowcaseSection, TechStack } from '@/components/sections/index-page';

const HomePage = () => {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      {/* 主要展示區 */}
      <HeroSection />

      {/* 作品展示區 */}
      <ShowcaseSection />

      {/* 技術棧展示區 */}
      <TechStack />
    </div>
  );
};

export default HomePage;
