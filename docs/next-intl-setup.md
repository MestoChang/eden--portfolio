# Next-intl 設定指南

本文檔詳細說明如何在 Next.js 專案中設定和使用 next-intl 進行多語言管理。

## 目錄

1. [基本設定](#基本設定)
2. [路由配置](#路由配置)
3. [翻譯管理](#翻譯管理)
4. [錯誤處理](#錯誤處理)
5. [組件使用](#組件使用)
6. [常見問題](#常見問題)

## 基本設定

### 1. 安裝依賴

```bash
npm install next-intl
```

### 2. 中間件配置 (middleware.js)

```javascript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh-TW'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

### 3. Next.js 配置 (next.config.js)

```javascript
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 其他配置...
};

module.exports = withNextIntl(nextConfig);
```

## 路由配置

### 1. 路由設定 (i18n/routing.js)

```javascript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh-TW'],
  defaultLocale: 'en',
});
```

### 2. 導航工具 (i18n/navigation.js)

```javascript
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: routing.locales,
});
```

### 3. 路由結構

```
app/
├── [locale]/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── about/
│   │   └── page.jsx
│   └── projects/
│       └── page.jsx
```

### 4. 根布局配置 (app/[locale]/layout.jsx)

```jsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, handleMessagesError } from '@/i18n/utils';

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;

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
```

## 翻譯管理

### 1. 翻譯工具 (i18n/utils.js)

```javascript
import { notFound } from 'next/navigation';

export async function getMessages(locale) {
  try {
    const messages = {
      common: (await import(`../messages/${locale}/common.json`)).default,
      home: (await import(`../messages/${locale}/home.json`)).default,
      about: (await import(`../messages/${locale}/about.json`)).default,
      projects: (await import(`../messages/${locale}/projects.json`)).default,
      error: (await import(`../messages/${locale}/error.json`)).default,
    };
    return messages;
  } catch (error) {
    throw new Error(`Failed to load messages for locale: ${locale}`);
  }
}

export function handleMessagesError(error) {
  if (error instanceof Error) {
    notFound();
  }
  throw error;
}
```

### 2. 翻譯文件結構

```
messages/
├── en/
│   ├── common.json
│   ├── home.json
│   ├── about.json
│   ├── projects.json
│   └── error.json
└── zh-TW/
    ├── common.json
    ├── home.json
    ├── about.json
    ├── projects.json
    └── error.json
```

### 3. 翻譯文件格式

```json
{
  "namespace": {
    "key": "value",
    "nested": {
      "key": "value"
    }
  }
}
```

## 錯誤處理

### 1. 404 頁面 (not-found.jsx)

```jsx
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
```

### 2. 錯誤頁面 (error.jsx)

```jsx
'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

export default function Error({ error, reset }) {
  const t = useTranslations('error.Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{t('title')}</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t('description')}</p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={reset}
                className="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 text-white transition-colors"
              >
                {t('tryAgain')}
              </button>
              <Link
                href="/"
                className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                {t('backHome')}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

## 組件使用

### 1. 基本翻譯

```jsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  return <h1>{t('key')}</h1>;
}
```

### 2. 帶參數的翻譯

```jsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  return (
    <div>
      <p>{t('greeting', { name: 'John' })}</p>
      <p>{t('items', { count: 5 })}</p>
    </div>
  );
}
```

### 3. 日期和數字格式化

```jsx
import { useTranslations, useFormatter } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  const format = useFormatter();

  return (
    <div>
      <p>{format.dateTime(new Date(), { dateStyle: 'full' })}</p>
      <p>{format.number(1000, { style: 'currency', currency: 'TWD' })}</p>
    </div>
  );
}
```

### 4. 語言切換

```jsx
import { useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.replace('/', { locale: 'en' })}>English</button>
      <button onClick={() => router.replace('/', { locale: 'zh-TW' })}>繁體中文</button>
    </div>
  );
}
```

## 常見問題

### 1. 翻譯缺失

- 確保所有語言文件結構一致
- 檢查翻譯 key 是否正確
- 使用 TypeScript 可以幫助檢查翻譯完整性

### 2. 路由問題

- 確保使用 `i18n/navigation.js` 中的 `Link` 組件
- 檢查 `middleware.js` 的 matcher 配置
- 確保所有頁面都在 `[locale]` 目錄下

### 3. 性能優化

- 使用動態導入減少初始包大小
- 按需加載翻譯文件
- 使用 `useMemo` 緩存翻譯結果

### 4. SEO 優化

- 使用 `next-intl` 的 `getTranslations` 在服務器端渲染
- 確保所有頁面都有適當的 meta 標籤
- 使用 `alternate` 標籤指定其他語言版本

## 最佳實踐

1. 保持翻譯文件結構清晰
2. 使用有意義的 key 名稱
3. 定期檢查翻譯完整性
4. 在開發新功能時同步更新所有語言文件
5. 使用 TypeScript 來確保類型安全
6. 實現錯誤邊界處理翻譯缺失
7. 使用命名空間組織翻譯
8. 保持翻譯 key 的一致性
