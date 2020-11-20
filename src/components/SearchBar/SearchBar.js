import React from 'react';
import { SearchInput } from './SearchInput/StyledSearchInput';
import { SearchLabel } from './SearchLabel/StyledSearchLabel';
import { StyledSearchBar } from './StyledSearchBar';

const SearchBar = ({ label, placeholder }) => {
  return (
    <StyledSearchBar>
      <SearchLabel>{label}</SearchLabel>
      <SearchInput placeholder={placeholder} />
    </StyledSearchBar>
  );
};

export default SearchBar;
