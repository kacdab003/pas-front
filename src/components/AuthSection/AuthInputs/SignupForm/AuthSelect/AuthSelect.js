import React from 'react';
import { StyledAuthSelect } from './StyledAuthSelect';

const AuthSelect = (props) => {
  return (
    <StyledAuthSelect onChange={props.onChange} value={props.value}>
      <option value="" disabled selected>
        Stanowisko
      </option>
      <option value="ENGINEER">Inżynier</option>
      <option value="TECHNICIAN">Technik</option>
    </StyledAuthSelect>
  );
};

export default AuthSelect;
