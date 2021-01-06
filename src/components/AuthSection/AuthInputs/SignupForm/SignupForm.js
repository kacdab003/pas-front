import React from 'react';
import { SmallActionButton } from '../../../UI/Headers/Buttons';
import AuthInput from '../AuthInput/AuthInput';
import { StyledSignupFormContainer } from './StyledSignupForm';

const SignupForm = () => {
  return (
    <StyledSignupFormContainer>
      <AuthInput />
      <AuthInput />
      <AuthInput />
      <AuthInput />
      <SmallActionButton>SIGN UP</SmallActionButton>
    </StyledSignupFormContainer>
  );
};

export default SignupForm;
