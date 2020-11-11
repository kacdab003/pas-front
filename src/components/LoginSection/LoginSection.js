import React from 'react';
import LoginHeader from './LoginHeader/LoginHeader';
import LoginInputs from './LoginInputs/LoginInputs';
import { LoginSectionContainer } from './StyledLoginSection';

const LoginSection = () => {
  return (
    <LoginSectionContainer>
      <LoginHeader />
      <LoginInputs />
    </LoginSectionContainer>
  );
};

export default LoginSection;
