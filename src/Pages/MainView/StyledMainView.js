import styled from 'styled-components';

export const StyledMainView = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  & img {
    align-self: center;
    justify-self: center;
  }
  & img:first-child {
    margin-right: 2rem;
    justify-self: end;
  }
`;
