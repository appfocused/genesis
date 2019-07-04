import * as React from 'react';
import { UP, DOWN, ENTER } from '../../utils/key-utils';

export interface UseAutocompleteArgs<Suggestion> {
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect?: (suggestion: Suggestion) => void;
  suggestions?: Suggestion[];
  suggestionFilter?: (value: string) => (suggestion: Suggestion) => boolean;
  shouldRenderSuggestions?: (value: string) => boolean;
  value?: string;
}

const INITIAL_IDX = 0;

export function useAutocomplete<Suggestion>({
  onBlur,
  onChange,
  onSelect,
  suggestions = [],
  suggestionFilter = () => () => true,
  shouldRenderSuggestions = (v: string) => v.length >= 2,
  value = ''
}: UseAutocompleteArgs<Suggestion> = {}) {
  const [inputValue, setInputValue] = React.useState(value);
  const [highlightedIndex, setSuggestionIdx] = React.useState<number | undefined>(undefined);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleSuggestionsVisibility = (v: string) => {
    setIsOpen(shouldRenderSuggestions(v));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSuggestionsVisibility(e.target.value);
    setSuggestionIdx(INITIAL_IDX);
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const matchingSuggestions = suggestions.filter(suggestionFilter(inputValue));

  const handleSelect = (idx: number) => {
    const selectedSuggestion = matchingSuggestions[idx];
    if (selectedSuggestion) {
      setIsOpen(false);
      setInputValue('');

      if (onSelect) {
        onSelect(selectedSuggestion);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === DOWN) {
      e.preventDefault();
      const idx = highlightedIndex;
      const nextIdx = idx !== undefined ? idx + 1 : INITIAL_IDX;

      if (nextIdx < matchingSuggestions.length) {
        setSuggestionIdx(nextIdx);
      } else {
        setSuggestionIdx(INITIAL_IDX);
      }
    }

    if (e.keyCode === UP) {
      e.preventDefault();
      const lastIdx = matchingSuggestions.length - 1;
      const idx = highlightedIndex;
      const prevIdx = idx !== undefined ? idx - 1 : lastIdx;

      if (prevIdx >= 0) {
        setSuggestionIdx(prevIdx);
      } else {
        setSuggestionIdx(lastIdx);
      }
    }

    if (e.keyCode === ENTER && highlightedIndex !== undefined) {
      handleSelect(highlightedIndex);
    }
  };

  const handleClick = (idx: number) => {
    handleSelect(idx);
  };

  const handleBlur = () => {
    // delayed close of the dropdown as mouse onClick event needs to happen first
    setTimeout(() => {
      setIsOpen(false);
    }, 500);

    if (onBlur) {
      onBlur();
    }
  };

  const inputProps = {
    value: inputValue,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur
  };

  const suggestionProps = (suggestionIdx: number) => ({
    onClick: () => {
      handleClick(suggestionIdx);
    }
  });

  const suggestionsData = {
    matchingSuggestions,
    highlightedIndex,
    isOpen
  };

  return {
    inputProps,
    suggestionProps,
    suggestionsData
  };
}
