import React from 'react';
import { IconButton } from '../../IconButton/IconButton';
import { ArchiveResultContainer, ArchiveResultElement } from './StyledArchiveResult';
import editIcon from '../../../assets/icons/edit.png';
import deleteIcon from '../../../assets/icons/delete.png';
import openIcon from '../../../assets/icons/open.svg';

const ArchiveResult = ({ id, date, configuration, fullName, office, openHandler, editHandler, deleteHandler }) => {
  return (
    <ArchiveResultContainer>
      <ArchiveResultElement>{id}</ArchiveResultElement>
      <ArchiveResultElement>{date}</ArchiveResultElement>
      <ArchiveResultElement>{configuration}</ArchiveResultElement>
      <ArchiveResultElement>{fullName}</ArchiveResultElement>
      <ArchiveResultElement>{office}</ArchiveResultElement>
      <ArchiveResultElement>
        <IconButton src={openIcon} onClick={openHandler} />
      </ArchiveResultElement>
      <ArchiveResultElement>
        <IconButton src={editIcon} onClick={editHandler} />
      </ArchiveResultElement>
      <ArchiveResultElement>
        <IconButton src={deleteIcon} onClick={deleteHandler} />
      </ArchiveResultElement>
    </ArchiveResultContainer>
  );
};

export default ArchiveResult;
