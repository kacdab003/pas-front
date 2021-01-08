import React from 'react';
import { StyledErrorMessage, ErrorMessageWrapper } from './StyledErrorMessage';

const ErrorMessage = ({ message }) => {
  return (
    <ErrorMessageWrapper>
      <StyledErrorMessage>{message ? message : 'Coś poszło nie tak...'}</StyledErrorMessage>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;
