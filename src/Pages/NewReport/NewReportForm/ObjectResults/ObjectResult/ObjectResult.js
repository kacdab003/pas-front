import React, { useState } from 'react';
import { IconButton } from '../../../../../components/IconButton/IconButton';
import { StyledObjectOptions, StyledObjectProperty, StyledObjectResult } from './StyledObjectResult';
import deleteIcon from '../../../../../assets/icons/delete.png';
import settingsIcon from '../../../../../assets/icons/settings.png';
import FormInput from '../../../../../components/FormInput/FormInput';
import Modal from '../../../../../components/UI/Modal/Modal';
import FormSelect from '../../../../../components/FormSelect/FormSelect';
import damagedModuleAdder from '../../../../../shared/config/forms/damagedModuleAdder';

const ObjectResult = ({ id, name, t1Value, t2Value, t3Value, c1Value, damagedModules, updateObjectValuesHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const updateObjectValues = (event) => {
    updateObjectValuesHandler(event.target.name, event.target.value, id);
  };

  const selectChangedHandler = (event) => {};

  const buttonClickedHandler = (event) => {
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <Modal show={showModal}>
        <FormSelect
          key={damagedModuleAdder.label}
          defaultOptionLabel={damagedModuleAdder.defaultOptionLabel}
          labelContent={damagedModuleAdder.label}
          selectProps={{
            name: damagedModuleAdder.name,
            required: damagedModuleAdder.required,
            label: damagedModuleAdder.label,
            onChange: selectChangedHandler,
          }}
          refEndpoint={damagedModuleAdder.refEndpoint}
          refKey={damagedModuleAdder.refKey}
          onError={setError}
        />
      </Modal>

      <StyledObjectResult>
        <StyledObjectProperty>{name}</StyledObjectProperty>
        <FormInput
          key={id + 't1'}
          labelContent="T1"
          inputProps={{
            type: 'number',
            name: 'T1',
            required: true,
            placeholder: 'T1',
            defaultValue: t1Value,
            onChange: updateObjectValues,
          }}
        />
        <FormInput
          key={id + 't2'}
          labelContent="T2"
          inputProps={{
            type: 'number',
            name: 'T2',
            required: true,
            placeholder: 'T2',
            defaultValue: t2Value,
            onChange: updateObjectValues,
          }}
        />
        <FormInput
          key={id + 't3'}
          labelContent="T3"
          inputProps={{
            type: 'number',
            name: 'T3',
            required: true,
            placeholder: 'T3',
            defaultValue: t3Value,
            onChange: updateObjectValues,
          }}
        />
        <FormInput
          key={id + 'c1'}
          labelContent="C1"
          inputProps={{
            type: 'number',
            name: 'C1',
            required: true,
            placeholder: 'C1',
            defaultValue: c1Value,
            onChange: updateObjectValues,
          }}
        />

        <StyledObjectOptions>
          <IconButton src={deleteIcon} />
          <IconButton src={settingsIcon} onClick={buttonClickedHandler} />
        </StyledObjectOptions>
      </StyledObjectResult>
    </React.Fragment>
  );
};

export default ObjectResult;
