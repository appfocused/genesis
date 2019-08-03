import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';

const renderFnName = `renderPortfolios`;

(window as any)[renderFnName] = (containerId: string, history: History) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
};

(window as any).unmountPortfolios = (containerId: string) => {
  const el = document.getElementById(containerId);

  if (el) {
    ReactDOM.unmountComponentAtNode(el);
  }
};
