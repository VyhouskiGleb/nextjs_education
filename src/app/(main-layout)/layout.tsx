import { FC } from 'react';
import { getTranslations } from 'next-intl/server';
import { LayoutProps } from '@app/models/router.model';

import MainContainer from '@app/containers/main.container';
import Header from '@app/components/navigation/header.server';
import Footer from '@app/components/navigation/footer.server';
import { CATALOG_PATH, ROOT_PATH } from '@app/constants/route.constants';

const MainLayout: FC<LayoutProps<void>> = async ({ children }) => {
  const t = await getTranslations();

  // todo -> Вынести в константы
  const routes: Record<string, string> = {
    [t('navigation.home')]: ROOT_PATH,
    [t('navigation.catalog')]: CATALOG_PATH,
  };
  return (
    <MainContainer navigation={<Header routes={routes} />} footer={<Footer />}>
      {children}
    </MainContainer>
  );
};

export default MainLayout;
