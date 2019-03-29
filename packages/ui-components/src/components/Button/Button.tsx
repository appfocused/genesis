import * as React from 'react';
import clsx from 'clsx';

import { useStyles } from './Button.style';
import { InputControlHandlers, Intent } from '../../interfaces';

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
  const classes = useStyles(props);
  const {
    children,
    className: classNameProp = '',
    intent = Intent.Default,
    disabled,
    fullWidth,
    size,
    type,
    variant,
    ...restProps
  } = props;

  const className = clsx(
    classes.root,
    {
      [classes.fullWidth]: fullWidth,
      [classes.default]: intent === Intent.Default,
      [classes.primary]: intent === Intent.Primary,
      [classes.secondary]: intent === Intent.Secondary,
      [classes.large]: size === 'large',
      [classes.small]: size === 'small',
      [classes.text]: variant === 'text',
      [classes.outlined]: variant === 'outlined',
      [classes.filled]: variant === 'filled'
    },
    classNameProp
  );

  return (
    <button className={className} type={type} disabled={disabled} {...restProps}>
      {props.children}
    </button>
  );
};

export default Button;
