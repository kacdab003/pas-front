import React from 'react';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ResultsTable } from './StyledArchiveResults';

const ArchiveResults = () => {
  return (
    <ResultsTable>
      <ArchiveResultsHeader />
      <ArchiveResult
        id={'1234/2020'}
        date={'2020-08-12'}
        configuration={'1+3'}
        engineer={'Jan Kowalski'}
        technician={'Tomasz Nowak'}
      />
    </ResultsTable>
  );
};

export default ArchiveResults;
