import styled from 'styled-components';

export const StyledFormikSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const StyledFormikSelect = styled.select`
  width: 80%;
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
