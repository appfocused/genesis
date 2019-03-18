import { Theme, createMuiTheme } from '@material-ui/core';
import { indigo, pink, grey } from '@material-ui/core/colors';

export const defaultTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#37474f'
    },
    secondary: pink,
    text: {
      primary: '#fff'
    }
  },

  shape: {
    borderRadius: 8
  },

  spacing: {
    unit: 8
  },

  typography: {
    useNextVariants: true
  }
});
