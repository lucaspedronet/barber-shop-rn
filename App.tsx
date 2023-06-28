import React from 'react';
import {ThemeProvider} from 'styled-components';

import {AppRoute} from './src/routes/app.routes';
import theme from './src/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
  );
}
