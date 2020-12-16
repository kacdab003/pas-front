import React from 'react';

import { MainHeader } from '../../components/UI/Headers/Headers';

import ExchangeReportForm from './ExchangeReportForm/ExchangeReportForm';

const NewExchangeReport = () => {
  return (
    <>
      <MainHeader>Formularz raportu wymiany</MainHeader>
      <ExchangeReportForm />
    </>
  );
};

export default NewExchangeReport;
