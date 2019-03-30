import { Theme, createMuiTheme } from '@material-ui/core';

export const defaultTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0080ff'
    },
    secondary: {
      main: '#00bd7b'
    },
    text: {
      primary: '#fff'
    },
    background: {
      default: '#424251',
      paper: '#33333e'
    }
  },

  shape: {
    borderRadius: 8
  },

  spacing: 8
});
