import React from 'react';
import { SmallActionButton } from '../../UI/Headers/Buttons';
import LoginInput from './LoginInput/LoginInput';
import { LoginInputsContainer } from './StyledLoginInputs';

const LoginInputs = () => {
  return (
    <LoginInputsContainer>
      <LoginInput placeholder={'Login'} />
      <LoginInput placeholder={'Password'} type={'password'} />
      <SmallActionButton>LOGIN</SmallActionButton>
    </LoginInputsContainer>
  );
};

export default LoginInputs;
