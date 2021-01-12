import React from 'react';

import { StyledBackdrop } from './StyledBackdrop';

const backdrop = (props) =>
  props.show ? (
    <StyledBackdrop show={props.show} onClick={props.clicked}>
      {props.children}
    </StyledBackdrop>
  ) : null;

export default backdrop;
