import styled from 'styled-components';

export const StyledModuleGroup = styled.div`
  width: 100%;
  grid-column: 1 / 3;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  display: grid;
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 21px;
  padding: 0.5rem;
`;

export const StyledModule = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  padding: 1rem;
  margin: 0.25rem;
  box-shadow: 5px 5px 5px darkgrey;
`;

export const StyledModuleGroupSelect = styled.select`
  width: 80%;
  margin: auto;
  padding: 0.5rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.1rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 3rem;
    padding: 0px 2px 1px;
  }
`;
