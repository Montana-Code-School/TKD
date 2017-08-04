import React, { Component } from 'react';
import './App.css';
import Checkout from './components/Checkout';
import Gmap from './components/Gmap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gmap/>
        <Checkout
          name={'Product Name'}
          description={'Something you buy'}
          amount={1}
        />
      </div>
    );
  }
}

export default App;
