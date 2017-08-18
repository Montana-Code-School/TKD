import React from 'react';
import Header from './Header';
import Footer from './Footer.js';
// import galleryImg from ''; /*File pathway for big header picture goes here */
import kicksImg from '../img/class_photo_2_kicks.jpg';
import classImg1 from '../img/class_photo_1.jpg';
import classImg3 from '../img/class_photo_3.jpg';
import staffsImg from '../img/class_photo_4_with_staffs.jpg';
import swordImg1 from '../img/class_photo_5_with_swords.jpg';
import swordImg2 from '../img/class_photo_6_with_swords_2.jpg';
import inLineImg from '../img/class_photo_8_in_line.jpg';
import lungeImg from '../img/class_photo_9_lunge.jpg';
import kidsImg from '../img/class_photo_7_kids.jpg';
import '../styles/Gallery.css';

export default class Gallery extends React.Component {
  render () {
    return (
      <div className="container">

      <div className="mainImg">
        <img src={kicksImg} alt='Tae Kwon Do kids doing kicks' />
      </div>

      <div className="mainTitle">
        <h1>Gallery</h1>
      </div>

      <div className="gridImg">
        <div className="smImg">
          <img src={classImg1} alt='Tae Kwon Do kids in class together' />
          <img src={classImg3} alt='Tae Kwon Do kids in class together' />
        </div>
      </div>

      <div className="gridImg">
        <div className="smImg">
          <img src={staffsImg} alt='Kids with staffs' />
          <img src={swordImg1} alt='Kids with swords' />
        </div>
      </div>

      <div className="gridImg">
        <div className="smImg">
          <img src={inLineImg} alt='Tae Kwon Do class standing in line' />
          <img src={lungeImg} alt='Tae Kwon Do class doing lunges'/>
        </div>
      </div>

      <div className="gridImg">
        <div className="smImg">
          <img src={swordImg2} alt='Kids with more swords' />
          <img src={kidsImg} alt='Kids in Tae Kwon Do' />
        </div>
      </div>
        
      <Footer />
    </div>
    )
  }
}
