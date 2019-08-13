import { makeStyles, createStyles } from '@appfocused/ui-components/dist/es';

export const useStyles = makeStyles(({ typography, spacing, transitions, palette, shape }) => {
  return createStyles({
    root: {
      position: 'relative',
      padding: spacing(2)
    },

    '@global': {
      body: {
        padding: 0,
        margin: 0,
        backgroundColor: palette.background.default,
        fontFamily: typography.fontFamily,
        fontSize: `${typography.fontSize}px`,
        fontWeight: typography.fontWeightRegular
      }
    }
  });
});
