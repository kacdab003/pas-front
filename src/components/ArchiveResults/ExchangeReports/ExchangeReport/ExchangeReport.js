import React from 'react';

import moment from 'moment';
import { StyledExchangeReport } from './StyledExchangeReport';

const ExchangeReport = ({ newModule, exchangeWorker, damagedModule, objectNumber, exchangeDate }) => {
  return (
    <StyledExchangeReport>
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
    </StyledExchangeReport>
  );
};

export default ExchangeReport;
