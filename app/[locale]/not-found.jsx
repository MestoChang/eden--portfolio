'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

export default function NotFound() {
  const t = useTranslations('error.NotFound');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">404</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t('title')}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{t('description')}</p>
            <Link
              href="/"
              className="bg-primary hover:bg-primary/90 mt-8 inline-block rounded-md px-4 py-2 text-white transition-colors"
            >
              {t('backHome')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
