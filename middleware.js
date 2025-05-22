import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'zh-Hant'];
const defaultLocale = 'en';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
