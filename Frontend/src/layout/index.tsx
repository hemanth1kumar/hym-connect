import React, { useContext } from 'react';
import { AppShell, Header, Footer } from '@mantine/core';

import { UserContext } from '../context/usercontext';
import LeftSidebar from '../components/LeftSidebar';
import AppRoutes from '../routes';

const Layout = (): JSX.Element => {
  const user = useContext(UserContext);

  return (
    <AppShell
      padding="md"
      navbar={user?.user ? <LeftSidebar /> : undefined}
      header={
        <Header height={60} p="xs">
          App Header
        </Header>
      }
      footer={
        <Footer height={64}>
          <h5>Designed by HK</h5>
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <AppRoutes />
    </AppShell>
  );
};

export default Layout;
