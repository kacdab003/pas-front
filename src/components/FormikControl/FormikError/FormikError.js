import React from 'react';
import { StyledFormikError } from './StyledFormikError';

const FormikError = (props) => {
  return <StyledFormikError>{props.children}</StyledFormikError>;
};

export default FormikError;
