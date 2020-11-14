import React from 'react';
import { StyledHamburger, StyledNavbarHeaderContainer, StyledPageTitle } from './StyledNavbarHeader';

const NavbarHeader = ({ isOpen, onToggle, title }) => {
  return (
    <StyledNavbarHeaderContainer>
      <StyledPageTitle>{title}</StyledPageTitle>
      <StyledHamburger color={'white'} isOpen={isOpen} menuClicked={onToggle} />
    </StyledNavbarHeaderContainer>
  );
};

export default NavbarHeader;
