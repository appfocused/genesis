import * as React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import {
  ThemeProvider,
  defaultTheme,
  useTheme,
  Heading,
  StylesProvider,
  createGenerateClassName
} from '@appfocused/ui-components/dist/es';
import { Home } from '../home';
import { MicroFrontend } from '../microfrontend';
import { darkTheme } from '../../themes/dark';
import { lightTheme } from '../../themes/light';
import { Page } from '../page';
import { ErrorPage } from '../error-page';

const baseUrl = '';
const portfoliosHost = `${baseUrl}/apps/@appfocused/portfolios@0.0.1`;

const Portfolios = ({ history }: { history: any }) => {
  const theme = useTheme();
  return <MicroFrontend history={history} host={portfoliosHost} name="Portfolios" theme={theme} />;
};

export const App: React.FunctionComponent = props => {
  const [theme, setTheme] = React.useState(defaultTheme);

  const handleDarkTheme = () => {
    setTheme(darkTheme);
  };

  const handleLightTheme = () => {
    setTheme(lightTheme);
  };

  const generateClassName = createGenerateClassName({
    productionPrefix: 'shell-jss'
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <Page>
            <Heading>Finance App v0.0.1</Heading>
            <div>
              Themes: <a onClick={handleLightTheme}>Light</a>
              &nbsp;
              <a onClick={handleDarkTheme}>Dark</a>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolios" component={Portfolios} />
              <Route component={ErrorPage} />
            </Switch>
          </Page>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};
