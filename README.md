# Multilingual Portfolio

這是一個使用 Next.js 13+ 和 next-intl 建構的多語系作品集網站。

## 專案結構

```
├── app/
│   ├── [locale]/           # 動態路由，處理多語系
│   │   ├── layout.jsx     # 語系特定的 layout
│   │   └── page.jsx       # 主頁面
│   ├── layout.jsx         # 根層級 layout
│   └── globals.css        # 全局樣式
├── i18n/
│   ├── navigation.js      # 導航相關設定
│   ├── request.js         # 語系請求處理
│   └── routing.js         # 路由設定
├── messages/              # 語系檔案
│   ├── en.json           # 英文翻譯
│   └── zh-Hant.json      # 繁體中文翻譯
├── middleware.js         # Next.js 中間件，處理語系重定向
└── next.config.js        # Next.js 設定
```

## 檔案說明

### 語系相關檔案

- `i18n/routing.js`: 定義支援的語系和預設語系
- `i18n/request.js`: 處理語系檔案的載入
- `i18n/navigation.js`: 提供多語系導航相關的 hooks 和元件
- `messages/*.json`: 各語系的翻譯檔案

### 頁面相關檔案

- `app/layout.jsx`: 根層級 layout，處理 HTML 結構
- `app/[locale]/layout.jsx`: 語系特定的 layout，處理多語系提供者
- `app/[locale]/page.jsx`: 主頁面，使用多語系功能

## 新增頁面與多語系

### 1. 新增頁面

在 `app/[locale]` 目錄下新增頁面：

```jsx
// app/[locale]/about/page.jsx
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 2. 新增翻譯

在 `messages` 目錄下的語系檔案中添加對應的翻譯：

```json
// messages/en.json
{
  "About": {
    "title": "About Us",
    "description": "This is the about page"
  }
}

// messages/zh-Hant.json
{
  "About": {
    "title": "關於我們",
    "description": "這是關於頁面"
  }
}
```

### 3. 頁面導航

使用 `Link` 元件進行頁面導航：

```jsx
import { Link } from '@/i18n/navigation';

// 在元件中使用
<Link href="/about">About</Link>;
```

### 4. 語系切換

使用 `Link` 元件切換語系：

```jsx
import { Link } from '@/i18n/navigation';

// 在元件中使用
<Link href="/" locale="en">English</Link>
<Link href="/" locale="zh-Hant">繁體中文</Link>
```

## 開發注意事項

1. 所有頁面都應該放在 `app/[locale]` 目錄下
2. 使用 `useTranslations` hook 來獲取翻譯內容
3. 使用 `Link` 元件進行頁面導航和語系切換
4. 新增翻譯時，確保所有語系檔案都包含相同的鍵值
5. 使用 `t()` 函數時，傳入的鍵值必須存在於語系檔案中

## 啟動專案

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置
npm run build

# 生產模式
npm start
```
