import styled from 'styled-components';
import { Field } from 'formik';

export const StyledFormikInputWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-content: center;
  flex-direction: column;
  margin: auto;
`;

export const StyledFormikInput = styled(Field)`
  width: 80%;
  padding: 0.5rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.1rem;
  &::placeholder {
    color: #ccc;
  }
`;
