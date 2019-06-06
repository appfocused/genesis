import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { defaultTheme } from '../ThemeProvider/defaultTheme';

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape }: Theme) => {
    return createStyles({
      root: {
        backgroundColor: palette.background.paper,
        color: palette.text.secondary,

        '& input': {
          paddingLeft: spacing(1),
          paddingRight: spacing(1)
        },

        '& input:focus': {
          outlineColor: palette.primary.dark,
          outlineStyle: 'solid',
          outlineWidth: 2
        }
      }
    });
  },
  { defaultTheme }
);
