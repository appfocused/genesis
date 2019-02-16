import * as React from 'react';
import { increment } from '@appfocused/common/lib/esm';
import './App.css';
import * as styles from './app.module.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className={`${styles.blue} App-header`}>{increment(99)}</header>
      </div>
    );
  }
}
