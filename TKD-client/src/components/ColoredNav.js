import React from 'react';
import { Link } from 'react-router-dom';
import oneRedSquare from '../img/home_Squares1.jpg';
import oneBlueSquare from '../img/home_Squares2.jpg';
import twoRedSquare from '../img/home_Squares3.jpg';
import twoBlueSquare from '../img/home_Squares4.jpg';
import '../styles/Home.css';

export default class ColoredNav extends React.Component {

  render() {
    return (
      <ul className="coloredNavContainer">

        <li className="navSquare">
          <Link to="/about">
            <img src={oneRedSquare} alt="about" />
            <h2>About</h2>
          </Link>
        </li>
        <li className="navSquare">
          <Link to="/calendar">
            <img src={oneBlueSquare} alt="calendar" />
            <h2>Calendar</h2>
          </Link>
        </li>
        <li className="navSquare">
          <Link to="/registration">
            <img src={twoRedSquare} alt="registration" />
            <h2>Registration</h2>
          </Link>
        </li>
        <li className="navSquare">
          <Link to="/gallery">
            <img src={twoBlueSquare} alt="gallery" />
            <h2>Gallery</h2>
          </Link>
        </li>
      </ul>
    );
  }
}
