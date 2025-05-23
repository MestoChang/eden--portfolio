# Next-intl 設定指南

本文檔詳細說明如何在 Next.js 專案中設定和使用 next-intl 進行多語言管理。

## 目錄

1. [基本設定](#基本設定)
2. [路由配置](#路由配置)
3. [翻譯管理](#翻譯管理)
4. [組件使用](#組件使用)
5. [常見問題](#常見問題)

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

### 1. 導航工具 (navigation.js)

```javascript
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ['en', 'zh-TW'],
});
```

### 2. 路由結構

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

### 3. 根布局配置 (app/[locale]/layout.jsx)

```jsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

## 翻譯管理

### 1. 翻譯文件結構

```
messages/
├── en/
│   ├── common.json
│   ├── home.json
│   ├── about.json
│   └── projects.json
└── zh-TW/
    ├── common.json
    ├── home.json
    ├── about.json
    └── projects.json
```

### 2. 翻譯文件格式

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

### 3. 動態翻譯

```json
{
  "greeting": "你好，{name}！",
  "items": "你有 {count} 個項目"
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
import { useRouter } from '@/navigation';

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

- 確保使用 `navigation.js` 中的 `Link` 組件
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
