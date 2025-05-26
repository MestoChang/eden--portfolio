# Eden Portfolio

這是一個使用 Next.js 13+ 和 next-intl 建構的多語言個人作品集網站。

## 功能特點

- 🌐 多語言支援（英文和繁體中文）
- 🎨 現代化的 UI 設計
- 📱 響應式設計
- ⚡ 使用 Next.js 13+ App Router
- 🎯 SEO 優化
- 📦 模組化的專案結構

## 技術棧

- Next.js 13+
- React
- Tailwind CSS
- next-intl
- TypeScript

## 開始使用

1. 克隆專案：

```bash
git clone https://github.com/yourusername/eden--portfolio.git
cd eden--portfolio
```

2. 安裝依賴：

```bash
npm install
```

3. 啟動開發伺服器：

```bash
npm run dev
```

4. 在瀏覽器中打開 [http://localhost:3000](http://localhost:3000)

## 專案結構

```
eden--portfolio/
├── app/                    # Next.js 應用程式目錄
│   ├── [locale]/          # 多語言路由
│   │   ├── about/         # 關於頁面
│   │   │   └── page.jsx
│   │   ├── projects/      # 專案頁面
│   │   │   ├── [slug]/    # 動態路由專案頁面
│   │   │   │   └── page.jsx
│   │   │   ├── custom-project/  # 自訂專案頁面
│   │   │   │   ├── data.js      # 專案資料
│   │   │   │   └── page.jsx     # 專案頁面
│   │   │   └── page.jsx         # 專案列表頁面
│   │   ├── layout.jsx     # 語系特定的布局
│   │   ├── page.jsx       # 主頁面
│   │   ├── error.jsx      # 錯誤頁面
│   │   └── not-found.jsx  # 404 頁面
│   ├── globals.css        # 全局樣式
│   └── layout.jsx         # 根布局
├── components/            # 可重用組件
│   ├── base/             # 基礎組件
│   │   ├── Header.jsx    # 頁首
│   │   └── Footer.jsx    # 頁尾
│   ├── sections/         # 頁面區段組件
│   │   ├── Hero.jsx      # 首頁英雄區段
│   │   ├── About.jsx     # 關於區段
│   │   ├── Projects.jsx  # 專案區段
│   │   └── Contact.jsx   # 聯絡區段
│   └── i18n/             # 多語系相關組件
│       └── LanguageSwitcher.jsx
├── i18n/                 # 多語系設定
│   ├── navigation.js     # 導航相關設定
│   ├── request.js        # 語系請求處理
│   ├── routing.js        # 路由設定
│   └── utils.js          # 工具函數
├── messages/             # 翻譯文件
│   ├── en/              # 英文翻譯
│   │   ├── common.json  # 通用翻譯
│   │   ├── home.json    # 首頁翻譯
│   │   ├── about.json   # 關於頁面翻譯
│   │   ├── projects.json # 專案頁面翻譯
│   │   └── error.json   # 錯誤頁面翻譯
│   └── zh-TW/           # 繁體中文翻譯
│       ├── common.json
│       ├── home.json
│       ├── about.json
│       ├── projects.json
│       └── error.json
├── public/              # 靜態資源
│   ├── images/         # 圖片資源
│   └── fonts/          # 字體文件
├── middleware.js       # Next.js 中間件
├── next.config.js      # Next.js 設定
├── package.json        # 專案依賴
└── postcss.config.js   # PostCSS 設定
```

## 多語言設定

專案使用 next-intl 進行多語言管理。主要設定文件包括：

### 1. middleware.js

```javascript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh-TW'],
  defaultLocale: 'zh-TW',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

### 2. i18n/routing.js

```javascript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh-TW'],
  defaultLocale: 'zh-TW',
});
```

### 3. i18n/utils.js

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

## 專案頁面結構

專案頁面支援兩種形式：

### 1. 動態路由專案頁面 (`[slug]`)

- 使用 Next.js 動態路由
- 適合結構相似的專案頁面
- 支援多語系內容
- 使用統一的模板

### 2. 自訂專案頁面 (`custom-project`)

- 完全自訂的頁面結構
- 獨立的資料管理
- 支援多語系內容
- 可以根據需求自由設計

## 開發指南

### 1. 新增動態路由專案

1. 在 `app/[locale]/projects/[slug]/page.jsx` 中新增專案資料
2. 確保所有文字內容都支援多語系

### 2. 新增自訂專案頁面

1. 在 `app/[locale]/projects/` 下創建新的專案資料夾
2. 創建 `data.js` 和 `page.jsx`
3. 在 `data.js` 中定義多語系內容
4. 在 `page.jsx` 中實現頁面邏輯

### 3. 新增翻譯

1. 在 `messages` 目錄下找到對應的語言資料夾
2. 在相應的 JSON 文件中添加新的翻譯

## 環境變數

創建 `.env.local` 文件並添加以下變數：

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 部署

1. 構建專案：

```bash
npm run build
```

2. 啟動生產伺服器：

```bash
npm start
```

## 貢獻指南

1. Fork 專案
2. 創建功能分支
3. 提交變更
4. 推送到分支
5. 創建 Pull Request
