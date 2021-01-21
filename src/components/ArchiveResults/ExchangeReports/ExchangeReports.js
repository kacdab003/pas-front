import React, { useState } from 'react';
import Message from '../../Message/Message';
import SearchBar from '../../SearchBar/SearchBar';
import { ErrorResults } from '../StyledArchiveResults';
import ExchangeReport from './ExchangeReport/ExchangeReport';

const ExchangeReports = ({ exchangeReportsArray }) => {
  const [searchQuery, setSearchQuery] = useState('');

  let mappedExchangeReports = exchangeReportsArray.data;
  if (searchQuery) {
    mappedExchangeReports = mappedExchangeReports.filter((report) => {
      const isSearchResult =
        report?.damagedModuleNumber?.toString?.()?.includes?.(searchQuery) ||
        report?.exchangeDate?.toString?.()?.includes?.(searchQuery) ||
        report?.exchangeWorker?.fullName?.includes?.(searchQuery) ||
        report?.newModuleNumber?.toString?.()?.includes?.(searchQuery) ||
        report?.objectNumber?.toString?.()?.includes?.(searchQuery) ||
        report?.socker?.toString?.().includes?.(searchQuery);
      return isSearchResult;
    });
  }
  const exchangeReportsToRender = mappedExchangeReports.map((exchangeReport) => <ExchangeReport {...exchangeReport} />);
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
