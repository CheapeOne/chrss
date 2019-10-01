import React from 'react';
import Router from './Router';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router />
      </>
    </ThemeProvider>
  );
};

export default App;
