import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import Autocomplete from '@appfocused/ui-components/dist/es/components/Autocomplete';
import Heading from '@appfocused/ui-components/dist/es/components/Heading';

import { getReactiveSuggestions } from './service';
import { Asset } from '../@types/interfaces';
import MenuItem from '@material-ui/core/MenuItem';

const subject$ = new BehaviorSubject('');

const suggestionRenderer = (suggestion: Asset, isHighlighted: boolean, _?: string) => (
  <MenuItem key={suggestion.symbol} selected={isHighlighted} component="div">
    {suggestion.symbol} {suggestion.name} {suggestion.region}
  </MenuItem>
);

const suggestionFilter = () => (suggestion: Asset) => {
  return Number(suggestion.matchScore) >= 0.75;
};

interface Props {
  onSelect?: (suggestion: Asset) => void;
  value?: string;
}

export const Lookup: React.FunctionComponent<Props> = ({ onSelect, value: valueProp = '' }) => {
  const [suggestions, setSuggestions] = React.useState([]);
  const [value, setValue] = React.useState(valueProp);
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

  const handleSelect = (suggestion: Asset) => {
    if (onSelect) {
      onSelect(suggestion);
    }
  };

  return (
    <>
      <Heading>Lookup</Heading>
      <Autocomplete
        suggestions={suggestions}
        onChange={handleChange}
        suggestionRenderer={suggestionRenderer}
        suggestionFilter={suggestionFilter}
        onSelect={handleSelect}
        value={value}
      />
      {hasError && <div>Error!</div>}
    </>
  );
};
