import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ErrorResults, ResultsTable } from './StyledArchiveResults';
import moment from 'moment';
import { archiveEndpoints, exchangeReportEndpoints } from '../../shared/config/endpoints';
import Message from '../../components/Message/Message';
import ExchangeReportResult from './ArchiveResult/ExchangeReportResult';
import { SecondaryHeader } from '../UI/Headers/Headers';
import SearchBar from '../SearchBar/SearchBar';

const ArchiveResults = () => {
  const [fetchedReports, setFetchedReports] = useState([]);
  const [fetchedExchangeReports, setFetchedExchangeReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [reportsSearchText, setReportsSearchText] = useState('');
  const [exchangeReportsSearchText, setExchangeReportsSearchText] = useState('');
  const [filteredReports, setFilteredReports] = useState(fetchedReports);
  const [filteredExchangeReports, setFilteredExchangeReports] = useState(fetchedExchangeReports);

  const state = {
    fetchedReports,
    fetchedExchangeReports,
    isLoading,
    error,
    reportsSearchText,
    exchangeReportsSearchText,
    filteredReports,
    filteredExchangeReports,
  };
  console.log('STATE', state);

  const onReportSearch = (searchPhrase = '') => {
    const searchResult = fetchedReports.filter((report) => {
      return (
        report.configuration.toLowerCase().includes(searchPhrase) ||
        report.fullName?.toLowerCase().includes(searchPhrase) ||
        report.id.toString().toLowerCase().includes(searchPhrase)
      );
    });
    setFilteredReports(searchResult);
  };

  const onExchangeReportSearch = (searchPhrase = '') => {
    const searchResult = fetchedExchangeReports.filter((exchangeReport) => {
      console.log('EXCHANGE REPORT', exchangeReport);
      return (
        exchangeReport?.newModule?.moduleNumber.toString().toLowerCase().includes(searchPhrase.toLowerCase()) ||
        exchangeReport?.exchangeWorker?.fullName?.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        exchangeReport?.id?.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        exchangeReport?.objectNumber?.toString().toLowerCase().includes(searchPhrase.toLowerCase())
      );
    });
    setFilteredExchangeReports(searchResult);
  };

  const reportSearchPhraseEnteredHandler = (event) => {
    setReportsSearchText(event.target.value);
    onReportSearch(event.target.value || '');
  };

  const exchangeReportSearchPhraseEnteredHandler = (event) => {
    setExchangeReportsSearchText(event.target.value);
    onExchangeReportSearch(event.target.value || '');
  };

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
          fullName: result.workers[0]?.fullName,
          office: result.workers[0]?.position === 'ENGINEER' ? 'INŻYNIER' : 'TECHNIK',
        }));

        setFetchedReports(filteredResults);
        setFilteredReports(filteredResults);
        setFetchedExchangeReports(exchangeReportsData);
        setFilteredExchangeReports(exchangeReportsData);

        setIsLoading(false);
      } catch (error) {
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
    return <Message message={'Błąd wczytywania danych!'} messageType={'ERROR'} />;
  }
  const fetchedResultsElement = filteredReports.map((result) => (
    <ArchiveResult
      key={result.key}
      id={result.id}
      date={result.date}
      configuration={result.configuration}
      fullName={result.fullName}
      office={result.office}
    />
  ));
  const fetchedExchangeReportsElements = filteredExchangeReports.map((exchangeReport) => {
    return <ExchangeReportResult key={exchangeReport._id} exchangeReportObject={exchangeReport} />;
  });

  return (
    <>
      <SecondaryHeader>Raporty</SecondaryHeader>
      <SearchBar
        value={reportsSearchText}
        setValue={reportSearchPhraseEnteredHandler}
        label={'WYSZUKAJ'}
        placeholder={'Wpisz wyszukiwaną frazę'}
      />
      {!isLoading && fetchedResultsElement.length > 0 ? (
        <ResultsTable>
          <tbody>
            <ArchiveResultsHeader />
            {fetchedResultsElement}
          </tbody>
        </ResultsTable>
      ) : (
        <ErrorResults>
          <Message messageType={'ERROR'} message={'Brak wyników'} />
        </ErrorResults>
      )}

      <SecondaryHeader>Raporty wymiany</SecondaryHeader>
      <SearchBar
        value={exchangeReportsSearchText}
        setValue={exchangeReportSearchPhraseEnteredHandler}
        label={'WYSZUKAJ'}
        placeholder={'Wpisz wyszukiwaną frazę'}
      />

      {!isLoading && fetchedExchangeReportsElements.length > 0 ? (
        fetchedExchangeReportsElements
      ) : (
        <Message messageType={'ERROR'} message={'Brak wyników'} />
      )}
    </>
  );
};

export default ArchiveResults;
