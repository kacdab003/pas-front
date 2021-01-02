import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../../store/actions';

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  });
  return <Redirect to={'/'} />;
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
