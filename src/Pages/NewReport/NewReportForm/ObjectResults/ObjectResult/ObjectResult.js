import React from 'react';
import { IconButton } from '../../../../../components/IconButton/IconButton';
import { StyledObjectOptions, StyledObjectProperty, StyledObjectResult } from './StyledObjectResult';
import deleteIcon from '../../../../../assets/icons/delete.png';
import settingsIcon from '../../../../../assets/icons/settings.png';
const ObjectResult = ({ name, t1Value, t2Value, t3Value, c1Value, damagedModules }) => {
  return (
    <StyledObjectResult>
      <StyledObjectProperty>{name}</StyledObjectProperty>
      <StyledObjectProperty>T1: {t1Value}</StyledObjectProperty>
      <StyledObjectProperty>T2: {t2Value}</StyledObjectProperty>
      <StyledObjectProperty>T3: {t3Value}</StyledObjectProperty>
      <StyledObjectProperty>C1: {c1Value}</StyledObjectProperty>

      <StyledObjectOptions>
        <IconButton src={deleteIcon} />
        <IconButton src={deleteIcon} />
        <IconButton src={settingsIcon} />
      </StyledObjectOptions>
    </StyledObjectResult>
  );
};

export default ObjectResult;
