import * as React from 'react';
import { useStyles } from './Page.style';
import { Lookup } from '../lookup/lookup';

export const Page: React.FunctionComponent = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <h1 className={classes.header}>Portfolios</h1>
        <Lookup />
      </header>
    </div>
  );
};
