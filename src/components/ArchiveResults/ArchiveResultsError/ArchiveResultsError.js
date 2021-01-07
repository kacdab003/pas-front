import React from 'react';
import { StyledArchiveResultsError } from './StyledArchiveResultsError';
const ArchiveResultsError = ({ message }) => {
  console.warn(message);
  return <StyledArchiveResultsError>{message}</StyledArchiveResultsError>;
};

export default ArchiveResultsError;
