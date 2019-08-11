import { makeStyles, createStyles } from '@appfocused/ui-components/dist/es';

export const useStyles = makeStyles(({ typography, spacing, transitions, palette, shape }) => {
  return createStyles({
    root: {
      backgroundColor: palette.background.default,
      position: 'relative',
      padding: spacing(2)
    }
  });
});
