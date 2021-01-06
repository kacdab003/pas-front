import React from 'react';
import { Highlight, MainNavHeader } from '../../UI/Headers/Headers';
import { StyledWelcomeHeaderContainer } from './StyledWelcomeHeader';

const LoginHeader = () => {
  return (
    <StyledWelcomeHeaderContainer>
      <MainNavHeader>Welcome!</MainNavHeader>
      <Highlight>Sign in to your account</Highlight>
    </StyledWelcomeHeaderContainer>
  );
};

export default LoginHeader;
