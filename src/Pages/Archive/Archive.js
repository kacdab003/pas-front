import React from 'react';
import ArchiveResults from '../../components/ArchiveResults/ArchiveResults';
import SearchBar from '../../components/SearchBar/SearchBar';
import { MainHeader } from '../../components/UI/Headers/Headers';

const Archive = () => {
  return (
    <div>
      <MainHeader>Archiwum</MainHeader>
      <SearchBar label={'WYSZUKAJ'} placeholder={'Wpisz słowo kluczowe'} />
      <ArchiveResults />
    </div>
  );
};

export default Archive;
