import React from 'react';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ResultsTable } from './StyledArchiveResults';

const ArchiveResults = () => {
  const archiveResults = [
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
    { id: '1234/2020', date: '2020-08-12', configuration: '1+3', engineer: 'Jan Kowalski', technician: 'Tomasz Nowak' },
  ];
  return (
    <ResultsTable>
      <ArchiveResultsHeader />
      {archiveResults.map((result) => (
        <ArchiveResult
          id={result.id}
          date={result.date}
          configuration={result.configuration}
          engineer={result.engineer}
          technician={result.technician}
        />
      ))}
    </ResultsTable>
  );
};

export default ArchiveResults;
