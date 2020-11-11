import styled from 'styled-components';

export const StyledLoginInput = styled.input`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  height: 3rem;
  border: white 1px solid;
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
  margin: 1rem;
  font-weight: lighter;
  &::placeholder {
    color: #ccc;
    font-weight: lighter;
    font-size: 1rem;
  }
`;
