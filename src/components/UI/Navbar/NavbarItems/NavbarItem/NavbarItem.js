import React from 'react';
import { StyledNavbarItem, StyledNavbarItemIcon, StyledNavlink } from './StyledNavbarItem';

const NavbarItem = (props) => {
  return (
    <StyledNavbarItem onClick={props.onToggle}>
      <StyledNavlink exact={props.exact} to={props.path}>
        <StyledNavbarItemIcon src={props.navIcon} alt={''} />
        {props.title}
      </StyledNavlink>
    </StyledNavbarItem>
  );
};

export default NavbarItem;
