import React, { useCallback, useEffect, useState } from 'react';
import { StyledNewObjectForm, StyledNewObjectFormWrapper } from './StyledNewObjectForm';
import newObjectConfig from '../../../shared/config/forms/newObject';
import FormInput from '../../../components/FormInput/FormInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import Axios from 'axios';
import { objectEndpoints } from '../../../shared/config/endpoints';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

const NewObjectForm = () => {
  const [formData, changeFormData] = useState({});
  const [error, setError] = useState(false);

  const saveData = useCallback(async () => {
    const data = {
      ...formData,
    };
    try {
      await Axios.post(objectEndpoints.post, data);
    } catch (error) {
      setError(error.response.data);
    }
  }, [formData]);

  const formSubmitHandler = useCallback(
    (event) => {
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
  }, [inputChangedHandler]);

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

  if (error) {
    return (
      <StyledNewObjectFormWrapper>
        <ErrorMessage message={error.message} />
      </StyledNewObjectFormWrapper>
    );
  }

  return (
    <StyledNewObjectFormWrapper>
      <StyledNewObjectForm>{inputs}</StyledNewObjectForm>
      <SeparateLine />
      <SubmitButton title={'Zatwierdź'} buttonProps={{ type: 'submit', onClick: formSubmitHandler }} />
    </StyledNewObjectFormWrapper>
  );
};

export default NewObjectForm;
