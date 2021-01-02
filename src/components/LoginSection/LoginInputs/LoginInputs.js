import React, { useState } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import CenteredLoader from '../../UI/CenteredLoader/CenteredLoader';
import { SmallActionButton } from '../../UI/Headers/Buttons';
import LoginInput from './LoginInput/LoginInput';
import { LoginErrorMessage, LoginInputsContainer } from './StyledLoginInputs';

const LoginInputs = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const formSubmittedHandler = (event) => {
    event.preventDefault();
    props.onAuth(login, password);
  };

  const onInputChange = (event, setter) => {
    setter(event.target.value);
  };
  return (
    <LoginInputsContainer onSubmit={formSubmittedHandler}>
      <LoginErrorMessage>{props.error}</LoginErrorMessage>
      <LoginInput placeholder={'Login'} required onChange={(event) => onInputChange(event, setLogin)} value={login} />
      <LoginInput
        placeholder={'Password'}
        type={'password'}
        required
        onChange={(event) => onInputChange(event, setPassword)}
        value={password}
      />
      <SmallActionButton>{props.isLoading ? <CenteredLoader color="gray" size={'20px'} /> : 'LOGIN'}</SmallActionButton>
    </LoginInputsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAuth: (login, password) => dispatch(auth(login, password)),
});

const mapStateToProps = (state) => ({
  isLoading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginInputs);
