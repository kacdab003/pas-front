import axios from '../../../../axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userAuthEndpoints } from '../../../../shared/config/endpoints';
import { auth } from '../../../../store/actions';
import { SmallActionButton } from '../../../UI/Headers/Buttons';
import AuthInput from '../AuthInput/AuthInput';
import { AuthErrorMessage } from '../StyledAuthInputs';
import AuthSelect from './AuthSelect/AuthSelect';
import { StyledSignupFormContainer } from './StyledSignupForm';

const SignupForm = (props) => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const onSignup = async (event) => {
    event.preventDefault();
    try {
      const authData = {
        login,
        name,
        surname,
        position,
        password,
      };
      await axios.put(userAuthEndpoints.signUp, authData);
      setError('');
      props.onAuth(login, password);
    } catch (error) {
      setError(error?.response?.data?.error || 'Unknown error');
    }
  };
  const onInputChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <StyledSignupFormContainer onSubmit={onSignup}>
      <AuthErrorMessage>{error}</AuthErrorMessage>
      <AuthInput onChange={(event) => onInputChange(event, setLogin)} value={login} placeholder="Login" />
      <AuthInput placeholder="Imię" onChange={(event) => onInputChange(event, setName)} value={name} />
      <AuthInput placeholder="Nazwisko" onChange={(event) => onInputChange(event, setSurname)} value={surname} />
      <AuthInput
        placeholder={'Hasło'}
        type="password"
        onChange={(event) => onInputChange(event, setPassword)}
        value={password}
      />
      <AuthInput
        placeholder={'Potwierdź hasło'}
        type="password"
        onChange={(event) => onInputChange(event, setConfirmPassword)}
        value={confirmPassword}
      />
      <AuthSelect onChange={(event) => onInputChange(event, setPosition)} value={position} />
      <SmallActionButton type="submit">STWÓRZ KONTO</SmallActionButton>
    </StyledSignupFormContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  onAuth: (login, password) => dispatch(auth(login, password)),
});
export default connect(null, mapDispatchToProps)(SignupForm);
