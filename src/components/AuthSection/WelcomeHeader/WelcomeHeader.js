import React from 'react';
import { Highlight, MainNavHeader } from '../../UI/Headers/Headers';

const LoginHeader = () => {
  return (
    <div>
      <MainNavHeader>Witaj!</MainNavHeader>
      <Highlight>Zaloguj się lub stwórz nowe konto.</Highlight>
    </div>
  );
};

export default LoginHeader;
