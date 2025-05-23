import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }];
}

async function getMessages(locale) {
  try {
    const messages = {
      common: (await import(`../../messages/${locale}/common.json`)).default,
      home: (await import(`../../messages/${locale}/home.json`)).default,
      about: (await import(`../../messages/${locale}/about.json`)).default,
      projects: (await import(`../../messages/${locale}/projects.json`)).default,
      error: (await import(`../../messages/${locale}/error.json`)).default,
    };
    return messages;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({ children, params }) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
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
}
