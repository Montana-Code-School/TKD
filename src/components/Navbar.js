import React from 'react';
import {Link} from 'react-router-dom';
import navImgOne from '../img/navBar_KoreanFlag.png';
import navImgTwo from '../img/Jungdo.png';
import '../styles/Navbar.css';

const wideLinkStyle = {
  textDecoration: 'none',
  margin: '0',
  fontSize: '3vw',
  paddingLeft: '.75rem',
  color: '#FFFFFF'
}

const narrowLinkStyle = {
  height: '2rem',
  textDecoration: 'none',
  fontSize: '3vw',
  paddingLeft: '.5rem',
  paddingRight: '.2rem',
  color: '#FFFFFF'
}

const linkWrapperStyle = {
  paddingTop: '0.5rem',
  paddingBottom: '.2rem',
  marginBottom: '.1rem'
}

const navStyle = {
  backgroundColor: '#000'
}

const iconStyle = {
  float: 'right',
  paddingRight: '.6rem',
  paddingBottom: '.4rem',
  color: 'white'
}

const leftSideImgStyle = {
  float: 'left',
  padding: '.3rem',
  height: '2rem',
  width: '6vw'
}

let links = [
  {displayText: "Home", linkTo: "/Home"},
  {displayText: "Calendar", linkTo: "/Calendar"},
  {displayText: "Registration", linkTo: "/Registration"},
  {displayText: "About", linkTo: "/about"},
  {displayText: "Gallery", linkTo: "/Gallery"},
  {displayText: "Resources", linkTo: "/Resources"},
  {displayText: "Profile", linkTo: "/Profile"}
];

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
      <nav style={ navStyle } >
        <div className="leftSidePic">
          <img src={ navImgTwo } alt="" style={ leftSideImgStyle } />
        </div>
        <div className="navWide" style={ linkWrapperStyle }>
          { links.map((link, key) =>
            <Link to={ link.linkTo }
                key={ key }
                style={ wideLinkStyle }>
                { link.displayText }
            </Link>
          ) }
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x"
             style={ iconStyle }
             onClick={ this.burgerToggle }>
          </i>
          <div className="narrowLinks dropdown-content">
            {links.map((link) =>
              <Link to={ link.linkTo }
                  style={ narrowLinkStyle }
                  onClick={ this.burgerToggle }>
                  { link.displayText }
              </Link>
            )}
          </div>
         </div>
      </nav>
    );
  }
};
