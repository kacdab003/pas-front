import React from 'react';
import { StyledFormikTextArea, StyledFormikTextAreaWrapper } from './StyledFromikTextArea';
import FormikError from '../FormikError/FormikError';
import { ErrorMessage } from 'formik';
import { StyledFormikLabel } from '../FormikLabel/StyledFormikLabel';

const FormikTextArea = (props) => {
  const { label, name, ...otherProps } = props;
  return (
    <StyledFormikTextAreaWrapper>
      <StyledFormikLabel htmlFor={name}>{label}</StyledFormikLabel>
      <StyledFormikTextArea as="textarea" id={name} name={name} {...otherProps} />
      <ErrorMessage component={FormikError} name={name} />
    </StyledFormikTextAreaWrapper>
  );
};

export default FormikTextArea;
