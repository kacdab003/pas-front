import React, { useContext } from 'react';
import { StyledFormLabel, StyledSelectWrapper, StyledModuleSelect } from './StyledModuleSelect';
import { moduleAContext } from '../../Pages/NewReport/NewReportForm/ObjectResults/ObjectResult/ObjectResult';

const ModuleSelect = ({ defaultOptionLabel, labelContent, selectProps, refEndpoint, refKey, onError }) => {
  const modulesArray = useContext(moduleAContext);

  const options = modulesArray.moduleArray.map((option) => {
    if (!option) {
      return null;
    }
    return (
      <option key={option._id} value={option._id}>
        {option.moduleNumber}
      </option>
    );
  });

  return (
    <StyledSelectWrapper>
      <StyledFormLabel>{labelContent}</StyledFormLabel>
      <StyledModuleSelect {...selectProps}>{options}</StyledModuleSelect>
    </StyledSelectWrapper>
  );
};

export default ModuleSelect;
