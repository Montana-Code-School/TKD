import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

export default class Navbar extends React.Component {

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
        linksEl.style.display = 'none';
    } else {
        linksEl.style.display = 'block';
    }
  }

  render() {
    return (
      <div>
        <div className="navWide">
          <Link to="/Home">Home</Link>
          <Link to="/Calendar">Calendar</Link>
          <Link to="/Registration">Registration</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/Resources">Resources</Link>
          <Link to="/Profile">Profile</Link>
        </div>
        <div className="navNarrow">
           <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
           <div className="narrowLinks">
             <Link to="/Home">Home</Link>
             <Link to="/Calendar">Calendar</Link>
             <Link to="/Registration">Registration</Link>
             <Link to="/Gallery">Gallery</Link>
             <Link to="/about">About</Link>
             <Link to="/Resources">Resources</Link>
             <Link to="/Profile">Profile</Link>
           </div>
         </div>
      </div>
    );
  }
};
