import * as React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, defaultTheme } from '@appfocused/ui-components/dist/es';
import { Home } from '../home';
import { MicroFrontend } from '../microfrontend';

const baseUrl = '';
const portfoliosHost = `${baseUrl}/apps/@appfocused/portfolios@0.0.1`;

const Portfolios = ({ history }: { history: History }) => (
  <MicroFrontend history={history} host={portfoliosHost} name="Portfolios" />
);

export const App: React.FunctionComponent = props => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <h1>Finance App v0.0.1</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolios" component={Portfolios} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};
