# Eden's Portfolio

## 專案概述

這是一個使用 Next.js 15 建立的個人作品集網站，支援多語言（繁體中文和英文），並整合了 3D 動畫效果。

## 技術棧

- **框架**: Next.js 15.3.2
- **UI 庫**: React 19
- **樣式**: Tailwind CSS 4.1.7
- **3D 渲染**: Three.js, React Three Fiber
- **動畫**: GSAP
- **國際化**: next-intl
- **表單處理**: EmailJS
- **程式碼品質**: ESLint, Prettier

## 環境需求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 套件管理器

## 開始使用

### 1. 安裝與設定

1. 克隆專案：

```bash
git clone https://github.com/yourusername/eden--portfolio.git
cd eden--portfolio
```

2. 安裝依賴：

```bash
npm install
# 或
yarn install
```

3. 環境變數設定：
   創建 `.env.local` 文件並添加：

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. 開發指令

- `npm run dev`: 啟動開發伺服器（使用 Turbopack）
- `npm run build`: 建置專案
- `npm run start`: 啟動生產環境伺服器
- `npm run lint`: 執行程式碼檢查
- `npm run format`: 格式化程式碼
- `npm run format:check`: 檢查程式碼格式

### 3. 開發工具

- **程式碼格式化**: Prettier
- **程式碼檢查**: ESLint
- **版本控制**: Git

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

## 主要功能

- 響應式設計
- 多語言支援（繁體中文/英文）
- 3D 動畫效果
- 表單提交功能
- 動態路由
- SEO 優化

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
