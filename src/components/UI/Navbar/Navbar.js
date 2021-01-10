import React from 'react';
import AuthSection from '../../AuthSection/AuthSection';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import NavbarItems from './NavbarItems/NavbarItems';
import { StyledNavbar } from './StyledNavbar';
const Navbar = ({ isOpen, onToggle, isAuthenticated }) => {
  let navbarContent;
  if (isOpen) {
    navbarContent = isAuthenticated ? <NavbarItems onToggle={onToggle} /> : <AuthSection />;
  }
  return (
    <StyledNavbar isOpen={isOpen}>
      <NavbarHeader isOpen={isOpen} onToggle={onToggle} title={'MENU'} />
      {navbarContent}
    </StyledNavbar>
  );
};

export default Navbar;
