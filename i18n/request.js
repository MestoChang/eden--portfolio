import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { getMessages, handleMessagesError } from './utils';

export default getRequestConfig(async ({ requestLocale }) => {
  // 通常對應到 `[locale]` 這段路由
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  try {
    return {
      locale,
      messages: await getMessages(locale),
    };
  } catch (error) {
    handleMessagesError(error);
  }
});
