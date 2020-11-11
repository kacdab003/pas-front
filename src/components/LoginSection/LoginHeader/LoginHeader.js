import React from 'react';
import { Highlight, MainHeader } from '../../UI/Headers/Headers';
import { LoginHeaderContainer } from './StyledLoginHeader';

const LoginHeader = () => {
  return (
    <LoginHeaderContainer>
      <MainHeader>Welcome!</MainHeader>
      <Highlight>Sign in to your account</Highlight>
    </LoginHeaderContainer>
  );
};

export default LoginHeader;
