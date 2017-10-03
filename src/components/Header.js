import React from 'react';
import { Link } from 'react-router-dom';
import navImgOne from '../img/navBar_KoreanFlag.png';
import navImgTwo from '../img/Jungdo.png';
import { Navbar, Button } from 'react-bootstrap';
import '../styles/Header.css';

export default class Header extends React.Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {

    const { isAuthenticated } = this.props.auth;
    const email = localStorage.getItem('email');

    return (
      <header className="navContainer">
        <ul className="row1">
          <li className="row1column1">{email}</li>
          <div className="row1column2">
            <Link to="/Registration">
              <li>PAY YOUR MEMBERSHIP</li>
            </Link>
              {
                isAuthenticated() ? <li className="LoginLi" onClick={this.logout.bind(this)}>LOGOUT</li> : <li className="LoginLi" onClick={this.login.bind(this)}>LOGIN</li>
              }
          </div>
        </ul>
        <ul className="row2">
          <div className="row2column1">
            <li><img src={navImgOne} alt="" /></li>
            <li><img src={navImgTwo} alt="" /></li>
          </div>
          <div className="row2column2">

            <Link to="/Home">Home</Link>
            <Link to="/Calendar">Calendar</Link>
            <Link to="/Registration">Registration</Link>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/Resources">Resources</Link>
            <Link to="/Profile">Profile</Link>

          </div>
        </ul>
      </header>
    );
  }
};
