import React from 'react';
import { IconButton } from '../../../../../components/IconButton/IconButton';
import { StyledObjectOptions, StyledObjectProperty, StyledObjectResult } from './StyledObjectResult';
import deleteIcon from '../../../../../assets/icons/delete.png';
import settingsIcon from '../../../../../assets/icons/settings.png';
import FormInput from '../../../../../components/FormInput/FormInput';

const ObjectResult = ({ id, name, t1Value, t2Value, t3Value, c1Value, damagedModules, updateObjectValuesHandler }) => {
  const updateObjectValues = (event) => {
    console.log(event.target.name, event.target.value, id);
    updateObjectValuesHandler(event.target.name, event.target.value, id);
  };
  return (
    <StyledObjectResult>
      <StyledObjectProperty>{name}</StyledObjectProperty>
      <FormInput
        key={id + 't1'}
        labelContent="T1"
        inputProps={{
          type: 'text',
          name: 't1Value',
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
          type: 'text',
          name: 't2Value',
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
          type: 'text',
          name: 't3Value',
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
          type: 'text',
          name: 'c1Value',
          required: true,
          placeholder: 'C1',
          defaultValue: c1Value,
          onChange: updateObjectValues,
        }}
      />

      <StyledObjectOptions>
        <IconButton src={deleteIcon} />
        <IconButton src={deleteIcon} />
        <IconButton src={settingsIcon} />
      </StyledObjectOptions>
    </StyledObjectResult>
  );
};

export default ObjectResult;
