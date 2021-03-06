import * as React from 'react';
import clsx from 'clsx';

import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { useStyles } from './Button.style';
import { InputControlHandlers } from '../../interfaces';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
  intent?: 'primary' | 'secondary' | 'default' | 'danger';
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'filled';
} & InputControlHandlers;

type P = ButtonBaseProps;

const Button = (props: ButtonProps) => {
  const propsWithDefaults: ButtonProps = {
    ...props,
    className: props.className || '',
    intent: props.intent || 'default',
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

  return (
    <ButtonBase className={className} type={type} disabled={disabled} {...restProps} focusRipple>
      {props.children}
    </ButtonBase>
  );
};

export default Button;
