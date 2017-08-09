import React from 'react';
import Header from './Header';
import ColoredNav from './ColoredNav';
import aboutImg from '../img/about_MainImg.jpg';
import leftImg from '../img/aboutBody_leftImg.jpg';
import rightImg from '../img/aboutBody_rightImg.jpg';
import Footer from './Footer.js';

export default class About extends React.Component {
render (){
return (
  <div className="container">
    <Header />
    <div className="mainImg">
      <img className="aboutImg" src={aboutImg} alt="girl holding staff" />
    </div>
      <h1>About</h1>
      <div>
        <p>text</p>
        <img className="aboutImg" src={leftImg} alt="Tae Kwon Do Master with students" />
      </div>
      <div>
      <img className="aboutImg" src={rightImg} alt="Tae Kwon Do class group photo" />
        <p>text</p>
      </div>
      <Footer />
    </div>
)
}
};
