import React from 'react';
import LoginSection from '../../components/LoginSection/LoginSection';
import { StyledBackgroundContainer, StyledEnterCredentials } from './StyledLoginView';
import { LoginViewContainer } from './StyledLoginView';
import backgroundImage from '../../assets/images/Login/background.png';
import headerImage from '../../assets/images/Login/logo.png';
const LoginView = () => {
  return (
    <LoginViewContainer>
      <StyledEnterCredentials>
        <LoginSection />
      </StyledEnterCredentials>
      <StyledBackgroundContainer>
        <img src={headerImage} alt={''} />
        <img src={backgroundImage} alt={''} />
      </StyledBackgroundContainer>
    </LoginViewContainer>
  );
};

export default LoginView;
