import React from 'react';
import LoginHeader from './WelcomeHeader/WelcomeHeader';
import LoginInputs from './AuthInputs/AuthInputs';
import { AuthSectionContainer } from './StyledAuthSection';

const LoginSection = () => {
  return (
    <AuthSectionContainer>
      <LoginHeader />
      <LoginInputs />
    </AuthSectionContainer>
  );
};

export default LoginSection;
