import React from 'react';
import { StyledExchangeReportResult } from './StyledArchiveResult';
import moment from 'moment';

const ExchangeReportResult = (props) => {
  const { newModule, exchangeWorker, damagedModule, objectNumber, exchangeDate } = props.exchangeReportObject;
  console.log('exchangeReportObject', props.exchangeReportObject);

  return (
    <StyledExchangeReportResult>
      <div>
        Numer modułu: <span>{newModule?.moduleNumber}</span>
      </div>
      <div>
        Numer uszkodzonego modułu: <span>{damagedModule?.moduleNumber}</span>
      </div>
      <div>
        Numer obiektu: <span>{objectNumber}</span>
      </div>
      <div>
        Pracownik: <span>{exchangeWorker?.fullName}</span>
      </div>
      <div>
        Data wymiany: <span> {moment(exchangeDate).format('YYYY-MM-DD hh:mm')}</span>
      </div>
    </StyledExchangeReportResult>
  );
};

export default ExchangeReportResult;
