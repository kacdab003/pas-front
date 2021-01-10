import React from 'react';
import './index.css';
import MainView from './Pages/MainView/MainView';
import Layout from './containers/Layout';
import { Route, Switch } from 'react-router';
import NotFound from './Pages/NotFound/NotFound';
import { connect } from 'react-redux';
import AuthRoutes from './components/AuthRoutes/AuthRoutes';

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path={'/'} exact component={MainView} />
        {props.isAuthenticated && <AuthRoutes />}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
});
export default connect(mapStateToProps, null)(App);
