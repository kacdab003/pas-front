import styled from 'styled-components';
import Hamburger from 'react-hamburger-menu';
export const StyledNavbarHeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
  align-items: center;
`;

export const StyledPageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;
export const StyledHamburger = styled(Hamburger)`
  &:hover {
    cursor: pointer;
  }
`;
