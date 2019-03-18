/**
 * 1. Change the font styles in all browsers
 * 2. Remove the margin in Firefox and Safari
 * 3. Show the overflow in Edge
 * 4. Remove the inheritance of text transform in Edge, Firefox, and IE
 * 5. Correct the inability to style clickable types in iOS and Safari
 * 6. Remove the inner border and padding in Firefox
 * 7. Restore the focus styles unset by the previous rule
 */

import { createStyles } from '@material-ui/styles';

export const normalizedButton = createStyles<any, any>({
  '@global': {
    button: {
      fontFamily: 'inherit', // 1
      fontSize: '100%', // 1
      lineHeight: 1.15, // 1
      margin: 0, // 2
      overflow: 'visible', // 3
      textTransform: 'none', // 4
      '-webkit-appearance': 'button', // 5
      '&:-moz-focus-inner': {
        borderStyle: 'none', // 6
        padding: 0, // 6
        border: '5px solid green'
      },
      '&:-moz-focusring': {
        outline: '1px dotted ButtonText' // 7
      }
    }
  }
});
