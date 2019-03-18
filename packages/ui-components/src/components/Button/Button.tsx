import * as React from 'react';
import clsx from 'clsx';

import { useStyles } from './Button.style';
import { InputControlHandlers, Intent } from '../../interfaces';

type ButtonType = 'submit' | 'button' | 'reset';

export interface Props extends InputControlHandlers {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  isFullWidth?: boolean;
  disabled?: boolean;
  color?: Intent;
  size?: 'large' | 'small';

  // variant
}

export const Button = (props: Props) => {
  const classes = useStyles(props);
  const {
    children,
    className: classNameProp = '',
    color = Intent.Default,
    disabled,
    isFullWidth,
    size,
    type,
    ...restProps
  } = props;

  const className = clsx(
    classes.root,
    {
      [classes.fullWidth]: isFullWidth,
      [classes.primary]: color === Intent.Primary,
      [classes.secondary]: color === Intent.Secondary,
      [classes.large]: size === 'large',
      [classes.small]: size === 'small'
    },
    classNameProp
  );

  return (
    <button className={className} type={type} disabled={disabled} {...restProps}>
      {props.children}
    </button>
  );
};
