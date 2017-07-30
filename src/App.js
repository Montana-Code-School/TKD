import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gmap from './Gmap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gmap/>
      </div>
    );
  }
}

export default App;
