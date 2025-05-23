import { NextIntlClientProvider } from 'next-intl';
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
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="flex min-h-screen flex-col">
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    );
  } catch (error) {
    handleMessagesError(error);
  }
}
