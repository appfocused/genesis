import * as React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, defaultTheme, useTheme, Heading } from '@appfocused/ui-components/dist/es';
import { Home } from '../home';
import { MicroFrontend } from '../microfrontend';
import { darkTheme } from '../../themes/dark';
import { lightTheme } from '../../themes/light';
import { Page } from '../Page';

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
    console.log('DARK');
  };

  const handleLightTheme = () => {
    setTheme(lightTheme);
    console.log('LIGHT');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Page>
          <Heading>Finance App v0.0.1</Heading>
          <div>
            Themes:{' '}
            <a href="#" onClick={handleLightTheme}>
              Light
            </a>
            &nbsp;
            <a href="#" onClick={handleDarkTheme}>
              Dark
            </a>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolios" component={Portfolios} />
          </Switch>
        </Page>
      </ThemeProvider>
    </BrowserRouter>
  );
};
