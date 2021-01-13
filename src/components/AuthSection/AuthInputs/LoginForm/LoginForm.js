import React, { useState } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../../../store/actions/auth';
import CenteredLoader from '../../../UI/CenteredLoader/CenteredLoader';
import { SmallActionButton } from '../../../UI/Headers/Buttons';
import AuthInput from '../AuthInput/AuthInput';
import { AuthErrorMessage } from '../StyledAuthInputs';
import { LoginFormContainer } from './StyledLoginForm';

const LoginForm = (props) => {
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
    <LoginFormContainer onSubmit={formSubmittedHandler}>
      <AuthErrorMessage>{props.error}</AuthErrorMessage>
      <AuthInput placeholder={'Login'} required onChange={(event) => onInputChange(event, setLogin)} value={login} />
      <AuthInput
        placeholder={'Hasło'}
        type={'password'}
        required
        onChange={(event) => onInputChange(event, setPassword)}
        value={password}
      />
      <SmallActionButton>
        {props.isLoading ? <CenteredLoader color="blue" size={'20px'} /> : 'ZALOGUJ'}
      </SmallActionButton>
    </LoginFormContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  onAuth: (login, password) => dispatch(auth(login, password)),
});

const mapStateToProps = (state) => ({
  isLoading: state.auth.loading,
  error: state.auth.error,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
