import styled from 'styled-components';
import { Field } from 'formik';

export const StyledFormikTextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const StyledFormikTextArea = styled(Field)`
  width: 80%;
  padding: 1rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.1rem;
  &::placeholder {
    color: #ccc;
  }
  resize: vertical;
`;
