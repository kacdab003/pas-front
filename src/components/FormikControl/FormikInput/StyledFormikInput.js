import styled from 'styled-components';
import { Field } from 'formik';

export const StyledFormikInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const StyledFormikInput = styled(Field)`
  width: 80%;
  padding: 1rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.1rem;
  &::placeholder {
    color: #ccc;
  }
`;
