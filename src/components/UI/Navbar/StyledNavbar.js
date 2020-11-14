import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 32%;
  height: 100%;
  display: grid;
  position: fixed;
  background: linear-gradient(#005fee, #003a90);
  grid-template-rows: 1fr 9fr;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  transition: ease-in-out 0.2s;
  transform: translateX(${({ isOpen }) => (isOpen ? '0px' : '-85%')});
`;
