import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ResultsTable } from './StyledArchiveResults';
import moment from 'moment';

const ArchiveResults = () => {
  const [archiveResults, setArchiveResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArchiveResults = async () => {
      const results = await Axios.get('http://localhost:3000/reports');
      console.log(results.data);
      const mappedResults = results.data.map((result) => ({
        key: result._id,
        id: result.nr,
        date: moment(result.createdAt).format('YYYY-MM-DD hh:mm'),
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
      <tbody>
        <ArchiveResultsHeader />
        {!isLoading &&
          archiveResults.map((result) => (
            <ArchiveResult
              key={result.key}
              id={result.id}
              date={result.date}
              configuration={result.configuration}
              fullName={result.fullName}
              office={result.office}
            />
          ))}
      </tbody>
    </ResultsTable>
  );
};

export default ArchiveResults;
