import React from 'react';
import { HeaderContainer, HeaderElement } from './StyledArchiveResultsHeader';

const ArchiveResultHeader = () => {
  return (
    <HeaderContainer>
      <HeaderElement>Nr</HeaderElement>
      <HeaderElement>Data utworzenia</HeaderElement>
      <HeaderElement>Konfiguracja</HeaderElement>
      <HeaderElement>Imię i nazwisko</HeaderElement>
      <HeaderElement>Stanowisko</HeaderElement>
    </HeaderContainer>
  );
};

export default ArchiveResultHeader;
