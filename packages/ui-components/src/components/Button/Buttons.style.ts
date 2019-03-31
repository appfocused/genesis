import { makeStyles, createStyles } from '@material-ui/styles';
import { normalizedButton } from '../../normalize/button';
import { Theme } from '@material-ui/core';
import { Props } from './Button';
import { any } from 'prop-types';
import { lighten, darken } from '@material-ui/core/styles';
import { defaultTheme } from '../ThemeProvider/defaultTheme';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Intent } from '../../interfaces';

const defaultColor = '#333333';

const getMainColor = (palette: Palette, props: Props) => {
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

const getHoverColor = (palette: Palette, props: Props, mainColor: string) => {
  switch (props.variant) {
    case 'outlined': {
      return mainColor;
    }

    default: {
      return darken(mainColor, palette.tonalOffset * 1.5);
    }
  }
};

const getButtonIntent = (palette: Palette) => (props: Props) => {
  const mainColor = getMainColor(palette, props);
  const hoverColor = getHoverColor(palette, props, mainColor);
  const backgroundColor = props.variant === 'filled' ? mainColor : 'transparent';
  const textBackground =
    backgroundColor === 'transparent'
      ? palette.type === 'dark'
        ? '#000000'
        : '#ffffff'
      : backgroundColor;

  console.log(props); // eslint-disable-line no-console
  return {
    backgroundColor,
    color: palette.getContrastText(textBackground),
    fontWeight: 400,
    border: `1px solid ${mainColor}`,

    '&:hover': {
      border: `1px solid ${hoverColor}`,
      backgroundColor: hoverColor,
      color: palette.getContrastText(hoverColor),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
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
