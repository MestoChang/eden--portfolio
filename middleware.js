/**
 * Next.js 中間件
 * 負責處理多語言路由和重定向
 *
 * 功能：
 * - 設定支援的語言列表
 * - 設定預設語言
 * - 處理語言前綴
 * - 處理路由匹配
 */
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 支援的語言列表
  locales: ['en', 'zh-TW'],
  // 預設語言
  defaultLocale: 'zh-TW',
  // 始終顯示語言前綴
  localePrefix: 'always',
});

// 設定中間件的匹配規則
export const config = {
  // 排除 API 路由、Next.js 內部路由和靜態檔案
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
