import React, { useState } from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import { StyledContainer, StyledLayout } from './StyledLayout';

const Layout = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModalHandler = () => {
    setIsModalOpened((isOpened) => !isOpened);
  };

  return (
    <StyledLayout>
      <Navbar isOpen={isModalOpened} onToggle={toggleModalHandler} />
      <StyledContainer>{props.children}</StyledContainer>
    </StyledLayout>
  );
};

export default Layout;
