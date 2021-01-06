import React from 'react';
import { Highlight, MainNavHeader } from '../../UI/Headers/Headers';

const LoginHeader = () => {
  return (
    <div>
      <MainNavHeader>Welcome!</MainNavHeader>
      <Highlight>Sign in to your account or create a shiny new one.</Highlight>
    </div>
  );
};

export default LoginHeader;
