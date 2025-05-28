/**
 * 多語言布局組件
 * 負責處理整個應用程式的多語言支援和基本布局結構
 */

import { NextIntlClientProvider } from 'next-intl';
import { Header, Footer } from '@/components/base';
import { getMessages, handleMessagesError } from '@/i18n/utils';
import '@/app/globals.css';
import ErrorBoundary from '@/components/base/ErrorBoundary';

/**
 * 生成靜態路由參數
 * 定義支援的語言選項
 * @returns {Array} 支援的語言配置陣列
 */
export function generateStaticParams() {
  return [
    { locale: 'en' }, // 英文
    { locale: 'zh-TW' }, // 繁體中文
  ];
}

/**
 * 主要布局組件
 * @param {Object} props - 組件屬性
 * @param {React.ReactNode} props.children - 子組件
 * @param {Object} props.params - 路由參數
 * @returns {JSX.Element} 布局組件
 */
export default async function LocaleLayout({ children, params }) {
  // 解析路由參數
  const awaitedParams = await params;
  const locale = awaitedParams.locale;

  try {
    // 獲取當前語言的翻譯訊息
    const messages = await getMessages(locale);

    return (
      <html className="min-w-[320px]" suppressHydrationWarning>
        <body suppressHydrationWarning>
          {/* 錯誤邊界處理 */}
          <ErrorBoundary locale={locale}>
            {/* 多語言提供者 */}
            <NextIntlClientProvider locale={locale} messages={messages}>
              <div>
                {/* 頁面頭部 */}
                <Header locale={locale} />
                {/* 主要內容區域 */}
                <main className="mx-auto max-w-7xl">{children}</main>
                {/* 頁面底部 */}
                <Footer />
              </div>
            </NextIntlClientProvider>
          </ErrorBoundary>
        </body>
      </html>
    );
  } catch (error) {
    // 錯誤處理
    handleMessagesError(error);
  }
}
