import React, { Component } from 'react';
import './App.css';
// import Checkout from './components/Checkout';
// import Registration from './components/Registration.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Gallery from './components/Gallery.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Gallery />

      </div>
    );
  }
}

export default App;
