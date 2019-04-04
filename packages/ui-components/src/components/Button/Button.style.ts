import { makeStyles, createStyles } from '@material-ui/styles';
import { normalizedButton } from '../../normalize/button';
import { Theme } from '@material-ui/core';
import { Props } from './Button';
import { any } from 'prop-types';
import { lighten, darken, fade, getLuminance } from '@material-ui/core/styles';
import { defaultTheme } from '../ThemeProvider/defaultTheme';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Intent } from '../../interfaces';

const defaultColor = '#333333';

const getMainColor = (palette: Palette, props: Props) => {
  if (props.disabled) {
    return palette.action.disabledBackground;
  }

  switch (props.intent) {
    case Intent.Primary: {
      return palette.primary.main;
    }

    case Intent.Secondary: {
      return palette.secondary.main;
    }

    default: {
      return defaultColor;
    }
  }
};

const getBackgroundColor = (palette: Palette, props: Props) => {
  if (props.disabled && props.variant === 'filled') {
    return palette.action.disabledBackground;
  }
  const mainColor = getMainColor(palette, props);
  return props.variant === 'filled' ? mainColor : 'transparent';
};

const getHoverColor = (palette: Palette, props: Props) => {
  const mainColor = getMainColor(palette, props);

  if (props.variant === 'filled') {
    return darken(mainColor, palette.tonalOffset * 1.5);
  }

  return fade(mainColor, palette.action.hoverOpacity);
};

const getBorderColor = (palette: Palette, props: Props, hasHover = false) => {
  const mainColor = getMainColor(palette, props);

  if (props.variant === 'text') {
    return 'transparent';
  }

  if (props.variant === 'outlined' && !props.disabled) {
    return hasHover ? mainColor : fade(mainColor, 0.5);
  }

  return hasHover ? getHoverColor(palette, props) : mainColor;
};

const getTextColor = (palette: Palette, props: Props) => {
  const mainColor = getMainColor(palette, props);
  if (props.variant === 'text' || props.variant === 'outlined') {
    return props.intent === Intent.Default
      ? palette.getContrastText(palette.background.default)
      : mainColor;
  }

  return palette.getContrastText(mainColor);
};

const getButtonIntent = (palette: Palette) => (props: Props) => {
  const hoverColor = getHoverColor(palette, props);
  const color = getTextColor(palette, props);
  const backgroundColor = getBackgroundColor(palette, props);
  const borderColor = getBorderColor(palette, props);

  console.log(props); // eslint-disable-line no-console
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
    createStyles<any, Props>({
      root: {
        ...normalizedButton,
        ...typography.button,
        boxSizing: 'border-box',
        minWidth: spacing(8),
        margin: spacing(1),
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
