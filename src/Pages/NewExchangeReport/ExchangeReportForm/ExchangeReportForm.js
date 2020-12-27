import React from 'react';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import generateInputsFromConfig from '../../../shared/config/forms/generateInputsFromConfig';
import { ExchangeReportFormWrapper, StyledExchangeReportForm } from './StyledExchangeReportForm';

const ExchangeReportForm = ({ formProps }) => {
  return (
    <ExchangeReportFormWrapper>
      <StyledExchangeReportForm>{generateInputsFromConfig(exchangeReportConfig.inputs)}</StyledExchangeReportForm>
      <SeparateLine />
      <SubmitButton title={'Zatwierdź'} buttonProps={{ type: 'submit' }} />
    </ExchangeReportFormWrapper>
  );
};

export default ExchangeReportForm;
