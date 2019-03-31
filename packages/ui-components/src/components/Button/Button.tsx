import * as React from 'react';
import clsx from 'clsx';

import { useStyles } from './Buttons.style';
import { InputControlHandlers, Intent } from '../../interfaces';
import { StylesContext } from '@material-ui/styles/StylesProvider';

export type Props = {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
  intent?: Intent;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'filled';
} & InputControlHandlers;

const Button = (props: Props) => {
  const propsWithDefaults = {
    ...props,
    className: props.className || '',
    intent: props.intent || Intent.Default,
    variant: props.variant || 'filled'
  };

  const classes = useStyles(propsWithDefaults);
  const {
    children,
    className: classNameProp,
    intent,
    disabled,
    fullWidth,
    size,
    type,
    variant,
    ...restProps
  } = propsWithDefaults;

  const className = clsx(
    classes.root,
    classes.intent,
    {
      [classes.fullWidth]: !!fullWidth,
      [classes.large]: size === 'large',
      [classes.small]: size === 'small',
      [classes.disabled]: disabled
    },
    classNameProp
  );

  console.log({ classes, s: classes.fullWidth }); // eslint-disable-line no-console

  return (
    <button className={className} type={type} disabled={disabled} {...restProps}>
      {props.children}
    </button>
  );
};

export default Button;
