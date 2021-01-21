import styled from 'styled-components';

const AddRemoveButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  align-items: center;
  margin: 1rem 1rem;
  transition: ease-in-out 0.2s;
  &:hover {
    background-color: white;
    border: 1px solid #e62a94;
    cursor: pointer;
  }
`;

export const RemoveButton = styled(AddRemoveButton)`
  background-color: #005fee;
  color: #e62a94;
`;
export const AddButton = styled(AddRemoveButton)`
  background-color: #e62a94;
  color: #005fee;
`;

export const AddRemoveButtonWrapper = styled.div`
  grid-column: 1/2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
