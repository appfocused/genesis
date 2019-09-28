import { createStyles } from '@material-ui/styles';
import { normalizedButton } from '../../normalize/button';
import { Theme } from '@material-ui/core';
import { ButtonProps } from './Button';
import { lighten, darken, fade, makeStyles } from '@material-ui/core/styles';
import { defaultTheme } from '../ThemeProvider/defaultTheme';
import { Palette } from '@material-ui/core/styles/createPalette';

const defaultColor = '#333333';

const getMainColor = (palette: Palette, props: ButtonProps) => {
  if (props.disabled) {
    return palette.action.disabledBackground;
  }

  switch (props.intent) {
    case 'primary': {
      return palette.primary.main;
    }

    case 'secondary': {
      return palette.secondary.main;
    }

    case 'danger': {
      return palette.error.main;
    }

    default: {
      return defaultColor;
    }
  }
};

const getBackgroundColor = (palette: Palette, props: ButtonProps) => {
  if (props.disabled && props.variant === 'filled') {
    return palette.action.disabledBackground;
  }
  const mainColor = getMainColor(palette, props);
  return props.variant === 'filled' ? mainColor : 'transparent';
};

const getHoverColor = (palette: Palette, props: ButtonProps) => {
  const mainColor = getMainColor(palette, props);

  if (props.variant === 'filled') {
    return darken(mainColor, palette.tonalOffset * 1.5);
  }

  return fade(mainColor, palette.action.hoverOpacity);
};

const getBorderColor = (palette: Palette, props: ButtonProps, hasHover = false) => {
  const mainColor = getMainColor(palette, props);

  if (props.variant === 'text') {
    return 'transparent';
  }

  if (props.variant === 'outlined' && !props.disabled) {
    return hasHover ? mainColor : fade(mainColor, 0.5);
  }

  return hasHover ? getHoverColor(palette, props) : mainColor;
};

const getTextColor = (palette: Palette, props: ButtonProps) => {
  const mainColor = getMainColor(palette, props);
  if (props.variant === 'text' || props.variant === 'outlined') {
    return props.intent === 'default'
      ? palette.getContrastText(palette.background.default)
      : mainColor;
  }

  return palette.getContrastText(mainColor);
};

const getButtonIntent = (palette: Palette) => (props: ButtonProps) => {
  const hoverColor = getHoverColor(palette, props);
  const color = getTextColor(palette, props);
  const backgroundColor = getBackgroundColor(palette, props);
  const borderColor = getBorderColor(palette, props);

  return {
    backgroundColor,
    color,
    fontWeight: 400,
    borderColor,

    '&:hover:not([disabled])': {
      borderColor: getBorderColor(palette, props, true),
      backgroundColor: hoverColor,
      color: props.variant === 'filled' ? palette.getContrastText(hoverColor) : color,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&[disabled]': {
      color: palette.action.disabled,
      backgroundColor,
      borderColor
    }
  };
};

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape }: Theme) =>
    createStyles<any, ButtonProps>({
      root: {
        ...normalizedButton,
        ...typography.button,
        boxSizing: 'border-box',
        minWidth: spacing(8),
        padding: spacing(1, 2),
        borderRadius: shape.borderRadius,
        color: palette.getContrastText(defaultColor),
        transition: transitions.create(['background-color', 'box-shadow', 'border'], {
          duration: transitions.duration.short
        }),

        '&:hover': {
          textDecoration: 'none',
          backgroundColor: lighten(palette.text.primary),

          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },

          '&$disabled': {
            backgroundColor: 'transparent'
          }
        },

        '&$disabled': {
          color: palette.action.disabled
        }
      },

      fullWidth: props => ({
        width: '100%'
      }),

      intent: getButtonIntent(palette)
    }),
  { defaultTheme }
);
