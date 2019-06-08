import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import Autocomplete from '@appfocused/ui-components/dist/es/components/Autocomplete';
import { getReactiveSuggestions } from './service';
import { Asset } from '../@types/interfaces';
import MenuItem from '@material-ui/core/MenuItem';

const subject$ = new BehaviorSubject('');

const suggestionRenderer = (suggestion: Asset, isHighlighted: boolean, _?: string) => (
  <MenuItem key={suggestion.symbol} selected={isHighlighted} component="div">
    {suggestion.symbol} {suggestion.name}
  </MenuItem>
);

const suggestionFilter = () => (suggestion: Asset) => {
  return Number(suggestion.matchScore) >= 0.75;
};

const suggestionToString = (suggestion: Asset) => suggestion.symbol;

export const Lookup: React.FunctionComponent = props => {
  const [suggestions, setSuggestions] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const subscription = getReactiveSuggestions(subject$).subscribe(
      v => {
        setHasError(false);
        setSuggestions(v);
      },
      error => {
        setHasError(true);
        console.warn(error);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    subject$.next(e.target.value);
  };

  const onSelect = (suggestion: Asset) => setValue(suggestion.symbol);

  return (
    <>
      <h2>Lookup </h2>
      <Autocomplete
        suggestions={suggestions}
        onChange={handleChange}
        suggestionRenderer={suggestionRenderer}
        suggestionFilter={suggestionFilter}
        onSelect={onSelect}
        value={value}
      />
      {hasError && <div>Error!</div>}
    </>
  );
};
