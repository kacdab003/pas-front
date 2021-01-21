import React from 'react';
import { StyledHamburger, StyledNavbarHeaderContainer } from './StyledNavbarHeader';

const NavbarHeader = ({ isOpen, onToggle, title }) => {
  return (
    <StyledNavbarHeaderContainer>
      <StyledHamburger color={'white'} isOpen={isOpen} menuClicked={onToggle} />
    </StyledNavbarHeaderContainer>
  );
};

export default NavbarHeader;
