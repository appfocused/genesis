import { makeStyles } from '@material-ui/styles';
import { Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape }: Theme) => {
    console.log({ palette });
    return createStyles({
      root: {
        backgroundColor: palette.background.default,
        position: 'relative',
        padding: spacing(2)
      },

      header: {
        marginTop: spacing(0)
      }
    });
  }
);
