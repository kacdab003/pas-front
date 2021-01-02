import React from 'react';
import './index.css';
import MainView from './Pages/MainView/MainView';
import Layout from './containers/Layout';
import { Redirect, Route } from 'react-router';
import NewReport from './Pages/NewReport/NewReport';
import Archive from './Pages/Archive/Archive';
import NewExchangeReport from './Pages/NewExchangeReport/NewExchangeReport';

const App = () => {
  return (
    <Layout>
      <Route path={'/new-report'}>
        <NewReport />
      </Route>
      <Route path={'/new-exchange-report'}>
        <NewExchangeReport />
      </Route>
      <Route path={'/archive'}>
        <Archive />
      </Route>
      <Route path={'/logout'}>
        <Redirect to={'/'} />
      </Route>
      <Route path={'/'} exact>
        <MainView />
      </Route>
    </Layout>
  );
};

export default App;
