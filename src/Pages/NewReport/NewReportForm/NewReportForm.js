import React, { useState } from 'react';
import { FormSectionWrapper } from './StyledNewReportForm';
import newReportForms from '../../../shared/config/forms/newReport';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import { Formik, Form } from 'formik';
import newReportValidationSchema from '../../../shared/config/forms/newReportValidationSchema';
import generateFormikControlsFromConfig from '../../../shared/config/forms/generateFormikControlsFromConfig';
import axios from 'axios';
import Message from '../../../components/Message/Message';
import { hideMessage } from '../../../shared/utils/forms/formUtils';
import { newReportEndpoints } from '../../../shared/config/endpoints';

const NewReportForm = () => {
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const initialValues = {
    nr: '',
    workers: ['', ''],
    configuration: '',
    pwr_set: 0,
    mod_set: 0,
    module: '',
    rms: '',
    objects: [
      {
        name: '',
        T1: 0,
        T2: 0,
        T3: 0,
        C1: 0,
        U: [{ moduleNumber: 0, socket: 0, type: '' }],
      },
    ],
    pump: '',
    pressure: 0,
    temperatureIn: 0,
    temperatureOut: 0,
    resistanceIn: 0,
    resistanceOut: 0,
    waterCounter: 0,
    openingLevelA: 0,
    openingLevelB: 0,
    supplyAmount: 0,
    lighting: false,
    isCassetteOpened: false,
    dabExciter: '',
    dabPowerOut: 0,
    dabPowerReceived: 0,
    dabMer: 0,
    dabShoulderUp: 0,
    dabShoulderDown: 0,
    dabGeneral: 0,
    dabTMA: 0,
    dabTMB: 0,
    accidentDescription: '',
  };

  const saveData = async (dataToSave) => {
    try {
      setError(false);
      await axios.post(newReportEndpoints.post, dataToSave);
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
        validationSchema={newReportValidationSchema}
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
              <FormSectionWrapper rows={1} columns={3}>
                {generateFormikControlsFromConfig(newReportForms.firstSection)}
              </FormSectionWrapper>
              <SeparateLine />
              <FormSectionWrapper rows={1} columns={4}>
                {generateFormikControlsFromConfig(newReportForms.secondSection)}
              </FormSectionWrapper>
              <SeparateLine />
              <FormSectionWrapper rows={4} columns={6}>
                {generateFormikControlsFromConfig(newReportForms.thirdSection)}
              </FormSectionWrapper>
              <SeparateLine />
              <FormSectionWrapper rows={1} columns={2}>
                {generateFormikControlsFromConfig(newReportForms.fourthSection)}
              </FormSectionWrapper>
              <SeparateLine />
              {generateFormikControlsFromConfig(newReportForms.sixthSection)}
              <SeparateLine />
              <FormSectionWrapper rows={1} columns={1}>
                {generateFormikControlsFromConfig(newReportForms.fifthSection)}
              </FormSectionWrapper>
              <SubmitButton buttonProps={buttonProps} title="Wyślij" />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default NewReportForm;
