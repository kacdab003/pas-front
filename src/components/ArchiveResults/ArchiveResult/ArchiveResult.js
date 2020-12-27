import React from 'react';
import { IconButton } from '../../IconButton/IconButton';
import { ArchiveResultContainer, ArchiveResultElement } from './StyledArchiveResult';
import editIcon from '../../../assets/icons/edit.png';

const ArchiveResult = ({ id, date, configuration, fullName, office, editHandler }) => {
  return (
    <ArchiveResultContainer>
      <ArchiveResultElement>{id}</ArchiveResultElement>
      <ArchiveResultElement>{date}</ArchiveResultElement>
      <ArchiveResultElement>{configuration}</ArchiveResultElement>
      <ArchiveResultElement>{fullName}</ArchiveResultElement>
      <ArchiveResultElement>{office}</ArchiveResultElement>
      <ArchiveResultElement>
        <IconButton src={editIcon} />
      </ArchiveResultElement>
    </ArchiveResultContainer>
  );
};

export default ArchiveResult;
