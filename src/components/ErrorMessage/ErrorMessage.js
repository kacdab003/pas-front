import React from 'react';
import { StyledErrorMessage, ErrorMessageWrapper } from './StyledErrorMessage';

const ErrorMessage = ({ message }) => {
  return (
    <ErrorMessageWrapper>
      <StyledErrorMessage>{message}</StyledErrorMessage>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;
