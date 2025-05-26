import { NextIntlClientProvider } from 'next-intl';
import { Header, Footer } from '@/components/base';
import { getMessages, handleMessagesError } from '@/i18n/utils';

import '../globals.css';

/**
 * 多語言布局元件
 * 負責處理多語言相關的設定和布局
 * 包括：
 * - 設定當前語言
 * - 載入對應語言的翻譯
 * - 提供語言切換功能
 */
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }];
}

export default async function LocaleLayout({ children, params }) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;

  try {
    const messages = await getMessages(locale);

    return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div>
          <Header locale={locale} />
          <main className="mx-auto max-w-6xl">{children}</main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    );
  } catch (error) {
    handleMessagesError(error);
  }
}
