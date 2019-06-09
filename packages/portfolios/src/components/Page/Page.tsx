import * as React from 'react';
import { useStyles } from './Page.style';
import { Lookup } from '../lookup/lookup';
import Heading from '@appfocused/ui-components/dist/es/components/Heading';

export const Page: React.FunctionComponent = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <Heading className={classes.header} level={1}>
          Portfolios
        </Heading>
        <Lookup />
      </header>
    </div>
  );
};
