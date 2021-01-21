import React, { useState, useEffect } from 'react';
import { exchangeReportEndpoints } from '../../../../shared/config/endpoints';
import axios from '../../../../axios';
import { Formik, Form } from 'formik';
import generateFormikControlsFromConfig from '../../../../shared/config/forms/generateFormikControlsFromConfig';
import { StyledExchangeReportForm } from '../../../../Pages/NewExchangeReport/ExchangeReportForm/StyledExchangeReportForm';
import SeparateLine from '../../../../components/UI/SeparateLine/SeparateLine';
import CenteredLoader from '../../../UI/CenteredLoader/CenteredLoader';
import Message from '../../../Message/Message';
import SubmitButton from '../../../SubmitButton/SubmitButton';
import { hideMessage } from '../../../../shared/utils/forms/formUtils';
import { useHistory } from 'react-router';
import exchangeReportValidationSchema from '../../../../shared/config/forms/exchangeReportValidationSchema';
import exchangeReportConfig from '../../../../shared/config/forms/exchangeReport';

const ExchangeReportEdit = (props) => {
  const reportId = props.location.state;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [errorForm, setErrorForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    const openReport = async (reportId) => {
      try {
        await axios.get(exchangeReportEndpoints.get + '/' + reportId).then((response) => {
          console.log(response.data);
          setInitialValues({
            exchangeDate: response.data.exchangeDate,
            objectNumber: response.data.objectNumber,
            socket: response.data.socket,
            exchangeWorker: response.data.exchangeWorker,
            damagedModuleNumber: response.data.damagedModuleNumber,
            newModuleNumber: response.data.newModuleNumber,
          });
          setIsLoading(false);
        });
      } catch (error) {
        setError(error?.response?.data || error.message);
        setIsLoading(false);
      }
    };
    openReport(reportId);
  }, []);

  const backButtonHandler = () => {
    history.push({
      pathname: '/archive',
    });
  };

  const saveData = async (reportId, dataToSave) => {
    try {
      setErrorForm(false);
      await axios.patch(exchangeReportEndpoints.patch + reportId, dataToSave);
      setFormSubmitted(true);
      hideMessage(setFormSubmitted);
    } catch (error) {
      setErrorForm(error.response.data);
    }
  };

  const onSubmit = (values) => {
    saveData(reportId, JSON.parse(JSON.stringify(values)));
  };

  if (isLoading) {
    return <CenteredLoader />;
  }

  if (error) {
    return <Message message={'Błąd wczytywania danych!'} messageType={'ERROR'} />;
  }

  return (
    <>
      <h2>EDYCJA RAPORTU: {initialValues.nr}</h2>
      <br />
      <SubmitButton title="WRÓĆ" buttonProps={{ onClick: backButtonHandler }} />
      <>
        {errorForm ? <Message message={error.message} messageType={'ERROR'} /> : null}
        {formSubmitted ? <Message message={'Raport zaktualizowany pomyślnie'} messageType={'SUCCESS'} /> : null}
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
                <SubmitButton buttonProps={buttonProps} title="Zaktualizuj" />
              </Form>
            );
          }}
        </Formik>
      </>
    </>
  );
};

export default ExchangeReportEdit;
