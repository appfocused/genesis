import * as React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';

interface Props {
  theme: any;
  children: React.ReactNode;
}

export const ThemeProvider = (props: Props) => {
  return <MUIThemeProvider theme={props.theme}>{props.children}</MUIThemeProvider>;
};
