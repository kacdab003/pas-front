import React from 'react';
import { StyledAuthSelect } from './StyledAuthSelect';

const AuthSelect = (props) => {
  return (
    <StyledAuthSelect onChange={props.onChange} value={props.value}>
      <option value="" disabled selected>
        Employment type
      </option>
      <option value="ENGINEER">Engineer</option>
      <option value="TECHNICIAN">Technician</option>
    </StyledAuthSelect>
  );
};

export default AuthSelect;
