import React from 'react';
import { StyledBackdrop } from './StyledBackdrop';

const Backdrop = ({ show, onClick }) => {
  return show && <StyledBackdrop onClick={onClick} />;
};

export default Backdrop;
