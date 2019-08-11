import * as React from 'react';
import { ThemeProvider, defaultTheme } from '@appfocused/ui-components/dist/es';
import { Page } from '../Page/Page';

interface Props {
  history: History;
  theme?: any;
}

export const App: React.FunctionComponent<Props> = props => {
  const { theme = defaultTheme } = props;
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
};
