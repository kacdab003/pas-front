import React from 'react';
import { StyledSubmitButton, SubmitButtonWrapper } from './StyledSubmitButton';

const SubmitButton = ({ title, buttonProps }) => {
  return (
    <SubmitButtonWrapper>
      <StyledSubmitButton {...buttonProps}>{title}</StyledSubmitButton>
    </SubmitButtonWrapper>
  );
};

export default SubmitButton;
