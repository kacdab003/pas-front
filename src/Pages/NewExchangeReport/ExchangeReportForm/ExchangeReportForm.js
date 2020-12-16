import React from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import { ExchangeReportFormWrapper, StyledExchangeReportForm } from './StyledExchangeReportForm';

const ExchangeReportForm = ({ formProps }) => {
  const inputs = exchangeReportConfig.inputs.map((input) => {
    const inputProps = {
      type: input.type ? input.type : 'text',
      name: input.name,
      required: input.required,
      placeholder: input.placeholder && input.placeholder,
    };
    return <FormInput labelContent={input.label} inputProps={inputProps} />;
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
