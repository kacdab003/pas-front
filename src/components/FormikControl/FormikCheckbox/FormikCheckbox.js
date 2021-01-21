import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { StyledFormikCheckboxWrapper } from './StyledFormikCheckbox';
import FormikError from '../FormikError/FormikError';

const FormikCheckbox = (props) => {
  const { label, name, ...otherProps } = props;
  return (
    <StyledFormikCheckboxWrapper>
      <label htmlFor={name}>{label}</label>
      <Field type="checkbox" id={name} name={name} {...otherProps} />
      <ErrorMessage component={FormikError} name={name} />
    </StyledFormikCheckboxWrapper>
  );
};

export default FormikCheckbox;
