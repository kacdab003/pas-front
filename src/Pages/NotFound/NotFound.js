import React from 'react';
import { SecondaryHeader } from '../../components/UI/Headers/Headers';
import { NotFoundImage, StyledNotFound, StyledReturnLink } from './StyledNotFound';

const NotFound = () => {
  return (
    <StyledNotFound>
      <NotFoundImage />
      <SecondaryHeader>
        Nie znaleziono ścieżki, <StyledReturnLink to="/">kliknij tutaj</StyledReturnLink>, aby zawrócić
      </SecondaryHeader>
    </StyledNotFound>
  );
};

export default NotFound;
