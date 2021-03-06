import styled from 'styled-components';
import { Field } from 'formik';

export const StyledFormikSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & .form-control {
    display: grid;
    justify-items: center;
    align-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const StyledFormikSelect = styled(Field)`
  width: 15rem;
  padding: 0.5rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1rem;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
