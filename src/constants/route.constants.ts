export const ROOT_PATH = '/';
export const CATALOG_PATH = '/rackets';
export const DETAILS_PATH = '/racket/:slug';

export const STATIC_ROUTES: Record<string, string> = {
  ['navigation.home']: ROOT_PATH,
  ['navigation.catalog']: CATALOG_PATH,
};
