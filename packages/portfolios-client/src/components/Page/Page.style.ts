import { makeStyles } from '@material-ui/styles';
import { Theme, createStyles } from '@material-ui/core';
import { relative } from 'path';

export const useStyles = makeStyles(
  ({ typography, spacing, transitions, palette, shape }: Theme) => {
    console.log({ palette });
    return createStyles({
      root: {
        backgroundColor: palette.background.default,
        height: '100vh',
        position: 'relative',
        padding: spacing(2)
      },

      header: {
        marginTop: spacing(0)
      }
    });
  }
);
