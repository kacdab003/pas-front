import React from 'react';
import './index.css';
import MainView from './Pages/MainView/MainView';
import Layout from './containers/Layout';

const App = () => {
  return (
    <Layout>
      <MainView />
    </Layout>
  );
};

export default App;
