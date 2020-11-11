import styled from 'styled-components';

export const LoginViewContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 32% 68%;
`;

export const StyledEnterCredentials = styled.div`
  background: linear-gradient(#005fee, #003a90);
`;

export const StyledBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
  justify-content: center;
  align-items: center;
  & img:first-child {
    justify-self: end;
  }
`;
