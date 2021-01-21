import React from 'react';

import moment from 'moment';
import { StyledExchangeReport } from './StyledExchangeReport';

import { IconButton } from '../../../IconButton/IconButton';
import editIcon from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/delete.png';

const ExchangeReport = ({
  newModuleNumber,
  exchangeWorker,
  damagedModuleNumber,
  objectNumber,
  exchangeDate,
  socket,
  editHandler,
  deleteHandler,
}) => {
  return (
    <StyledExchangeReport>
      <div>
        Numer modułu: <span>{newModuleNumber}</span>
      </div>
      <div>
        Numer uszkodzonego modułu: <span>{damagedModuleNumber}</span>
      </div>
      <div>
        Numer obiektu: <span>{objectNumber}</span>
      </div>
      <div>
        Gniazdo: <span>{socket}</span>
      </div>
      <div>
        Pracownik: <span>{exchangeWorker?.fullName}</span>
      </div>
      <div>
        Data wymiany: <span> {moment(exchangeDate).format('YYYY-MM-DD hh:mm')}</span>
      </div>
      <IconButton src={editIcon} onClick={editHandler} />
      <IconButton src={deleteIcon} onClick={deleteHandler} />
    </StyledExchangeReport>
  );
};

export default ExchangeReport;
