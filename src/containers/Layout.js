import React, { useState } from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import { StyledLayout } from './StyledLayout';

const Layout = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModalHandler = () => {
    setIsModalOpened((isOpened) => !isOpened);
  };

  return (
    <StyledLayout>
      <Navbar isOpen={isModalOpened} onToggle={toggleModalHandler} />
      {props.children}
    </StyledLayout>
  );
};

export default Layout;
