import React from 'react';
import { IconButton } from '../../../../../components/IconButton/IconButton';
import { StyledObjectOptions, StyledObjectProperty, StyledObjectResult } from './StyledObjectResult';
import deleteIcon from '../../../../../assets/icons/delete.png';
import settingsIcon from '../../../../../assets/icons/settings.png';
const ObjectResult = ({ name, value, hasDamagedModules }) => {
  return (
    <StyledObjectResult>
      <StyledObjectProperty>{name}</StyledObjectProperty>
      <StyledObjectProperty>{value}</StyledObjectProperty>

      <StyledObjectOptions>
        <IconButton src={deleteIcon} />
        {hasDamagedModules && <IconButton src={settingsIcon} />}
      </StyledObjectOptions>
    </StyledObjectResult>
  );
};

export default ObjectResult;
