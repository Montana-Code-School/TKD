import React from 'react';
import oneRedSquare from '../img/home_Squares1.jpg';
import oneBlueSquare from '../img/home_Squares2.jpg';
import twoRedSquare from '../img/home_Squares3.jpg';
import twoBlueSquare from '../img/home_Squares4.jpg';

export default class ColoredNav extends React.Component {

  render() {
    return (
      <div>
        <img src={oneRedSquare} alt="about" />
        <h2>About</h2>
        <img src={oneBlueSquare} alt="calendar" />
        <h2>Calendar</h2>
        <img src={twoRedSquare} alt="registration" />
        <h2>Registration</h2>
        <img src={twoBlueSquare} alt="gallery" />
        <h2>Gallery</h2>
      </div>
    );
  }
}
