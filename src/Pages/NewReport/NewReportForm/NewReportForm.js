import React from 'react';
import { FormSectionWrapper } from './StyledNewReportForm';
import newReportForms from '../../../shared/config/forms/newReport';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import generateInputsFromConfig from '../../../shared/config/forms/generateInputsFromConfig';
import ObjectForm from './ObjectForm/ObjectForm';
import ObjectResults from './ObjectResults/ObjectResults';
const NewReportForm = () => {
  return (
    <form>
      <FormSectionWrapper rows={1} columns={2}>
        {generateInputsFromConfig(newReportForms.firstSection)}
      </FormSectionWrapper>
      <SeparateLine />
      <FormSectionWrapper rows={2} columns={3}>
        {generateInputsFromConfig(newReportForms.secondSection)}
      </FormSectionWrapper>
      <SeparateLine />
      <ObjectForm />
      <ObjectResults />
    </form>
  );
};

export default NewReportForm;
