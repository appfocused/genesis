import * as React from 'react';
import { increment } from '@appfocused/common/lib/esm';
import { ThemeProvider, Button, Intent, defaultTheme } from '@appfocused/ui-components/dist/es';
import './App.css';
import * as styles from './app.module.css';

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div className="App">
          <header className={`${styles.blue} App-header`}>
            {increment(99)}
            <Button data-e2e="test" size="large" color={Intent.Primary}>
              <span>test</span>
            </Button>
          </header>
        </div>
      </ThemeProvider>
    );
  }
}
