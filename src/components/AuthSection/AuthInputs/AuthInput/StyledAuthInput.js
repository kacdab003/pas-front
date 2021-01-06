import styled from 'styled-components';

export const StyledAuthInput = styled.input`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  height: 2rem;
  border: white 1px solid;
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
  margin: 1rem;
  font-weight: lighter;
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    color: #ccc;
    font-weight: 300;
    font-size: 1rem;
  }
`;
