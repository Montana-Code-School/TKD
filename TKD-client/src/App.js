import React, { Component } from 'react';
import './App.css';
import Checkout from './components/Checkout';
import Gmap from './components/Gmap.js';
import Registration from './components/Registration.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration />
      </div>
    );
  }
}

export default App;
