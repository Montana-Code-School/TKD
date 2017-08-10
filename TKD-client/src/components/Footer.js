import React from 'react';
import '../styles/Footer.css';
import fbIcon from '../img/footer_faceBookIcon.png';

export default class Footer extends React.Component{
  render() {
    return (
      <div className="navContainer">
        <ul className="footerNav">
          <li>HOME</li>
          <li>EVENTS</li>
          <li>REGISTRATION</li>
          <li>GALLERY</li>
          <li>ABOUT</li>
          <li><img src={fbIcon} alt="Link To Saja Facebook Page" /></li>
        </ul>
      </div>
    );
  }
}
