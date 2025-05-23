import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';
import { Header, Footer } from '@/components/base';

async function getMessages(locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  return {
    title: 'Multilingual Portfolio',
    description: 'A multilingual portfolio built with Next.js',
  };
}

export default async function LocaleLayout({ children, params }) {
  const awaitedParams = await params;
  const messages = await getMessages(awaitedParams.locale);

  const locale = awaitedParams.locale; // 由 Next.js 路由自動帶入
  console.log('switch locale to:', locale);

  return (
    <html lang={awaitedParams.locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={awaitedParams.locale} messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
