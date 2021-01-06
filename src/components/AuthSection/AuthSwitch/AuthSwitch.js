import React from 'react';
import { StyledAuthSwitch } from './StyledAuthSwitch';

const AuthSwitch = ({ isSignup, setIsSignup }) => {
  const authSwitchedHandler = (event) => {
    event.preventDefault();
    setIsSignup(!isSignup);
  };
  const buttonContent = isSignup ? 'LOGIN' : 'SIGNUP';
  return <StyledAuthSwitch onClick={authSwitchedHandler}>Switch to {buttonContent}</StyledAuthSwitch>;
};

export default AuthSwitch;
