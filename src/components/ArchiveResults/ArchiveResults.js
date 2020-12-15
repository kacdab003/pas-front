import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ResultsTable } from './StyledArchiveResults';

const ArchiveResults = () => {
  const [archiveResults, setArchiveResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArchiveResults = async () => {
      const results = await Axios.get('http://localhost:3000/reports');
      console.log(results.data);
      const mappedResults = results.data.map((result) => ({
        id: result.nr,
        date: result.createdAt,
        configuration: result.configuration,
        fullName: result.worker.name + ' ' + result.worker.surname,
        office: result.worker.position === 'ENGINEER' ? 'INŻYNIER' : 'TECHNIK',
      }));
      setArchiveResults(mappedResults);
      setIsLoading(false);
    };
    fetchArchiveResults();
  }, []);
  if (isLoading) {
    return <CenteredLoader />;
  }
  return (
    <ResultsTable>
      <ArchiveResultsHeader />
      {!isLoading &&
        archiveResults.map((result) => (
          <ArchiveResult
            id={result.id}
            date={result.date}
            configuration={result.configuration}
            fullName={result.fullName}
            office={result.office}
          />
        ))}
    </ResultsTable>
  );
};

export default ArchiveResults;
