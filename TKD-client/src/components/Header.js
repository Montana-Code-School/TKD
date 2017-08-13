import React from 'react';
import {Link} from 'react-router-dom';
import navImgOne from '../img/navBar_KoreanFlag.png';
import navImgTwo from '../img/Jungdo.png';
import '../styles/Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="navContainer">
        <ul className="row1">
          <li className="row1column1">email@email.com</li>
          <Link to="/FAQ"><li className="row1column2">FAQ</li></Link>
          <Link to="/Registration"><li className="row1column3">PAY YOUR MEMBERSHIP</li></Link>
        </ul>
        <ul className="row2">
          <li className="row2column1"><img src={navImgOne} alt="" /></li>
          <li className="row2column2"><img src={navImgTwo} alt="" /></li>
          <Link to="/"><li className="row2column3">Home</li></Link>
          <Link to="/Calendar"><li className="row2column4">Calendar</li></Link>
          <Link to="/Registration"><li className="row2column5">Registration</li></Link>
          <Link to="/Gallery"><li className="row2column6">Gallery</li></Link>
          <Link to="/About"><li className="row2column7">About</li></Link>
        </ul>
      </header>
    );
  }
}
