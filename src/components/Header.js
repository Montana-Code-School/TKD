import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
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
        <Navbar>
        </Navbar>
      </header>
    );
  }
};
