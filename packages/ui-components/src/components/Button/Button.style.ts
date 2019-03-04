import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '../../interfaces';
import { Props } from './Button';

const styles = ({ color }: Theme) =>
  createStyles({
    root: (props: Props) => ({
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: props.borderRadius,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color,
      height: 48,
      padding: '0 30px'
    })
  });

export const useStyles = makeStyles(styles);
