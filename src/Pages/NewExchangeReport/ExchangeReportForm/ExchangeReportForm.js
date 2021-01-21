import React, { useState } from 'react';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import exchangeReportConfig from '../../../shared/config/forms/exchangeReport';
import { StyledExchangeReportForm } from './StyledExchangeReportForm';
import axios from '../../../axios';

import generateFormikControlsFromConfig from '../../../shared/config/forms/generateFormikControlsFromConfig';
import Message from '../../../components/Message/Message';
import { hideMessage } from '../../../shared/utils/forms/formUtils';
import { Form, Formik } from 'formik';
import { exchangeReportEndpoints } from '../../../shared/config/endpoints';
import exchangeReportValidationSchema from '../../../shared/config/forms/exchangeReportValidationSchema';

const ExchangeReportForm = () => {
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const initialValues = {
    exchangeDate: null,
    objectNumber: 0,
    socket: 0,
    exchangeWorker: '',
    damagedModuleNumber: 0,
    newModuleNumber: 0,
  };

  const saveData = async (dataToSave) => {
    try {
      setError(false);
      await axios.post(exchangeReportEndpoints.post, dataToSave);
      setFormSubmitted(true);
      hideMessage(setFormSubmitted);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const onSubmit = (values) => {
    saveData(JSON.parse(JSON.stringify(values)));
  };

  return (
    <>
      {error ? <Message message={error.message} messageType={'ERROR'} /> : null}
      {formSubmitted ? <Message message={'Raport zapisany pomyślnie'} messageType={'SUCCESS'} /> : null}
      <Formik
        initialValues={initialValues}
        validationSchema={exchangeReportValidationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
      >
        {(formik) => {
          const isDisabled = !formik.isValid || !formik.dirty;

          const buttonProps = {
            type: 'submit',
            disabled: isDisabled,
          };

          return (
            <Form>
              <StyledExchangeReportForm>
                {generateFormikControlsFromConfig(exchangeReportConfig)}
              </StyledExchangeReportForm>
              <SeparateLine />
              <SubmitButton buttonProps={buttonProps} title="Wyślij" />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ExchangeReportForm;
