import React from 'react';
import { EditButton } from './EditButton/EditButton';
import { ArchiveResultContainer, ArchiveResultElement } from './StyledArchiveResult';

const ArchiveResult = ({ id, date, configuration, fullName, office, editHandler }) => {
  return (
    <ArchiveResultContainer>
      <ArchiveResultElement>{id}</ArchiveResultElement>
      <ArchiveResultElement>{date}</ArchiveResultElement>
      <ArchiveResultElement>{configuration}</ArchiveResultElement>
      <ArchiveResultElement>{fullName}</ArchiveResultElement>
      <ArchiveResultElement>{office}</ArchiveResultElement>
      <ArchiveResultElement>
        <EditButton href={() => editHandler()} />
      </ArchiveResultElement>
    </ArchiveResultContainer>
  );
};

export default ArchiveResult;
