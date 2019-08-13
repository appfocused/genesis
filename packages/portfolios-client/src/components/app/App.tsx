import * as React from 'react';
import {
  ThemeProvider,
  defaultTheme,
  StylesProvider,
  createGenerateClassName
} from '@appfocused/ui-components/dist/es';
import { Page } from '../Page/Page';

interface Props {
  history: History;
  theme?: any;
}

const generateClassName = createGenerateClassName({
  productionPrefix: 'port-jss'
});

export const App: React.FunctionComponent<Props> = props => {
  const { theme = defaultTheme } = props;
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </StylesProvider>
  );
};
