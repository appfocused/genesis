import * as React from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { MenuItem } from '@material-ui/core';
import Input from '../Input';
import { useAutocomplete, UseAutocompleteArgs } from './useAutocomplete';
import { useStyles } from './Autocomplete.style';

interface Props<T> extends UseAutocompleteArgs<T> {
  inputClassName?: string;
  suggestionRenderer?: (suggestion: T, isHighlighted: boolean, value?: string) => JSX.Element;
}

function renderSuggestion(suggestion: string, index: number, highlightedIndex?: number) {
  const isHighlighted = highlightedIndex === index;

  return (
    <MenuItem key={suggestion} selected={isHighlighted} component="div">
      {suggestion}
    </MenuItem>
  );
}

function Autocomplete<T>(props: Props<T>) {
  const {
    inputClassName,
    suggestions,
    onSelect,
    onChange,
    onBlur,
    shouldRenderSuggestions,
    suggestionRenderer,
    suggestionFilter,
    value,
    ...rest
  } = props;

  const classes = useStyles(props);
  const inputClasses = clsx(classes.input, inputClassName);

  const {
    inputProps,
    suggestionProps,
    suggestionsData: { isOpen, highlightedIndex, matchingSuggestions }
  } = useAutocomplete<T>({
    suggestions,
    suggestionFilter,
    onSelect,
    onChange,
    shouldRenderSuggestions,
    value
  });

  return (
    <div className={classes.container}>
      <Input {...inputProps} {...rest} className={inputClasses} fullWidth />
      {isOpen ? (
        <Paper className={classes.paper} square>
          {matchingSuggestions.map((suggestion, idx) => {
            const isHighlighted = highlightedIndex === idx;
            return (
              <div key={`suggestion-${idx}`} {...suggestionProps(idx)}>
                {suggestionRenderer
                  ? suggestionRenderer(suggestion, isHighlighted, value)
                  : undefined}
              </div>
            );
          })}
        </Paper>
      ) : null}
    </div>
  );
}

// const Autocomplete: React.FunctionComponent<Props> = props => {
//   const {
//     inputClassName,
//     suggestions,
//     onSelect,
//     onChange,
//     shouldRenderSuggestions,
//     suggestionRenderer,
//     suggestionFilter,
//     value,
//     ...rest
//   } = props;

//   // const {
//   //   inputProps,
//   //   suggestionsData: { isOpen, highlightedIndex }
//   // } = useAutocomplete({
//   //   suggestions,
//   //   onSelect,
//   //   onChange,
//   //   shouldRenderSuggestions,
//   //   value
//   // });

//   const classes = useStyles(props);
//   const inputClasses = clsx(classes.input, inputClassName);
//   const matchingSuggestions = suggestionFilter ? suggestions.filter(suggestionFilter) : suggestions;

//   return (
//     <div className={classes.container}>
//       <Input {...rest} className={inputClasses} fullWidth />
//       {isOpen ? (
//         <Paper className={classes.paper} square>
//           {matchingSuggestions.map((suggestion, idx) => {
//             const isHighlighted = highlightedIndex === idx;
//             return suggestionRenderer
//               ? suggestionRenderer(suggestion, isHighlighted, value)
//               : undefined;
//           })}
//         </Paper>
//       ) : null}
//     </div>
//   );
// };

export default Autocomplete;
