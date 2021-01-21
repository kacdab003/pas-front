import React from 'react';
import { AddRemoveButtonWrapper, AddButton, RemoveButton } from './StyledAddRemoveButton';

const AddRemoveButton = ({ type, buttonType, onAdd, onRemove }) => {
  return (
    <AddRemoveButtonWrapper>
      <AddButton type="button" onClick={onAdd}>
        +
      </AddButton>
      <RemoveButton type="button" onClick={onRemove}>
        -
      </RemoveButton>
    </AddRemoveButtonWrapper>
  );
};

export default AddRemoveButton;
