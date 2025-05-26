/**
 * 多語言路由設定
 * 定義應用程式支援的語言和預設語言設定
 *
 * 主要功能：
 * - 設定支援的語言列表
 * - 指定預設語言
 * - 提供路由配置給其他模組使用
 */

import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 支援的語言列表
  locales: ['en', 'zh-TW'],

  // 預設語言
  defaultLocale: 'en',
});
