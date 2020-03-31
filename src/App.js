import React from 'react';

import { ThemeProvider, Container, Box } from 'theme-ui';
import AppLayout from './lib/components/AppLayout';

import theme from './theme';
function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout p={4} bg="muted">
        <Box>I'm in a box</Box>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
