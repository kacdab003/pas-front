import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  min-width: 100px;
  max-width: 32%;
  height: 100%;
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(#005fee, #003a90);
  grid-template-rows: 1fr 9fr;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  transition: ease-in-out 0.2s;
  transform: translateX(${({ isOpen }) => (isOpen ? '0px' : 'calc(70px - 100%)')});
`;
