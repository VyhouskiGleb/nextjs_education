import { PropsWithChildren } from 'react';

export type LayoutProps<Params> = PropsWithChildren & {
  params: Promise<Params>;
};

export type PageProps<Params = void, SearchParams = void> = Partial<{
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}>;
