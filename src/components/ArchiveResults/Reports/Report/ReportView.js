import React, { useState, useEffect } from 'react';
import { archiveEndpoints } from '../../../../shared/config/endpoints';
import axios from '../../../../axios';
import { Formik, Form } from 'formik';
import newReportValidationSchema from '../../../../shared/config/forms/newReportValidationSchema';
import generateFormikControlsFromConfig from '../../../../shared/config/forms/generateFormikControlsFromConfig';
import { FormSectionWrapper } from '../../../../Pages/NewReport/NewReportForm/StyledNewReportForm';
import newReportForms from '../../../../shared/config/forms/newReport';
import SeparateLine from '../../../../components/UI/SeparateLine/SeparateLine';
import CenteredLoader from '../../../UI/CenteredLoader/CenteredLoader';
import Message from '../../../Message/Message';
import { useHistory } from 'react-router';
import SubmitButton from '../../../SubmitButton/SubmitButton';

const ReportView = (props) => {
  const reportId = props.location.state;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    const openReport = async (reportId) => {
      try {
        await axios.get(archiveEndpoints.get + '/' + reportId).then((response) => {
          console.log(response.data);
          setInitialValues({
            nr: response.data.nr,
            workers: [response.data.workers[0]._id, response.data.workers[1]._id],
            configuration: response.data.configuration,
            pwr_set: response.data.pwr_set,
            mod_set: response.data.mod_set,
            module: response.data.module,
            rms: response.data.rms,
            objects: response.data.objects,
            pump: response.data.pump,
            pressure: response.data.pressure,
            temperatureIn: response.data.temperatureIn,
            temperatureOut: response.data.temperatureOut,
            resistanceIn: response.data.resistanceIn,
            resistanceOut: response.data.resistanceOut,
            waterCounter: response.data.waterCounter,
            openingLevelA: response.data.openingLevelA,
            openingLevelB: response.data.openingLevelB,
            supplyAmount: response.data.supplyAmount,
            lighting: response.data.lighting,
            isCassetteOpened: response.data.isCassetteOpened,
            dabExciter: response.data.dabExciter,
            dabPowerOut: response.data.dabPowerOut,
            dabPowerReceived: response.data.dabPowerReceived,
            dabMer: response.data.dabMer,
            dabShoulderUp: response.data.dabShoulderUp,
            dabShoulderDown: response.data.dabShoulderDown,
            dabGeneral: response.data.dabGeneral,
            dabTMA: response.data.dabTMA,
            dabTMB: response.data.dabTMB,
            accidentDescription: response.data.accidentDescription,
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

  if (isLoading) {
    return <CenteredLoader />;
  }

  if (error) {
    return <Message message={'Błąd wczytywania danych!'} messageType={'ERROR'} />;
  }

  return (
    <>
      <h2>PODGLĄD RAPORTU NR: {initialValues.nr}</h2>
      <br />
      <SubmitButton title="WRÓĆ" onClick={backButtonHandler} />
      <Formik initialValues={initialValues} validationSchema={newReportValidationSchema} validateOnChange={false}>
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
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ReportView;
