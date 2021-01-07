import styled from 'styled-components';

export const StyledSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const StyledFormLabel = styled.label`
  padding: 0.5rem;
  text-transform: uppercase;
`;

export const StyledFormSelect = styled.select`
  width: 80%;
  padding: 1rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.1rem;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
