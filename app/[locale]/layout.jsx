import { NextIntlClientProvider } from 'next-intl';
import { Header, Footer } from '@/components/base';
import { getMessages, handleMessagesError } from '@/i18n/utils';
import '@/app/globals.css';
import ErrorBoundary from '@/components/base/ErrorBoundary';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }];
}

export default async function LocaleLayout({ children, params }) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;

  try {
    const messages = await getMessages(locale);

    return (
      <html className="min-w-[320px]" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <ErrorBoundary locale={locale}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <div>
                <Header locale={locale} />
                <main className="mx-auto max-w-6xl">{children}</main>
                <Footer />
              </div>
            </NextIntlClientProvider>
          </ErrorBoundary>
        </body>
      </html>
    );
  } catch (error) {
    handleMessagesError(error);
  }
}
