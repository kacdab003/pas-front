import React from 'react';
import { StyledAuthSwitch } from './StyledAuthSwitch';

const AuthSwitch = ({ isSignup, setIsSignup }) => {
  const authSwitchedHandler = (event) => {
    event.preventDefault();
    setIsSignup(!isSignup);
  };
  const buttonContent = isSignup ? 'Zaloguj się' : 'Zarejestruj się';
  return <StyledAuthSwitch onClick={authSwitchedHandler}>{buttonContent}</StyledAuthSwitch>;
};

export default AuthSwitch;
