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
  border: 1px solid blue;
  border-radius: 10px;
`;
