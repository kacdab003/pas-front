import React from 'react';
import { Route } from 'react-router';
import Archive from '../../Pages/Archive/Archive';
import NewExchangeReport from '../../Pages/NewExchangeReport/NewExchangeReport';
import NewObject from '../../Pages/NewObject/NewObject';
import NewReport from '../../Pages/NewReport/NewReport';
import Logout from '../Logout/Logout';

const AuthRoutes = () => {
  return (
    <>
      <Route path={'/new-report'} component={NewReport} />
      <Route path={'/new-exchange-report'} component={NewExchangeReport} />
      <Route path={'/new-object'} component={NewObject} />
      <Route path={'/archive'} component={Archive} />
      <Route path={'/logout'} render={() => <Logout />} />
    </>
  );
};

export default AuthRoutes;
