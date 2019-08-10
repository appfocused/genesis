import * as React from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Input from '../Input';
import { useAutocomplete, UseAutocompleteArgs } from './useAutocomplete';
import { useStyles } from './Autocomplete.style';

export interface AutocompleteProps<T> extends UseAutocompleteArgs<T> {
  inputClassName?: string;
  suggestionRenderer?: (suggestion: T, isHighlighted: boolean, value?: string) => JSX.Element;
}

function Autocomplete<T>(props: AutocompleteProps<T>) {
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

export default Autocomplete;
