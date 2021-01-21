import styled from 'styled-components';
import Hamburger from 'react-hamburger-menu';
export const StyledNavbarHeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  margin: 0 1rem;
  align-items: center;
`;

export const StyledHamburger = styled(Hamburger)`
  &:hover {
    cursor: pointer;
  }
`;
