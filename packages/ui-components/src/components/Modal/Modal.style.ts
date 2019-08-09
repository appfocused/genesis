import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { defaultTheme } from '../ThemeProvider/defaultTheme';
import { lighten, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape, shadows }: Theme) => {
    return createStyles({
      root: {
        position: 'absolute',
        width: 400,
        backgroundColor: lighten(palette.background.paper, 0.05),
        boxShadow: shadows[5],
        padding: spacing(4),
        outline: 'none',
        color: palette.type === 'dark' ? palette.common.white : palette.common.black
      }
    });
  },
  { defaultTheme }
);
