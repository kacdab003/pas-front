import React from 'react';
import { FormSectionWrapper } from './StyledNewReportForm';
import newReportForms from '../../../shared/config/forms/newReport';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import ObjectForm from './ObjectForm/ObjectForm';
import ObjectResults from './ObjectResults/ObjectResults';

import { Formik, Form } from 'formik';
import newReportValidationSchema from '../../../shared/config/forms/newReportValidationSchema';
import generateFormikControlsFromConfig from '../../../shared/config/forms/generateFormikControlsFromConfig';

const NewReportForm = () => {
  const initialValues = {
    nr: 0,
    workers: ['', ''],
    configuration: '',
    pwr_set: 0,
    mod_set: 0,
    module: '',
    rms: '',
    objects: [{}],
    pump: '',
    pressure: 0,
    temperatureIn: 0,
    temperatureOut: 0,
    resistanceIn: 0,
    resistanceOut: 0,
    waterCounter: 0,
    openingLevelA: 0,
    openingLevelB: 0,
    supplyAmmount: 0,
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

  const onSubmit = (values) => {
    console.log('Dane: ', values);

    console.log('Dane zdżejsonowane: ', JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={newReportValidationSchema} onSubmit={onSubmit}>
      <Form>
        <FormSectionWrapper rows={1} columns={2}>
          {generateFormikControlsFromConfig(newReportForms.firstSection)}
        </FormSectionWrapper>
        <FormSectionWrapper rows={12} columns={3}>
          {generateFormikControlsFromConfig(newReportForms.secondSection)}
        </FormSectionWrapper>
        <SeparateLine />
      </Form>
    </Formik>
  );
};

export default NewReportForm;
