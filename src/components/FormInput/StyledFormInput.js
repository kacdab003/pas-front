import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const StyledFormInput = styled.input`
  width: 80%;
  padding: 1rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.1rem;
  &::placeholder {
    color: #ccc;
  }
  &[type='date'] {
    font-family: inherit;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
  }
  &[type='checkbox'] {
    width: 2rem;
    height: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledFormLabel = styled.label`
  padding: 0.5rem;
  text-transform: uppercase;
`;
