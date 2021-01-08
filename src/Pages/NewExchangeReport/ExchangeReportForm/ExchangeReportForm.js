import React, { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import { ExchangeReportFormWrapper, StyledExchangeReportForm } from './StyledExchangeReportForm';
import Axios from 'axios';
import { exchangeReportEndpoints } from '../../../shared/config/endpoints';
import FormSelect from '../../../components/FormSelect/FormSelect';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

const ExchangeReportForm = ({ formProps }) => {
  const [formData, changeFormData] = useState({});
  const [error, setError] = useState(false);
  const [selects, setSelects] = useState([]);

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
    return <FormInput key={label} labelContent={label} inputProps={inputProps} />;
  });

  useEffect(() => {
    exchangeReportConfig.inputs.forEach((input) => changeFormData((prevState) => ({ ...prevState, [input.name]: '' })));
    exchangeReportConfig.selects.forEach((select) =>
      changeFormData((prevState) => ({ ...prevState, [select.name]: '' }))
    );
    const selectsFromConfig = exchangeReportConfig.selects.map(
      ({ name, required, label, refEndpoint, refKey, defaultOptionLabel }) => {
        const selectProps = {
          name,
          required,
          label,
          onChange: inputChangedHandler,
        };
        return (
          <FormSelect
            key={label}
            defaultOptionLabel={defaultOptionLabel}
            labelContent={label}
            selectProps={selectProps}
            refEndpoint={refEndpoint}
            refKey={refKey}
            onError={setError}
          />
        );
      }
    );

    setSelects(selectsFromConfig);
  }, []);

  const saveData = async () => {
    const data = {
      ...formData,
    };

    try {
      await Axios.post(exchangeReportEndpoints.post, data);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    saveData();
  };

  if (error) {
    return (
      <ExchangeReportFormWrapper>
        <ErrorMessage message={'Coś poszło nie tak...'} />
      </ExchangeReportFormWrapper>
    );
  }

  return (
    <ExchangeReportFormWrapper>
      <StyledExchangeReportForm>
        {inputs}
        {selects}
      </StyledExchangeReportForm>
      <SeparateLine />
      <SubmitButton title={'Zatwierdź'} buttonProps={{ type: 'submit', onClick: formSubmitHandler }} />
    </ExchangeReportFormWrapper>
  );
};

export default ExchangeReportForm;
