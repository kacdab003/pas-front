import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ResultsTable } from './StyledArchiveResults';
import moment from 'moment';
import { archiveEndpoints } from '../../shared/config/endpoints';

const ArchiveResults = () => {
  const [archiveResults, setArchiveResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchArchiveResults = async () => {
      try {
        const response = await Axios.get(archiveEndpoints.get);

        const mappedResults = response.data.map((result) => ({
          key: result._id,
          id: result.nr,
          date: moment(result.createdAt).format('YYYY-MM-DD hh:mm'),
          configuration: result.configuration,
          fullName: result.worker.name + ' ' + result.worker.surname,
          office: result.worker.position === 'ENGINEER' ? 'INŻYNIER' : 'TECHNIK',
        }));
        setArchiveResults(mappedResults);
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data);
        setIsLoading(false);
      }
    };

    fetchArchiveResults();
  }, []);
  if (isLoading) {
    return <CenteredLoader />;
  }
  if (error) {
    return <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>BŁĄD WCZYTYWANIA DANYCH!</div>;
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
