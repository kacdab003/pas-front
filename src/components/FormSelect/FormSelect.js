import React from 'react';
import { StyledFormSelect, StyledFormLabel, StyledSelectWrapper } from './StyledFormSelect';
import useRequest, { REQUEST_METHODS } from '../../hooks/useRequest';
import Message from '../Message/Message';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';

const FormSelect = ({ defaultOptionLabel, labelContent, selectProps, refEndpoint, refKey, onError }) => {
  const [options, optionsError, optionsLoading] = useRequest(refEndpoint, null, REQUEST_METHODS.GET);

  const generateOptionsWithDefault = () => {
    const optionsElements = options?.data?.map?.((op) => (
      <option key={op._id} value={op._id}>
        {op[refKey]}{' '}
      </option>
    ));
    const defaultOption = (
      <option value="" key={'DEFAULT'} selected disabled>
        {defaultOptionLabel}
      </option>
    );
    optionsElements?.unshift?.(defaultOption);
    return optionsElements;
  };

  let content = (
    <>
      <StyledFormLabel>{labelContent}</StyledFormLabel>
      <StyledFormSelect {...selectProps}>{generateOptionsWithDefault()}</StyledFormSelect>
    </>
  );

  if (optionsError) {
    content = <Message messageType={'ERROR'} />;
  }
  if (optionsLoading) {
    content = <CenteredLoader color={'black'} />;
  }

  return <StyledSelectWrapper>{content}</StyledSelectWrapper>;
};

export default FormSelect;
