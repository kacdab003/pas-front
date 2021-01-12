import React from 'react';

import { StyledBackdrop } from './StyledBackdrop';

const backdrop = (props) =>
  props.show ? <StyledBackdrop>{props.show ? <div onClick={props.clicked} /> : null}</StyledBackdrop> : null;

export default backdrop;
