import React, { useCallback, useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import { ExchangeReportFormWrapper, StyledExchangeReportForm } from './StyledExchangeReportForm';
import axios from '../../../axios';
import { exchangeReportEndpoints } from '../../../shared/config/endpoints';
import FormSelect from '../../../components/FormSelect/FormSelect';
import Message from '../../../components/Message/Message';

const ExchangeReportForm = () => {
  const [formData, changeFormData] = useState({});
  const [error, setError] = useState(false);
  const [selects, setSelects] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const hideMessage = useCallback(() => {
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  }, []);

  const saveData = useCallback(async () => {
    const data = {
      ...formData,
    };
    try {
      setError(false);
      await axios.post(exchangeReportEndpoints.post, data);
      setFormSubmitted(true);
      hideMessage();
    } catch (error) {
      setError(error.response.data);
    }
  }, [formData, hideMessage]);

  const formSubmitHandler = useCallback(
    (event) => {
      setFormSubmitted(false);
      event.preventDefault();
      saveData();
    },
    [saveData]
  );

  const inputChangedHandler = useCallback((event) => {
    event.preventDefault();
    changeFormData((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  }, []);

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
  }, [inputChangedHandler]);

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

  return (
    <>
      {error ? <Message message={error.message} messageType={'ERROR'} /> : null}
      {formSubmitted ? <Message message={'Raport zapisany pomyślnie'} messageType={'SUCCESS'} /> : null}
      <ExchangeReportFormWrapper>
        <StyledExchangeReportForm>
          {inputs}
          {selects}
        </StyledExchangeReportForm>
        <SeparateLine />
        <SubmitButton title={'Zatwierdź'} buttonProps={{ type: 'submit', onClick: formSubmitHandler }} />
      </ExchangeReportFormWrapper>
    </>
  );
};

export default ExchangeReportForm;
