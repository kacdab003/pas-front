import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import ExchangeReport from './ExchangeReport/ExchangeReport';

const ExchangeReports = ({ exchangeReportsArray }) => {
  const mappedExchangeReports = exchangeReportsArray.data.map((exchangeReport) => (
    <ExchangeReport {...exchangeReport} />
  ));
  return (
    <>
      <SearchBar label={'WYSZUKAJ'} placeholder={'Wpisz wyszukiwaną frazę'} />
      {mappedExchangeReports}
    </>
  );
};

export default ExchangeReports;
