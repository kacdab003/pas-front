import React, { useState } from 'react';
import AuthSwitch from '../AuthSwitch/AuthSwitch';
import LoginForm from './LoginForm/LoginForm';

const AuthInputs = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      <LoginForm {...props} />
      <AuthSwitch isSignup={isSignup} setIsSignup={setIsSignup} />
    </>
  );
};

export default AuthInputs;
