import React from 'react';
import FormikInput from './FormikInput/FormikInput';
import FormikTextArea from './FormikTextArea/FormikTextArea';
import FormikSelect from './FormikSelect/FormikSelect';
import FormikCheckbox from './FormikCheckbox/FormikCheckbox';

const FormikControl = (props) => {
  const { control, ...otherProps } = props;

  switch (control) {
    case 'input':
      return <FormikInput {...otherProps} />;
    case 'textarea':
      return <FormikTextArea {...otherProps} />;
    case 'select':
      return <FormikSelect {...otherProps} />;
    case 'checkbox':
      return <FormikCheckbox {...otherProps} />;
    default:
      return null;
  }
};

export default FormikControl;
