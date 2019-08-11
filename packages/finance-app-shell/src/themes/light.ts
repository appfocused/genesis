import { createTheme } from '@appfocused/ui-components/dist/es';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0080ff'
    },
    secondary: {
      main: '#00bd7b'
    },
    text: {
      primary: '#333'
    },
    background: {
      default: '#fff',
      paper: '#efefef'
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
