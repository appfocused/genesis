import * as React from 'react';
import { ThemeProvider, defaultTheme } from '@appfocused/ui-components/dist/es';
import { Page } from '../Page/Page';

export const App: React.FunctionComponent = props => {
  console.log({ defaultTheme });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Page />
    </ThemeProvider>
  );
};
