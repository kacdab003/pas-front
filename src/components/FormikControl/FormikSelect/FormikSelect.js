import React, { useState, useEffect } from 'react';
import { ErrorMessage } from 'formik';
import FormikError from '../FormikError/FormikError';
import { StyledFormikSelect, StyledFormikSelectWrapper } from './StyledFormikSelect';
import axios from '../../../axios';
import { StyledFormikLabel } from '../FormikLabel/StyledFormikLabel';

const FormikSelect = (props) => {
  const { label, name, shouldFetchOptions, refEndpoint, refKey, options, defaultOptionLabel, ...otherProps } = props;
  const [optionsState, setOptionsState] = useState([]);

  useEffect(() => {
    if (shouldFetchOptions) {
      const fetchOptions = async () => {
        try {
          const response = await axios.get(refEndpoint);

          const optionsArr = response.data.map((op) => {
            return (
              <option key={op._id} value={op._id}>
                {op[refKey]}
              </option>
            );
          });
          const defaultOption = (
            <option value="" key={'DEFAULT'} selected disabled>
              {defaultOptionLabel}
            </option>
          );
          optionsArr.unshift(defaultOption);
          setOptionsState(optionsArr);
        } catch (error) {
          console.log(error);
        }
      };
      fetchOptions();
    }
  }, [refKey, refEndpoint, defaultOptionLabel, shouldFetchOptions]);

  const mapPropOptions = () => {
    const mappedPropOptions = options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      );
    });

    const defaultOption = (
      <option value="" key={'DEFAULT'} selected disabled>
        {defaultOptionLabel}
      </option>
    );
    mappedPropOptions.unshift(defaultOption);

    return mappedPropOptions;
  };

  return (
    <StyledFormikSelectWrapper>
      <div className="form-control">
        <StyledFormikLabel htmlFor={name}>{label}</StyledFormikLabel>
        <StyledFormikSelect component="select" id={name} name={name} {...otherProps}>
          {!shouldFetchOptions ? mapPropOptions() : optionsState}
        </StyledFormikSelect>
        <ErrorMessage component={FormikError} name={name} />
      </div>
    </StyledFormikSelectWrapper>
  );
};

export default FormikSelect;
