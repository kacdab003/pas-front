import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { StyledFormikCheckbox } from './StyledFormikCheckbox';
import FormikError from '../FormikError/FormikError';

const FormikCheckbox = (props) => {
  const { label, name, ...otherProps } = props;
  return (
    <StyledFormikCheckbox>
      <label htmlFor={name}>{label}</label>
      <Field type="checkbox" id={name} name={name} {...otherProps} />
      <ErrorMessage component={FormikError} name={name} />
    </StyledFormikCheckbox>
  );
};

export default FormikCheckbox;
