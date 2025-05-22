# Multilingual Portfolio

這是一個使用 Next.js 13+ 和 next-intl 建構的多語系作品集網站。

## 專案結構

```
├── app/                    # Next.js 應用程式目錄
│   ├── [locale]/          # 動態路由，處理多語系
│   │   ├── layout.jsx     # 語系特定的 layout
│   │   ├── page.jsx       # 主頁面
│   │   ├── about/         # 關於頁面
│   │   │   └── page.jsx
│   │   └── projects/      # 作品頁面
│   │       └── page.jsx
│   ├── globals.css        # 全局樣式
│   └── error.jsx          # 錯誤頁面
├── components/            # React 組件
│   ├── base/             # 基礎組件
│   │   ├── Header.jsx    # 頁首
│   │   └── Footer.jsx    # 頁尾
│   ├── sections/         # 頁面區段組件
│   │   ├── Hero.jsx      # 首頁英雄區段
│   │   ├── About.jsx     # 關於區段
│   │   ├── Projects.jsx  # 作品區段
│   │   └── Contact.jsx   # 聯絡區段
│   └── i18n/             # 多語系相關組件
│       └── LanguageSwitcher.jsx
├── i18n/                 # 多語系設定
│   ├── navigation.js     # 導航相關設定
│   ├── request.js        # 語系請求處理
│   └── routing.js        # 路由設定
├── messages/             # 語系檔案
│   ├── en.json          # 英文翻譯
│   └── zh-Hant.json     # 繁體中文翻譯
├── public/              # 靜態資源
│   └── flags/          # 國旗圖片
├── .vscode/            # VS Code 設定
│   └── settings.json   # 編輯器設定
├── .next/              # Next.js 建置輸出
├── node_modules/       # 依賴套件
├── .gitignore         # Git 忽略檔案
├── .prettierignore    # Prettier 忽略檔案
├── .prettierrc.json   # Prettier 設定
├── eslint.config.mjs  # ESLint 設定
├── jsconfig.json      # JavaScript 設定
├── middleware.js      # Next.js 中間件
├── next.config.js     # Next.js 設定
├── package.json       # 專案依賴
├── package-lock.json  # 依賴版本鎖定
└── postcss.config.mjs # PostCSS 設定
```

## 多語系開發指南

### 1. 新增頁面與組件

1. 在 `app/[locale]` 目錄下新增頁面：

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

2. 在 `messages` 目錄下的語系檔案中添加對應的翻譯：

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

### 2. 翻譯命名規範

- 使用 PascalCase 作為組件/頁面的翻譯 key
- 使用 camelCase 作為具體翻譯項的 key
- 保持翻譯結構的一致性
- 建議的翻譯結構：
  ```json
  {
    "ComponentName": {
      "title": "標題",
      "description": "描述",
      "section": {
        "title": "區段標題",
        "content": "區段內容"
      }
    }
  }
  ```

### 3. 頁面導航與語系切換

1. 使用 `Link` 元件進行頁面導航：

```jsx
import { Link } from '@/i18n/navigation';

// 在元件中使用
<Link href="/about">About</Link>;
```

2. 使用 `Link` 元件切換語系：

```jsx
import { Link } from '@/i18n/navigation';

// 在元件中使用
<Link href="/" locale="en">English</Link>
<Link href="/" locale="zh-Hant">繁體中文</Link>
```

### 4. 動態內容翻譯

如果需要處理帶變數的翻譯：

```json
// messages/zh-Hant.json
{
  "Component": {
    "welcome": "歡迎，{name}！"
  }
}

// 在組件中
const t = useTranslations('Component');
t('welcome', { name: '使用者' });
```

### 5. 常見問題處理

1. 翻譯缺失：

   - 檢查翻譯文件是否包含所有必要的 key
   - 確保所有語言文件結構一致
   - 使用 TypeScript 可以幫助檢查翻譯完整性

2. 動態路由：

   - 確保在 `app/[locale]` 目錄下創建頁面
   - 使用 `useParams` 獲取當前語言設定

3. 語言切換：
   - 使用 `LanguageSwitcher` 組件
   - 確保切換時保持在當前頁面

### 6. 最佳實踐

1. 保持翻譯文件結構清晰
2. 使用有意義的 key 名稱
3. 定期檢查翻譯完整性
4. 在開發新功能時同步更新所有語言文件
5. 使用 TypeScript 來確保類型安全

## 開發

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

## 技術棧

- Next.js 14
- React
- Tailwind CSS
- next-intl
