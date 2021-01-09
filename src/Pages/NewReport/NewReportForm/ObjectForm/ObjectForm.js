import React, { useState } from 'react';
import SubmitButton from '../../../../components/SubmitButton/SubmitButton';
import { SecondaryHeader } from '../../../../components/UI/Headers/Headers';
import generateInputsFromConfig from '../../../../shared/config/forms/generateInputsFromConfig';
import newReportForms from '../../../../shared/config/forms/newReport';
import { StyledObjectForm, StyledObjectParagraph } from './StyledObjectForm';
import FormSelect from '../../../../components/FormSelect/FormSelect';

const ObjectForm = (props) => {
  const [object, setObject] = useState({});
  const [error, setError] = useState(false);

  const addExistingObjectHandler = (event) => {
    event.preventDefault();
    return console.log('Add existing object');
  };

  const addNewObjectHandler = (event) => {
    event.preventDefault();
    return console.log('Add new object');
  };

  const selectChangedHandler = (event) => {
    event.preventDefault();
    return console.log('SELECT CHANGED');
  };

  return (
    <div>
      <SecondaryHeader>Obiekty</SecondaryHeader>
      <StyledObjectParagraph>Dodaj istniejący obiekt</StyledObjectParagraph>
      <StyledObjectForm>
        <FormSelect
          key={newReportForms.objectFormSelector.label}
          defaultOptionLabel={newReportForms.objectFormSelector.defaultOptionLabel}
          labelContent={newReportForms.objectFormSelector.label}
          selectProps={{
            name: newReportForms.objectFormSelector.name,
            required: newReportForms.objectFormSelector.required,
            label: newReportForms.objectFormSelector.label,
            onChange: selectChangedHandler,
          }}
          refEndpoint={newReportForms.objectFormSelector.refEndpoint}
          refKey={newReportForms.objectFormSelector.refKey}
          onError={setError}
        />
        <SubmitButton title={'Dodaj'} buttonProps={{ onClick: addExistingObjectHandler }} />
      </StyledObjectForm>

      <StyledObjectParagraph>Dodaj nowy obiekt</StyledObjectParagraph>
      <StyledObjectForm>
        {generateInputsFromConfig(newReportForms.objectForm)}
        <SubmitButton title={'Dodaj'} buttonProps={{ onClick: addNewObjectHandler }} />
      </StyledObjectForm>
    </div>
  );
};

export default ObjectForm;
