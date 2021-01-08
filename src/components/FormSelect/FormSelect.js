import React from 'react';
import { StyledFormSelect, StyledFormLabel, StyledSelectWrapper } from './StyledFormSelect';

const FormSelect = ({ labelContent, selectProps, children }) => {
  return (
    <StyledSelectWrapper>
      <StyledFormLabel>{labelContent}</StyledFormLabel>
      <StyledFormSelect {...selectProps}>{children}</StyledFormSelect>
    </StyledSelectWrapper>
  );
};

export default FormSelect;
