import React from 'react';
import { exchangeReportEndpoints } from '../../../shared/config/endpoints';
import { StyledExchangeReportResult } from './StyledArchiveResult';
import moment from 'moment';

const ExchangeReportResult = (props) => {
  const { newModule, exchangeWorker, damagedModule, objectNumber, exchangeDate } = props.exchangeReportObject;
  console.log('exchangeReportObject', props.exchangeReportObject);

  return (
    <StyledExchangeReportResult>
      <p>Numer modułu: {newModule?.moduleNumber}</p>
      <p>Numer uszkodzonego modułu: {damagedModule?.moduleNumber}</p>
      <p>Numer obiektu: {objectNumber}</p>
      <p>Pracownik: {exchangeWorker?.name + ' ' + exchangeReportEndpoints?.surname}</p>
      <p>Data wymiany: {moment(exchangeDate).format('YYYY-MM-DD hh:mm')}</p>
    </StyledExchangeReportResult>
  );
};

export default ExchangeReportResult;
