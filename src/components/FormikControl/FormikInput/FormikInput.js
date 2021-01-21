import React from 'react';
import { ErrorMessage } from 'formik';
import FormikError from '../FormikError/FormikError';
import { StyledFormikInput, StyledFormikInputWrapper } from './StyledFormikInput';
import { StyledFormikLabel } from '../FormikLabel/StyledFormikLabel';

const FormikInput = (props) => {
  const { label, name, ...otherProps } = props;
  return (
    <StyledFormikInputWrapper>
      <StyledFormikLabel htmlFor={name}>{label}</StyledFormikLabel>
      <StyledFormikInput id={name} name={name} {...otherProps} />
      <ErrorMessage component={FormikError} name={name} />
    </StyledFormikInputWrapper>
  );
};

export default FormikInput;
