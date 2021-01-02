import React from 'react';
import { ClipLoader } from 'react-spinners';
import { StyledLoaderWrapper } from './StyledCenteredLoader';

const CenteredLoader = ({ color, size }) => {
  return (
    <StyledLoaderWrapper>
      <ClipLoader size={size} color={color} />
    </StyledLoaderWrapper>
  );
};

export default CenteredLoader;
