import React from 'react';
import Header from './Header';
import aboutImg from '../img/about_MainImg.jpg';
import leftImg from '../img/aboutBody_leftImg.jpg';
import rightImg from '../img/aboutBody_rightImg.jpg';
import Footer from './Footer.js';
import AprilImg from '../img/April_Trull.jpg';

export default class About extends React.Component {
render (){
return (
  <div className="container">
{/* Navbar */}
    <Header />
{/*Title image and text*/}
    <div className="mainImg">
      <img className="aboutImg" src={aboutImg} alt="girl holding staff" />
    </div>
      <h1>About</h1>
{/*body*/}
      <div>
        <p>text goes here</p>
        <img className="aboutImg" src={leftImg} alt="Tae Kwon Do Master with students" />
      </div>
      <div>
      <img className="aboutImg" src={rightImg} alt="Tae Kwon Do class group" />
        <p>text goes here</p>
      </div>
      <h3>About the instructor: April Trull</h3>
      <div>
        <p>text goes here</p>
        <img className="aboutImg" src={AprilImg} alt="instructor April Trull" />
      </div>
{/*Footer*/}
      <Footer />
    </div>
)
}
};
