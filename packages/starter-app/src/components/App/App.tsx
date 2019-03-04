import * as React from 'react';
import { increment } from '@appfocused/common/lib/esm';
import { Button, ThemeProvider } from '@appfocused/ui-components/dist/es';
import './App.css';
import * as styles from './app.module.css';

const theme = {
  color: 'white'
};
export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className={`${styles.blue} App-header`}>
            {increment(99)}
            <Button buttonText="hello" borderRadius={20} />
          </header>
        </div>
      </ThemeProvider>
    );
  }
}
