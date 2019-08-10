import * as React from 'react';
import clsx from 'clsx';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';

import { useStyles } from './Input.style';

export type InputProps = InputBaseProps;

const Input: React.FunctionComponent<InputProps> = props => {
  const { className: classNameProp, ...rest } = props;
  const classes = useStyles(props);
  const className = clsx(classes.root, classNameProp);

  return <InputBase {...rest} className={className} />;
};

export default Input;
