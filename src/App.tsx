import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Grid from './pages/Grid/Grid';
import Header from './pages/Header/Header';
import Responsive from './pages/Responsive/Responsive';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/Grid' exact>
          <Grid />
        </Route>
        <Route path='/Responsive' exact>
          <Responsive />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
