import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/UI/Navbar/Navbar';
import { authCheckState } from '../store/actions';
import { StyledContainer, StyledLayout } from './StyledLayout';

const Layout = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {});
  const toggleModalHandler = () => {
    setIsModalOpened((isOpened) => !isOpened);
  };

  return (
    <StyledLayout>
      <Navbar isOpen={isModalOpened} onToggle={toggleModalHandler} isAuthenticated={props.isAuthenticated} />
      <StyledContainer>{props.children}</StyledContainer>
    </StyledLayout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
});
const mapDispatchToProps = (dispatch) => ({
  onTryAutoSignup: dispatch(authCheckState()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
