import { FC } from 'react';
import { LayoutProps } from '@app/models/router.model';

import MainContainer from '@app/containers/main.container';
import Header from '@app/components/navigation/header.server';
import Footer from '@app/components/navigation/footer.server';

const MainLayout: FC<LayoutProps<void>> = async ({ children }) => {
  return (
    <MainContainer navigation={<Header />} footer={<Footer />}>
      {children}
    </MainContainer>
  );
};

export default MainLayout;
