import React, { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import { ExchangeReportFormWrapper, StyledExchangeReportForm } from './StyledExchangeReportForm';
import Axios from 'axios';
import { exchangeReportEndpoints } from '../../../shared/config/endpoints';
import FormSelect from '../../../components/FormSelect/FormSelect';

const ExchangeReportForm = ({ formProps }) => {
  const [formData, changeFormData] = useState({});
  const [error, setError] = useState(false);
  const [selectsLoading, setSelectsLoading] = useState(true);

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

  const selects = exchangeReportConfig.selects.map(({ name, required, label, refEndpoint, refKey }) => {
    const selectProps = {
      name,
      required,
      label,
      onChange: inputChangedHandler,
    };

    let options = [];

    //console.log('selectsLoading', selectsLoading);

    if (!selectsLoading) {
      console.log('OPCJE: ', options);
      return (
        <FormSelect labelContent={label} selectProps={selectProps}>
          {options}
        </FormSelect>
      );
    } else {
      return <div>POBIERANIE DANYCH DO SELECTÓW</div>; //ZMIENIĆ
    }
  });

  useEffect(() => {
    const fetchOptionsHints = async (refEndpoint, refKey) => {
      Axios.get(refEndpoint)
        .then((response) => {
          options = response.data.map((op) => {
            console.log(op[refKey]);
            return <option value={op._id}>{op[refKey]}</option>;
          });
          setSelectsLoading(false);
          //console.log('selectsLoading', selectsLoading);
        })
        .catch((error) => {
          setError(error.response.data);
          //setSelectsLoading(false); //ODKOMENTOWAĆ PO ROZWIĄZANIU PROBLEMU Z ENDPOINTEM USERS
        });
    };
  });

  const saveData = async () => {
    const data = {
      ...formData,
    };

    console.log(data);

    try {
      const response = await Axios.post(exchangeReportEndpoints.post, data);
      console.log(response);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    saveData();
  };

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
