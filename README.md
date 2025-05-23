# Eden Portfolio

這是一個使用 Next.js 13+ 和 next-intl 建構的多語言個人作品集網站。

## 功能特點

- 🌐 多語言支援（英文和繁體中文）
- 🎨 現代化的 UI 設計
- 📱 響應式設計
- ⚡ 使用 Next.js 13+ App Router
- 🎯 SEO 優化
- 🌙 深色模式支援

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
│   │   │   └── page.jsx
│   │   ├── layout.jsx     # 語系特定的布局
│   │   └── page.jsx       # 主頁面
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
├── docs/                 # 文檔
│   └── next-intl-setup.md # next-intl 設定指南
├── messages/             # 翻譯文件
│   ├── en/              # 英文翻譯
│   │   ├── common.json  # 通用翻譯
│   │   ├── home.json    # 首頁翻譯
│   │   ├── about.json   # 關於頁面翻譯
│   │   └── projects.json # 專案頁面翻譯
│   └── zh-TW/           # 繁體中文翻譯
│       ├── common.json
│       ├── home.json
│       ├── about.json
│       └── projects.json
├── public/              # 靜態資源
│   ├── images/         # 圖片資源
│   └── fonts/          # 字體文件
├── .vscode/           # VS Code 設定
│   └── settings.json  # 編輯器設定
├── middleware.js      # Next.js 中間件
├── next.config.js     # Next.js 設定
├── package.json       # 專案依賴
├── postcss.config.js  # PostCSS 設定
```

## 多語言設定

專案使用 next-intl 進行多語言管理。主要設定文件包括：

### 1. middleware.js

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

### 2. navigation.js

```javascript
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ['en', 'zh-TW'],
});
```

### 3. 翻譯文件結構

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

### 使用翻譯

1. 在組件中使用：

```jsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  return <h1>{t('key')}</h1>;
}
```

2. 使用導航：

```jsx
import { Link } from '@/navigation';

// 在組件中
<Link href="/about">About</Link>;
```

### 添加新語言

1. 在 `messages` 目錄下創建新的語言目錄
2. 複製現有翻譯文件並翻譯內容
3. 在 `middleware.js` 中添加新的語言代碼

## 開發指南

### 1. 新增頁面

- 在 `app/[locale]` 目錄下創建新頁面
- 確保在 `messages` 目錄中添加對應的翻譯

### 2. 新增組件

- 在 `components` 目錄下創建新組件
- 使用 `useTranslations` 處理多語言內容

### 3. 最佳實踐

- 保持翻譯文件結構一致
- 使用有意義的翻譯 key
- 定期檢查翻譯完整性
- 在開發新功能時同步更新所有語言文件

## 部署

專案可以部署到任何支援 Next.js 的平台，如 Vercel、Netlify 等。

```bash
npm run build
```

## 貢獻

歡迎提交 Pull Request 或開 Issue 來改進專案。

## 授權

MIT License
