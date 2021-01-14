import React from 'react';
import { SearchInput } from './SearchInput/StyledSearchInput';
import { SearchLabel } from './SearchLabel/StyledSearchLabel';
import { StyledSearchBar } from './StyledSearchBar';

const SearchBar = ({ label, placeholder, value, setValue }) => {
  return (
    <StyledSearchBar>
      <SearchLabel>{label}</SearchLabel>
      <SearchInput value={value} onChange={(event) => setValue(event.target.value)} placeholder={placeholder} />
    </StyledSearchBar>
  );
};

export default SearchBar;
