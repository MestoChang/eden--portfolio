import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';
import { getMessages, handleMessagesError } from '@/i18n/utils';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }];
}

export default async function LocaleLayout({ children, params }) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;

  try {
    const messages = await getMessages(locale);

    return (
      <html lang={locale} suppressHydrationWarning>
        <body suppressHydrationWarning>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Header locale={locale} />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    handleMessagesError(error);
  }
}
