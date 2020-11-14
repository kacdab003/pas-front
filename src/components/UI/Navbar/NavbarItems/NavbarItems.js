import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import homeIcon from '../../../../assets/icons/navbar/home_white.svg';
import addIcon from '../../../../assets/icons/navbar/add_white.svg';
import archiveIcon from '../../../../assets/icons/navbar/archive_white.svg';
import repairIcon from '../../../../assets/icons/navbar/repair_white.svg';
import logoutIcon from '../../../../assets/icons/navbar/logout_white.svg';
import { StyledNavbarItems } from './StyledNavbarItems';
const NavbarItems = () => {
  return (
    <StyledNavbarItems>
      <NavbarItem navIcon={homeIcon} title={'Home'} />
      <NavbarItem navIcon={addIcon} title={'Create new report'} />
      <NavbarItem navIcon={archiveIcon} title={'Archive'} />
      <NavbarItem navIcon={repairIcon} title={'Create repair report'} />
      <NavbarItem navIcon={logoutIcon} title={'Log out'} />
    </StyledNavbarItems>
  );
};

export default NavbarItems;
