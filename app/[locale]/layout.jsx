import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';

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

export default async function RootLayout(props) {
  const { children, params } = props;

  // 確保 params 已經準備好
  if (!params) {
    notFound();
  }

  // 等待 params 準備完成
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale;

  if (!locale) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main>{children}</main>
    </NextIntlClientProvider>
  );
}
