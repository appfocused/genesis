import * as React from 'react';
import { useStyles } from './Page.style';

export const Page: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
