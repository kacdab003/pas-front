import styled from 'styled-components';

export const ArchiveResultContainer = styled.tr`
  background-color: rgba(0, 95, 238, 0.53);
  font-weight: 100;
  border: none;
`;

export const ArchiveResultElement = styled.td`
  border: none;
  font-weight: 400;
  padding: 1rem;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledExchangeReportResult = styled.div`
  text-align: center;
  width: 60%;
  display: flex;
  background-color: rgba(230, 42, 148, 0.3);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black 2px solid;
  margin: 2rem auto;
  padding: 0.5rem;
  & span {
    font-weight: bold;
  }
`;
