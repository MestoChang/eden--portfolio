# Next-Intl 設定與使用筆記

本文件紀錄本專案使用 next-intl 進行多語系設定的完整步驟與注意事項。

---

## 1. 安裝

```bash
npm install next-intl # 安裝 next-intl 套件
```

---

## 2. 路由與語系設定

在 `i18n/routing.js` 設定支援的語系與預設語系：

```js
import { defineRouting } from 'next-intl/routing'; // 匯入 next-intl 的路由定義工具

export const routing = defineRouting({
  locales: ['en', 'zh-Hant'], // 支援的語系列表
  defaultLocale: 'en', // 預設語系
});
```

> `locales` 陣列內的值需與 messages 目錄下的語系檔案名稱一致。

---

## 3. Navigation Wrapper

在 `i18n/navigation.js` 建立 next-intl navigation wrapper，方便全域使用 Link、useRouter 等：

```js
import { createNavigation } from 'next-intl/navigation'; // 匯入 navigation 工具
import { routing } from './routing'; // 匯入剛剛定義的 routing

// 產生 Link、redirect、usePathname、useRouter、getPathname 等 hooks 與元件
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
```

> 這樣可在專案中 anywhere 直接 import 這些工具。

---

## 4. Provider 設定（Next.js 15 注意事項）

在 Next.js 的 layout（如 `app/[locale]/layout.jsx`）中加入 next-intl Provider。

> **Next.js 15 新版注意：**
> 如果 layout/page 是 async function，`params` 可能是 Promise，必須 `await` 之後才能安全取用屬性，否則會出現「params should be awaited before using its properties」錯誤。

```jsx
import { NextIntlClientProvider } from 'next-intl'; // 匯入 Provider
import { Header, Footer } from '@/components/base';

async function getMessages(locale) {
  // 動態載入對應語系的 messages
  return (await import(`../../messages/${locale}.json`)).default;
}

export default async function LocaleLayout({ children, params }) {
  const awaitedParams = await params; // ⬅️ Next.js 15 必須 await params
  const messages = await getMessages(awaitedParams.locale);

  return (
    <html lang={awaitedParams.locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={awaitedParams.locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

> 詳細說明請見：[官方說明](https://nextjs.org/docs/messages/sync-dynamic-apis)

---

## 5. Messages 檔案

在 `messages/` 目錄下建立各語系的 JSON 檔案：

- `messages/en.json` // 英文翻譯
- `messages/zh-Hant.json` // 繁體中文翻譯

範例：

```json
{
  "About": {
    "title": "About Us", // 關於頁面標題
    "description": "This is the about page" // 關於頁面描述
  }
}
```

> 每個語系檔案結構需一致，否則切換語言時可能出現缺漏。

---

## 6. 語言切換

可用 Link 或自訂 select 實現語言切換：

```jsx
import { Link } from '@/i18n/navigation'; // 匯入 Link 元件

// 切換語言時會自動導向對應語系首頁
<Link href="/" locale="en">English</Link>
<Link href="/" locale="zh-Hant">繁體中文</Link>
```

或 select 實現：

```jsx
import { useRouter, usePathname } from '@/i18n/navigation'; // 匯入 hooks

const router = useRouter(); // 取得 router 實例
const pathname = usePathname(); // 取得目前路徑

const handleChange = e => {
  const locale = e.target.value; // 取得選擇的語系
  router.push(pathname, { locale }); // 導向相同頁面但切換語系
};
```

> 這樣可讓使用者在下拉選單切換語言時，保留在當前頁面。

---

## 7. 取得目前語系

- 建議用 `usePathname()` 解析路徑取得 locale，例如：

```js
const pathname = usePathname();
const currentLocale = pathname.split('/')[1] || 'en'; // 取得路徑第一段作為語系
```

- 或在 page/layout 直接從 `params` 取得（Next.js 15 async function 必須 await params）：

```js
export default async function Page({ params }) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale; // 由 Next.js 路由自動帶入
}
```

---

## 8. 注意事項

- `routing.js` 的 locales 必須與 messages 目錄一致
- Link/Router 切換 locale 時，建議保留 pathname 以維持當前頁面
- 若 router.locale 為 undefined，請用 pathname 或 params 取得
- messages 結構建議保持一致，方便維護
- Next.js 15 async layout/page 需 await params 才能安全取用

---

## 參考文件

- [next-intl 官方文件](https://next-intl-docs.vercel.app/)
- [next-intl GitHub](https://github.com/amannn/next-intl)
- [Next.js 官方 params await 說明](https://nextjs.org/docs/messages/sync-dynamic-apis)
