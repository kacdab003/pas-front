import React from 'react';
import { StyledExchangeReportResult } from './StyledArchiveResult';
import { IconButton } from '../../IconButton/IconButton';
import editIcon from '../../../assets/icons/edit.png';
import deleteIcon from '../../../assets/icons/delete.png';
import moment from 'moment';

const ExchangeReportResult = (props) => {
  const {
    newModuleNumber,
    exchangeWorker,
    damagedModuleNumber,
    objectNumber,
    exchangeDate,
    socket,
  } = props.exchangeReportObject;

  const editHandler = props.editHandler;
  const deleteHandler = props.deleteHandler;

  return (
    <StyledExchangeReportResult>
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
      <IconButton src={editIcon} onClick={editHandler} />
      <IconButton src={deleteIcon} onClick={deleteHandler} />
    </StyledExchangeReportResult>
  );
};

export default ExchangeReportResult;
