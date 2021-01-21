import React from 'react';

import moment from 'moment';
import { StyledExchangeReport } from './StyledExchangeReport';

const ExchangeReport = ({
  newModuleNumber,
  exchangeWorker,
  damagedModuleNumber,
  socket,
  objectNumber,
  exchangeDate,
}) => {
  return (
    <StyledExchangeReport>
      <div>
        Numer obiektu: <span>{objectNumber}</span>
      </div>
      <div>
        Numer gniazda: <span>{socket}</span>
      </div>
      <div>
        Numer nowego modułu: <span>{newModuleNumber}</span>
      </div>
      <div>
        Numer uszkodzonego modułu: <span>{damagedModuleNumber}</span>
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
