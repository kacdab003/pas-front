import React from 'react';
import { StyledNavbarItem, StyledNavbarItemIcon, StyledNavlink } from './StyledNavbarItem';

const NavbarItem = (props) => {
  return (
    <StyledNavlink onClick={props.onToggle} exact={props.exact} to={props.path}>
      <StyledNavbarItem>
        <StyledNavbarItemIcon backgroundImg={props.navIcon} alt={''} />
        {props.title}
      </StyledNavbarItem>
    </StyledNavlink>
  );
};

export default NavbarItem;
