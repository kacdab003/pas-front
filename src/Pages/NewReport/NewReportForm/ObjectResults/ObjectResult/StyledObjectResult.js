import styled from 'styled-components';

export const StyledObjectResult = styled.div`
  width: 70%;
  height: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  background-color: rgba(230, 42, 148, 0.3);
  margin: 1rem auto;
`;

export const StyledObjectOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledObjectProperty = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;
