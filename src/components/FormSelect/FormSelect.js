import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import { StyledFormSelect, StyledFormLabel, StyledSelectWrapper } from './StyledFormSelect';

const FormSelect = ({ defaultOptionLabel, labelContent, selectProps, refEndpoint, refKey, onError }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(refEndpoint);

        const options = response.data.map((op) => {
          return (
            <option key={op._id} value={op._id}>
              {op[refKey]}
            </option>
          );
        });
        const defaultOption = (
          <option value="" key={'DEFAULT'} disabled>
            {defaultOptionLabel}
          </option>
        );
        options.unshift(defaultOption);
        setOptions(options);
      } catch (error) {
        onError(error);
      }
    };
    fetchOptions();
  }, [onError, refKey, refEndpoint, defaultOptionLabel]);

  return (
    <StyledSelectWrapper>
      <StyledFormLabel>{labelContent}</StyledFormLabel>
      <StyledFormSelect defaultValue="" {...selectProps}>
        {options}
      </StyledFormSelect>
    </StyledSelectWrapper>
  );
};

export default FormSelect;
