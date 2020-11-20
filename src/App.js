import React from 'react';
import './index.css';
import MainView from './Pages/MainView/MainView';
import Layout from './containers/Layout';
import { Route } from 'react-router';
import NewReport from './Pages/NewReport/NewReport';
import Archive from './Pages/Archive/Archive';

const App = () => {
  return (
    <Layout>
      <Route path={'/'} exact>
        <MainView />
      </Route>
      <Route path={'/new-report'}>
        <NewReport />
      </Route>
      <Route path={'/archive'}>
        <Archive />
      </Route>
    </Layout>
  );
};

export default App;
