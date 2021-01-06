import React from 'react';
import LoginSection from '../../AuthSection/AuthSection';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import NavbarItems from './NavbarItems/NavbarItems';
import { StyledNavbar } from './StyledNavbar';
const Navbar = ({ isOpen, onToggle, isAuthenticated }) => {
  return (
    <StyledNavbar isOpen={isOpen}>
      <NavbarHeader isOpen={isOpen} onToggle={onToggle} title={'TITLE'} />
      {isAuthenticated ? <NavbarItems onToggle={onToggle} /> : <LoginSection />}
    </StyledNavbar>
  );
};

export default Navbar;
