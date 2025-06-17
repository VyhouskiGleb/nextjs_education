import { getRequestConfig } from 'next-intl/server';

// todo -> Вынести в конфиг
const DEFAULT_LOCALE: string = 'ru';

export default getRequestConfig(async () => ({
  locale: DEFAULT_LOCALE,
  messages: (await import(`../../public/localization/${DEFAULT_LOCALE}.json`)).default,
  localePrefix: 'never',
}));
