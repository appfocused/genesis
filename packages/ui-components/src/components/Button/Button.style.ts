import { createStyles, makeStyles } from '@material-ui/styles';
import { Props } from './Button';
import { Theme } from '@material-ui/core';
import { fade, lighten } from '@material-ui/core/styles/colorManipulator';
import { defaultTheme } from '../ThemeProvider';
import { normalizedButton } from '../../normalize/button';
// import * as button from '@appfocused/css-js-normalize/dist/es/button';

const colors = {
  primary: (props: Props) => ({}),

  secondary: (props: Props) => ({})
};

const styles = (theme: Theme) => {
  const {
    palette,
    spacing: { unit },
    typography,
    transitions,
    shape
  } = theme;
  return createStyles<any, Props>({
    root: props => ({
      ...normalizedButton,
      ...typography.button,
      boxSizing: 'border-box',
      minWidth: unit * 8,
      padding: `${unit} ${unit * 2}`,
      border: `1px solid ${palette.primary.main}`,
      borderRadius: shape.borderRadius,
      color: palette.text.primary,
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

    primary: {
      backgroundColor: palette.primary.main,
      color: palette.text.primary,

      '&:hover': {
        border: `1px solid ${palette.primary.main}`,
        backgroundColor: theme.palette.primary.light,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    secondary: {}
  });
};

export const useStyles = makeStyles<any>(styles);
