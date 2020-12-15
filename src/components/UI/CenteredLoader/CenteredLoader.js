import React from 'react';
import { ClipLoader } from 'react-spinners';
import { StyledLoaderWrapper } from './StyledCenteredLoader';

const CenteredLoader = () => {
  return (
    <StyledLoaderWrapper>
      <ClipLoader size={'100px'} />
    </StyledLoaderWrapper>
  );
};

export default CenteredLoader;
