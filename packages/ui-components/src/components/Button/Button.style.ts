import { createStyles, makeStyles } from '@material-ui/styles';
import { Props } from './Button';
import { Theme } from '@material-ui/core';
import { fade, lighten, darken } from '@material-ui/core/styles/colorManipulator';
import {} from '@material-ui/core/styles';
import { defaultTheme } from '../ThemeProvider';
import { normalizedButton } from '../../normalize/button';
import { Palette } from '@material-ui/core/styles/createPalette';
// import * as button from '@appfocused/css-js-normalize/dist/es/button';

const colors = {
  primary: (props: Props) => ({}),

  secondary: (props: Props) => ({})
};

const getButtonIntent = (
  palette: Palette,
  mainColor: string,
  hoverColor = darken(mainColor, palette.tonalOffset * 1.5)
) => ({
  backgroundColor: mainColor,
  color: palette.getContrastText(mainColor),
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
});

const styles = (theme: Theme) => {
  const {
    palette,
    spacing: { unit },
    typography,
    transitions,
    shape
  } = theme;

  const defaultColor = '#33333e';

  return createStyles<any, Props>({
    root: props => ({
      ...normalizedButton,
      ...typography.button,
      boxSizing: 'border-box',
      minWidth: unit * 8,
      margin: `${unit}px`,
      padding: `${unit}px ${unit * 2}px`,
      borderRadius: shape.borderRadius,
      color: palette.getContrastText(defaultColor),
      transition: transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: lighten(theme.palette.text.primary),

        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    fullWidth: {
      width: '100%'
    },

    small: {
      padding: `${unit}px ${unit * 2}px`,
      minWidth: 64,
      fontSize: typography.pxToRem(13)
    },

    large: {
      padding: `${unit}px ${unit * 3}px`,
      fontSize: typography.pxToRem(15)
    },

    default: getButtonIntent(palette, defaultColor),

    primary: getButtonIntent(palette, palette.primary.main, palette.primary.dark),

    secondary: getButtonIntent(palette, palette.secondary.main, palette.secondary.dark)
  });
};

// eslint-disable-next-line no-console
console.log({ defaultTheme });

export const useStyles = makeStyles<any>(styles, { defaultTheme } as any);
