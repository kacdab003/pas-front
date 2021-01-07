import React from 'react';
import SubmitButton from '../../../../components/SubmitButton/SubmitButton';
import { SecondaryHeader } from '../../../../components/UI/Headers/Headers';
import generateInputsFromConfig from '../../../../shared/config/forms/generateInputsFromConfig';
import newReportForms from '../../../../shared/config/forms/newReport';
import { StyledObjectForm } from './StyledObjectForm';

const ObjectForm = (props) => {
  const handler = (event) => {
    event.preventDefault();
    return alert('TEST');
  };

  return (
    <div>
      <SecondaryHeader>Obiekty</SecondaryHeader>
      <StyledObjectForm>
        {generateInputsFromConfig(newReportForms.objectForm)}
        <SubmitButton title={'Dodaj'} buttonProps={{ onClick: handler }} />
      </StyledObjectForm>
    </div>
  );
};

export default ObjectForm;
