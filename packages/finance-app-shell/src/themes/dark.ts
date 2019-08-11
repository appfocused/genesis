import { createTheme } from '@appfocused/ui-components/dist/es';

export const darkTheme = createTheme({
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
    },
    action: {
      hoverOpacity: 0.1
    }
  },

  shape: {
    borderRadius: 8
  },

  spacing: 8
});
