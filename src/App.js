import React from 'react';
import './App.css';
// Components
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = () => {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  )
}

export default App;
