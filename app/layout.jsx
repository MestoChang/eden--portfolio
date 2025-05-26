import './globals.css';

/**
 * 根布局元件
 * 這是整個應用程式的最外層布局
 * 負責設定基本的 HTML 結構和全局樣式
 */
export default function RootLayout({ children }) {
  return (
    <html className="min-w-[320px]" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
