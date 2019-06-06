import { makeStyles } from '@material-ui/styles';
import { Theme, createStyles } from '@material-ui/core';
import { defaultTheme } from '../ThemeProvider/defaultTheme';

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape }: Theme) => {
    return createStyles({
      container: {
        width: '300px'
      },
      input: {},
      paper: {
        marginTop: spacing(1)
      }
    });
  },
  { defaultTheme }
);
