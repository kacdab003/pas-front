import React from 'react';
import { StyledFormSelect, StyledFormLabel, StyledSelectWrapper } from './StyledFormSelect';

const FormSelect = ({ labelContent, selectProps }) => {
  return (
    <StyledSelectWrapper>
      <StyledFormLabel>{labelContent}</StyledFormLabel>
      <StyledFormSelect {...selectProps} />
    </StyledSelectWrapper>
  );
};

export default FormSelect;
