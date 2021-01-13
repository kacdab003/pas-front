import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ResultsTable } from './StyledArchiveResults';
import moment from 'moment';
import { archiveEndpoints, exchangeReportEndpoints } from '../../shared/config/endpoints';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import ExchangeReportResult from './ArchiveResult/ExchangeReportResult';
import { SecondaryHeader } from '../UI/Headers/Headers';

const ArchiveResults = () => {
  const [fetchedReports, setFetchedReports] = useState([]);
  const [fetchedExchangeReports, setFetchedExchangeReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchArchiveResults = async () => {
      try {
        const [reports, { data: exchangeReportsData }] = await axios.all([
          axios.get(archiveEndpoints.get),
          axios.get(exchangeReportEndpoints.get),
        ]);

        const filteredResults = reports.data.map((result) => ({
          key: result._id,
          id: result.nr,
          date: moment(result.createdAt).format('YYYY-MM-DD hh:mm'),
          configuration: result.configuration,
          fullName: result?.exchangeWorker?.name + ' ' + result?.exchangeWorker?.surname,
          office: result.worker.position === 'ENGINEER' ? 'INŻYNIER' : 'TECHNIK',
        }));
        console.log('FILTERED RESULTS', filteredResults);
        setFetchedReports(filteredResults);
        setFetchedExchangeReports(exchangeReportsData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error?.response?.data || error.message);
        setIsLoading(false);
      }
    };

    fetchArchiveResults();
  }, []);
  if (isLoading) {
    return <CenteredLoader />;
  }
  if (error) {
    return <ErrorMessage message={'Błąd wczytywania danych!'} />;
  }
  const fetchedResultsElement = fetchedReports.map((result) => (
    <ArchiveResult
      key={result.key}
      id={result.id}
      date={result.date}
      configuration={result.configuration}
      fullName={result.fullName}
      office={result.office}
    />
  ));
  const fetchedExchangeReportsElements = fetchedExchangeReports.map((exchangeReport) => {
    console.log('ER', exchangeReport);
    return <ExchangeReportResult exchangeReportObject={exchangeReport} />;
  });
  return (
    <>
      <SecondaryHeader>Raporty wymiany</SecondaryHeader>
      <ResultsTable>
        <tbody>
          <ArchiveResultsHeader />
          {!isLoading && fetchedResultsElement}
        </tbody>
      </ResultsTable>
      <SecondaryHeader>Raporty</SecondaryHeader>
      {!isLoading && fetchedExchangeReportsElements}
    </>
  );
};

export default ArchiveResults;
