import { createStyles } from '@material-ui/styles';
import { Props } from './Heading';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { defaultTheme } from '../ThemeProvider/defaultTheme';

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape }: Theme) =>
    createStyles<any, Props>({
      root: {
        // color: palette.type === 'dark' ? palette.common.white : palette.common.black,
        color: palette.text.primary,
        marginTop: 0,
        marginBottom: spacing(2)
      },
      h1: typography.h1,
      h2: typography.h2,
      h3: typography.h3
    }),
  { defaultTheme }
);
