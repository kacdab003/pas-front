import React from 'react';
import { StyledNavbarItem, StyledNavbarItemIcon, StyledNavlink } from './StyledNavbarItem';

const NavbarItem = (props) => {
  return (
    <StyledNavbarItem>
      <StyledNavbarItemIcon src={props.navIcon} alt={''} />
      <StyledNavlink>{props.title}</StyledNavlink>
    </StyledNavbarItem>
  );
};

export default NavbarItem;
