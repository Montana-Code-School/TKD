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
          <div className="row1column2">
            <Link to="/Registration"><li className="row1column3">PAY YOUR MEMBERSHIP</li></Link>
          </div>
        </ul>
        <ul className="row2">
          <div className="row2column1">
          <li><img src={navImgOne} alt="" /></li>
          <li><img src={navImgTwo} alt="" /></li>
          </div>
          <div className="row2column2">
            <Link to="/"><li>Home</li></Link>
            <Link to="/Calendar"><li>Calendar</li></Link>
            <Link to="/Registration"><li>Registration</li></Link>
            <Link to="/Gallery"><li>Gallery</li></Link>
            <Link to="/About"><li>About</li></Link>
          </div>
        </ul>
      </header>
    );
  }
};
