import { makeStyles, createStyles } from '@material-ui/styles';
import { Props } from './Heading';
import { Theme } from '@material-ui/core/styles';
import { defaultTheme } from '../ThemeProvider/defaultTheme';

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape }: Theme) =>
    createStyles<any, Props>({
      root: {
        color: palette.type === 'dark' ? palette.common.white : palette.common.black
      }
    }),
  { defaultTheme }
);
