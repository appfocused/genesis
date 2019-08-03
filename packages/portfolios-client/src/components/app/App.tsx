import * as React from 'react';
import { ThemeProvider, defaultTheme } from '@appfocused/ui-components/dist/es';
import { Page } from '../Page/Page';

interface Props {
  history: History;
}

export const App: React.FunctionComponent<Props> = props => {
  console.log({ defaultTheme });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Page />
    </ThemeProvider>
  );
};
