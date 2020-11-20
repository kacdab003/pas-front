import React from 'react';
import { Highlight, MainNavHeader } from '../../UI/Headers/Headers';
import { LoginHeaderContainer } from './StyledLoginHeader';

const LoginHeader = () => {
  return (
    <LoginHeaderContainer>
      <MainNavHeader>Welcome!</MainNavHeader>
      <Highlight>Sign in to your account</Highlight>
    </LoginHeaderContainer>
  );
};

export default LoginHeader;
