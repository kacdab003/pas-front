import React from 'react';
import { MainHeader } from '../../components/UI/Headers/Headers';
import SeparateLine from '../../components/UI/SeparateLine/SeparateLine';
import ExchangeReportForm from './ExchangeReportForm/ExchangeReportForm';

const NewExchangeReport = () => {
  return (
    <>
      <MainHeader>Formularz raportu wymiany</MainHeader>
      <ExchangeReportForm />
      <SeparateLine />
    </>
  );
};

export default NewExchangeReport;
