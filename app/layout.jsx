import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html className="min-w-[320px]" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
