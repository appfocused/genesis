import * as React from 'react';
import { Provider } from 'react-redux';
import {
  ThemeProvider,
  defaultTheme,
  StylesProvider,
  createGenerateClassName
} from '@appfocused/ui-components/dist/es';
import { Page } from '../Page/Page';
import { configureStore } from '../../store/store';

interface Props {
  history: History;
  theme?: any;
}

const generateClassName = createGenerateClassName({
  productionPrefix: 'port-jss',
  disableGlobal: true
});

const store = configureStore();

export const App: React.FunctionComponent<Props> = props => {
  const { theme = defaultTheme } = props;
  return (
    <Provider store={store}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <Page />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
};
