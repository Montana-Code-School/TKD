import React, {Component} from 'react';
import './App.css';
// import Checkout from './components/Checkout';
//import Registration from './components/Registration.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Calendar from './components/Calendar.js';
import Resources from './components/Resources.js';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/resources' component={Resources} />
        </div>
    </BrowserRouter>
    );
  }
}
