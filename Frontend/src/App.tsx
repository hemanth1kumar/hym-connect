import React from 'react';
import { MantineProvider } from '@mantine/core';

import './App.css';
import UserContextProvider from './context/usercontext';
import Layout from './layout';

const App = (): JSX.Element => (
  <>
    <MantineProvider
      theme={{
        fontFamily: 'Nunito Sans, sans-serif',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <UserContextProvider>
        <Layout />
      </UserContextProvider>
    </MantineProvider>
  </>
);
export default App;
