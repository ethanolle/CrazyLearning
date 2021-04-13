import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Grid from './pages/Grid/Grid';
import Header from './pages/Header/Header';
import Responsive from './pages/Responsive/Responsive';
import Hamburger from './pages/Hamburger/Hamburger';
import Pomodoro from './pages/Pomodoro/Pomodoro';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
        <Route path='/Hamburger' exact>
          <Hamburger />
        </Route>
        <Route path='/Pomodoro' exact>
          <Pomodoro />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
