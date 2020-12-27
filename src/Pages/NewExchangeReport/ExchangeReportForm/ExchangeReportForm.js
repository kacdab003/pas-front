import React from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import { ExchangeReportFormWrapper, StyledExchangeReportForm } from './StyledExchangeReportForm';

const ExchangeReportForm = ({ formProps }) => {
  const inputs = exchangeReportConfig.inputs.map(({ type, name, required, placeholder, label }) => {
    const inputProps = {
      type,
      label,
      name,
      required,
      placeholder,
    };
    return <FormInput labelContent={label} inputProps={inputProps} />;
  });
  return (
    <ExchangeReportFormWrapper>
      <StyledExchangeReportForm>{inputs}</StyledExchangeReportForm>
      <SeparateLine />
      <SubmitButton title={'Zatwierdź'} buttonProps={{ type: 'submit' }} />
    </ExchangeReportFormWrapper>
  );
};

export default ExchangeReportForm;
