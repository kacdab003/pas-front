import React, { useState } from 'react';
import Message from '../../Message/Message';
import SearchBar from '../../SearchBar/SearchBar';
import { ErrorResults } from '../StyledArchiveResults';
import ExchangeReport from './ExchangeReport/ExchangeReport';

import { useHistory } from 'react-router';

const ExchangeReports = ({ exchangeReportsArray }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  let mappedExchangeReports = exchangeReportsArray.data;
  if (searchQuery) {
    mappedExchangeReports = mappedExchangeReports.filter((report) => {

      const lowerCasedSearchQuery = searchQuery.toLowerCase().trim();
      const isSearchResult =
        report?.damagedModuleNumber?.toString?.()?.toLowerCase?.()?.includes?.(lowerCasedSearchQuery) ||
        report?.exchangeDate?.toString?.()?.toLowerCase?.()?.includes?.(lowerCasedSearchQuery) ||
        report?.exchangeWorker?.fullName?.toLowerCase?.()?.includes?.(lowerCasedSearchQuery) ||
        report?.newModuleNumber?.toString?.()?.toLowerCase?.()?.includes?.(lowerCasedSearchQuery) ||
        report?.objectNumber?.toString?.()?.toLowerCase?.()?.includes?.(lowerCasedSearchQuery) ||
        report?.socket?.toString?.().includes?.(lowerCasedSearchQuery);
      return isSearchResult;
    });
  }

  const exchangeReportEditHandler = (reportId) => {
    history.push({
      pathname: '/exchange-report-edit',
      state: reportId,
    });
  };

  const exchangeReportDeleteHandler = (reportId) => {
    history.push({
      pathname: '/exchange-report-delete',
      state: reportId,
    });
  };

  const exchangeReportsToRender = mappedExchangeReports.map((exchangeReport) => (
    <ExchangeReport
      {...exchangeReport}
      editHandler={() => exchangeReportEditHandler(exchangeReport._id)}
      deleteHandler={() => exchangeReportDeleteHandler(exchangeReport._id)}
    />
  ));
  
  let content =
    exchangeReportsToRender.length === 0 ? (
      <ErrorResults>
        <Message messageType={'ERROR'} message={'Brak wyników'} />
      </ErrorResults>
    ) : (
      exchangeReportsToRender
    );
  return (
    <>
      <SearchBar
        setValue={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
        label={'WYSZUKAJ'}
        placeholder={'Wpisz wyszukiwaną frazę'}
      />
      {content}
    </>
  );
};

export default ExchangeReports;
