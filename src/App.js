import React from 'react';
import './index.css';
import MainView from './Pages/MainView/MainView';
import Layout from './containers/Layout';
import { Route, Switch } from 'react-router';
import Logout from './components/Logout/Logout';
import NewReport from './Pages/NewReport/NewReport';
import Archive from './Pages/Archive/Archive';
import NewExchangeReport from './Pages/NewExchangeReport/NewExchangeReport';
import NewObject from './Pages/NewObject/NewObject';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={'/new-report'} component={NewReport} />
        <Route path={'/new-exchange-report'} component={NewExchangeReport} />
        <Route path={'/new-object'} component={NewObject} />
        <Route path={'/archive'} component={Archive} />
        <Route path={'/logout'} component={Logout} />
        <Route path={'/'} exact component={MainView} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
