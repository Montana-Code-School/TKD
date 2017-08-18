// src/routes.js

import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Header from './components/Header'; //now top level component
import Callback from './CallBack/Callback';
import Registration from './components/Registration';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';
import About from './components/about';
import Auth from './Auth/Auth';
import history from './history';
import Profile from './components/Profile';
import './App.css';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router path="/home" history={history} component={Header}>
      <div className="App">
        <Redirect from="/" to="/home" />
        <Route path="/"             render={(props) => <Header auth={auth} {...props} />} />
        <Route path="/home"         render={(props) => <Home {...props} />} />
        <Route path="/registration" render={(props) => <Registration auth={auth} {...props} />} />
        <Route path="/calendar"     render={(props) => <Calendar {...props} />} />
        <Route path="/gallery"      render={(props) => <Gallery {...props} />} />
        <Route path="/about"        render={(props) => <About {...props }/>} />
        <Route path="/profile"      render={(props) => <Profile auth={auth} {...props} />} />
        <Route path="/callback"     render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
      </div>
    </Router>
  );
}
