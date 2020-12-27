import React from 'react';
import SubmitButton from '../../../../components/SubmitButton/SubmitButton';
import { SecondaryHeader } from '../../../../components/UI/Headers/Headers';
import generateInputsFromConfig from '../../../../shared/config/forms/generateInputsFromConfig';
import newReportForms from '../../../../shared/config/forms/newReport';
import { StyledObjectForm } from './StyledObjectForm';

const ObjectForm = () => {
  return (
    <div>
      <SecondaryHeader>Obiekty</SecondaryHeader>
      <StyledObjectForm>
        {generateInputsFromConfig(newReportForms.objectForm)}
        <SubmitButton title={'Dodaj'} />
      </StyledObjectForm>
    </div>
  );
};

export default ObjectForm;
