import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useStyles } from './Button.style';

export interface Props {
  buttonText: string;
  border?: boolean;
  borderRadius?: number;
  test?: boolean;
}

export const Button = (props: Props) => {
  const classes = useStyles(props);
  return <button className={classes.root}>{props.buttonText}</button>;
};
