import React from 'react';
import navImgOne from '../img/navBar_KoreanFlag.png';
import navImgTwo from '../img/Jungdo.png';
import '../styles/Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="navContainer">
        <ul className="row1">
          <li className="row1column1">email@email.com</li>
          <li className="row1column2">FAQ</li>
          <li className="row1column3">PAY YOUR MEMBERSHIP</li>
        </ul>
        <ul className="row2">
          <li className="row2column1"><img src={navImgOne} alt="" /></li>
          <li className="row2column2"><img src={navImgTwo} alt="" /></li>
          <li className="row2column3">Home</li>
          <li className="row2column4">Events</li>
          <li className="row2column5">Registration</li>
          <li className="row2column6">Gallery</li>
          <li className="row2column7">About</li>
        </ul>
      </header>
    );
  }
}
