import React from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import { StyledExchangeReportForm } from './StyledExchangeReportForm';

const ExchangeReportForm = () => {
  return (
    <StyledExchangeReportForm>
      <FormInput labelContent={'DATA WYMIANY'} />
      <FormInput labelContent={'INŻYNIER'} />
      <FormInput labelContent={'TECHNIK'} />
      <FormInput labelContent={'NR OBIEKTU'} />
      <FormInput labelContent={'GNIAZDO'} />
      <FormInput labelContent={'NR EWIDENCYJNY NOWEGO MODUŁU'} />
      <FormInput labelContent={'NR EWIDENCYJNY USZKODZONEGO MODUŁU'} />
    </StyledExchangeReportForm>
  );
};

export default ExchangeReportForm;
