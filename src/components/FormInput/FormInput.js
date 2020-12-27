import React from 'react';
import { StyledFormInput, StyledFormLabel, StyledInputWrapper } from './StyledFormInput';

const FormInput = ({ labelContent, inputProps }) => {
  return (
    <StyledInputWrapper>
      <StyledFormLabel>{labelContent}</StyledFormLabel>
      <StyledFormInput {...inputProps} />
    </StyledInputWrapper>
  );
};

export default FormInput;
