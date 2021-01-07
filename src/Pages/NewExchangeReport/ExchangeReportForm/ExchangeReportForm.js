import React, { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import { ExchangeReportFormWrapper, StyledExchangeReportForm } from './StyledExchangeReportForm';
import Axios from 'axios';
import { exchangeReportEndpoints } from '../../../shared/config/endpoints';

const ExchangeReportForm = ({ formProps }) => {
  const [formData, changeFormData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    exchangeReportConfig.inputs.forEach((input) => changeFormData((prevState) => ({ ...prevState, [input.name]: '' })));
    exchangeReportConfig.selects.forEach((select) =>
      changeFormData((prevState) => ({ ...prevState, [select.name]: '' }))
    );
  }, []);

  const inputChangedHandler = (event) => {
    event.preventDefault();
    changeFormData((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const inputs = exchangeReportConfig.inputs.map(({ type, name, required, placeholder, label }) => {
    const inputProps = {
      type,
      label,
      name,
      required,
      placeholder,
      onChange: inputChangedHandler,
    };
    return <FormInput labelContent={label} inputProps={inputProps} />;
  });

  return (
    <ExchangeReportFormWrapper>
      <StyledExchangeReportForm>{inputs}</StyledExchangeReportForm>
      <SeparateLine />
      <SubmitButton title={'Zatwierdź'} buttonProps={{ type: 'submit', onClick: formSubmitHandler }} />
    </ExchangeReportFormWrapper>
  );
};

export default ExchangeReportForm;
