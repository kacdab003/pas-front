import React, { useCallback, useEffect, useState } from 'react';
import { StyledNewObjectForm, StyledNewObjectFormWrapper } from './StyledNewObjectForm';
import newObjectConfig from '../../../shared/config/forms/newObject';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import axios from '../../../axios';
import { objectEndpoints } from '../../../shared/config/endpoints';
import Message from '../../../components/Message/Message';

const NewObjectForm = () => {
  const [formData, changeFormData] = useState({});
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const saveData = useCallback(async () => {
    const data = {
      ...formData,
    };

    try {
      setError(false);
      await axios.post(objectEndpoints.post, data);
      setFormSubmitted(true);
      hideMessage();
    } catch (error) {
      setError(error.response.data);
    }
  }, [formData]);

  const hideMessage = () => {
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  const formSubmitHandler = useCallback(
    (event) => {
      setFormSubmitted(false);
      event.preventDefault();

      saveData();
    },
    [saveData]
  );

  const inputChangedHandler = useCallback((event) => {
    event.preventDefault();
    changeFormData((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  }, []);

  useEffect(() => {
    newObjectConfig.inputs.forEach((input) => changeFormData((prevState) => ({ ...prevState, [input.name]: '' })));
  }, []);

  const inputs = newObjectConfig.inputs.map(({ type, name, required, placeholder, label }) => {
    const inputProps = {
      type,
      label,
      name,
      required,
      placeholder,
      onChange: inputChangedHandler,
    };
    return <FormInput key={label} labelContent={label} inputProps={inputProps} />;
  });

  return (
    <>
      {error ? <Message message={error.message} messageType={'ERROR'} /> : null}
      {formSubmitted ? <Message message={'Obiekt dodany pomyślnie'} messageType={'SUCCESS'} /> : null}
      <StyledNewObjectFormWrapper>
        <StyledNewObjectForm>{inputs}</StyledNewObjectForm>
        <SeparateLine />
        <SubmitButton title={'Zatwierdź'} buttonProps={{ type: 'submit', onClick: formSubmitHandler }} />
      </StyledNewObjectFormWrapper>
    </>
  );
};

export default NewObjectForm;
