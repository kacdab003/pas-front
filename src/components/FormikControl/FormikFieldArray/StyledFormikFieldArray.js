import styled from 'styled-components';

export const StyledFormikFieldArrayWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const StyledDamagedObjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledObject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: #005fee 1px solid;
  margin: 1rem 2rem;
  padding: 1rem;
  box-shadow: 5px 5px 26px 5px #000000;
  border-radius: 21px;
`;
