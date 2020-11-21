import React from 'react';
import { EditButton } from './EditButton/EditButton';
import { ArchiveResultContainer, ArchiveResultElement } from './StyledArchiveResult';

const ArchiveResult = ({ id, date, configuration, engineer, technician, editHandler }) => {
  return (
    <ArchiveResultContainer>
      <ArchiveResultElement>{id}</ArchiveResultElement>
      <ArchiveResultElement>{date}</ArchiveResultElement>
      <ArchiveResultElement>{configuration}</ArchiveResultElement>
      <ArchiveResultElement>{engineer}</ArchiveResultElement>
      <ArchiveResultElement>{technician}</ArchiveResultElement>
      <ArchiveResultElement>
        <EditButton href={() => editHandler()} />
      </ArchiveResultElement>
    </ArchiveResultContainer>
  );
};

export default ArchiveResult;
