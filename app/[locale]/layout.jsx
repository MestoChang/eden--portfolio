import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

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
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
