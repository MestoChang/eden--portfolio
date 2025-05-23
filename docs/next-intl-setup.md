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
# 安裝 next-intl 套件
npm install next-intl
```

### 2. 中間件配置 (middleware.js)

```javascript
// 導入 next-intl 中間件
import createMiddleware from 'next-intl/middleware';

// 創建中間件實例
export default createMiddleware({
  // 支援的語言列表
  locales: ['en', 'zh-TW'],
  // 預設語言
  defaultLocale: 'en',
  // 始終顯示語言前綴
  localePrefix: 'always',
});

// 設定中間件匹配規則
export const config = {
  // 排除 api、_next 和靜態文件
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

### 3. Next.js 配置 (next.config.js)

```javascript
// 導入 next-intl 插件
const createNextIntlPlugin = require('next-intl/plugin');

// 創建 next-intl 插件實例
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 其他配置...
};

// 導出配置
module.exports = withNextIntl(nextConfig);
```

## 路由配置

### 1. 路由設定 (i18n/routing.js)

```javascript
// 導入路由定義工具
import { defineRouting } from 'next-intl/routing';

// 定義路由配置
export const routing = defineRouting({
  // 支援的語言列表
  locales: ['en', 'zh-TW'],
  // 預設語言
  defaultLocale: 'en',
});
```

### 2. 導航工具 (i18n/navigation.js)

```javascript
// 導入導航工具
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// 創建導航工具實例
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  // 使用路由配置中的語言列表
  locales: routing.locales,
});
```

### 3. 路由結構

```
app/
├── [locale]/          # 語言路由參數
│   ├── layout.jsx     # 語言特定布局
│   ├── page.jsx       # 主頁面
│   ├── about/         # 關於頁面
│   │   └── page.jsx
│   └── projects/      # 專案頁面
│       └── page.jsx
```

### 4. 根布局配置 (app/[locale]/layout.jsx)

```jsx
// 導入必要的組件和工具
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, handleMessagesError } from '@/i18n/utils';

// 定義布局組件
export default async function LocaleLayout({ children, params }) {
  // 獲取當前語言
  const locale = params.locale;

  try {
    // 獲取翻譯消息
    const messages = await getMessages(locale);

    // 返回布局結構
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
    // 處理錯誤
    handleMessagesError(error);
  }
}
```

## 翻譯管理

### 1. 翻譯工具 (i18n/utils.js)

```javascript
// 導入導航工具
import { notFound } from 'next/navigation';

// 獲取翻譯消息
export async function getMessages(locale) {
  try {
    // 動態導入所有翻譯文件
    const messages = {
      common: (await import(`../messages/${locale}/common.json`)).default,
      home: (await import(`../messages/${locale}/home.json`)).default,
      about: (await import(`../messages/${locale}/about.json`)).default,
      projects: (await import(`../messages/${locale}/projects.json`)).default,
      error: (await import(`../messages/${locale}/error.json`)).default,
    };
    return messages;
  } catch (error) {
    // 拋出錯誤
    throw new Error(`Failed to load messages for locale: ${locale}`);
  }
}

// 處理翻譯錯誤
export function handleMessagesError(error) {
  if (error instanceof Error) {
    // 顯示 404 頁面
    notFound();
  }
  throw error;
}
```

### 2. 翻譯文件結構

```
messages/
├── en/              # 英文翻譯
│   ├── common.json  # 通用翻譯
│   ├── home.json    # 首頁翻譯
│   ├── about.json   # 關於頁面翻譯
│   ├── projects.json # 專案頁面翻譯
│   └── error.json   # 錯誤頁面翻譯
└── zh-TW/           # 繁體中文翻譯
    ├── common.json
    ├── home.json
    ├── about.json
    ├── projects.json
    └── error.json
```

### 3. 翻譯文件格式

```json
{
  // 命名空間
  "namespace": {
    // 基本翻譯
    "key": "value",
    // 嵌套翻譯
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

// 導入必要的組件和工具
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

// 定義 404 頁面組件
export default function NotFound() {
  // 獲取翻譯函數
  const t = useTranslations('error.NotFound');

  // 返回頁面結構
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

// 導入必要的組件和工具
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

// 定義錯誤頁面組件
export default function Error({ error, reset }) {
  // 獲取翻譯函數
  const t = useTranslations('error.Error');

  // 記錄錯誤
  useEffect(() => {
    console.error(error);
  }, [error]);

  // 返回頁面結構
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
// 導入翻譯工具
import { useTranslations } from 'next-intl';

// 定義組件
export default function MyComponent() {
  // 獲取翻譯函數
  const t = useTranslations('namespace');
  // 返回翻譯內容
  return <h1>{t('key')}</h1>;
}
```

### 2. 帶參數的翻譯

```jsx
// 導入翻譯工具
import { useTranslations } from 'next-intl';

// 定義組件
export default function MyComponent() {
  // 獲取翻譯函數
  const t = useTranslations('namespace');
  // 返回帶參數的翻譯內容
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
// 導入翻譯和格式化工具
import { useTranslations, useFormatter } from 'next-intl';

// 定義組件
export default function MyComponent() {
  // 獲取翻譯和格式化函數
  const t = useTranslations('namespace');
  const format = useFormatter();

  // 返回格式化的內容
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
// 導入路由工具
import { useRouter } from '@/i18n/navigation';

// 定義語言切換組件
export default function LanguageSwitcher() {
  // 獲取路由函數
  const router = useRouter();

  // 返回語言切換按鈕
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
