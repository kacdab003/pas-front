import React, { useState } from 'react';
import AuthSwitch from '../AuthSwitch/AuthSwitch';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';

const AuthInputs = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      {isSignup ? <SignupForm {...props} /> : <LoginForm {...props} />}
      <AuthSwitch isSignup={isSignup} setIsSignup={setIsSignup} />
    </>
  );
};

export default AuthInputs;
