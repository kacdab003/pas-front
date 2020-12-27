import React from 'react';
import ObjectResult from './ObjectResult/ObjectResult';
import { ObjectResultsWrapper } from './StyledObjectResults';

const ObjectResults = () => {
  return (
    <>
      <ObjectResultsWrapper>
        <ObjectResult name={'OBIEKT_X_T1'} value={20.9} hasDamagedModules={true} />
        <ObjectResult name={'OBIEKT_X_T1'} value={20.9} hasDamagedModules={false} />
      </ObjectResultsWrapper>
    </>
  );
};

export default ObjectResults;
