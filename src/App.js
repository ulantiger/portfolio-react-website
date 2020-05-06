import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import IBM_HW_PAGE from './pages/ibm-hw/ibm-hw.page'
import IBM_SW_PAGE from './pages/ibm-sw/ibm-sw.page'
import PageNotFound from './pages/page404/page404'
import Footer from './components/footer/footer.component'

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/IBM_HW/' component={IBM_HW_PAGE} />
        <Route exact path='/IBM_SW/' component={IBM_SW_PAGE} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
