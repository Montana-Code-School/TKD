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

export default class Gallery extends React.Component {
  render () {
    return (
      <div className="container">

        <Header />

      <div className="mainImg">

      </div>
        <h1>Gallery</h1>

      <div>
        <div>
          <img className="gridImg" src={kicksImg} alt='Tae Kwon Do kids doing kicks' />
        </div>
        <div>
          <img className="gridImg" src={classImg1} alt='Taw Kwon Do kids in class together' />
        </div>
        <div>
          <img className="gridImg" src={classImg3} alt='Taw Kwon Do kids in class together' />
        </div>
      </div>

      <div>
        <div>
          <img className="gridImg" src={staffsImg} alt='Kids with staffs' />
        </div>
        <div>
          <img className="gridImg" src={swordImg1} alt='Kids with swords' />
        </div>
        <div>
          <img className="gridImg" src={swordImg2} alt='Kids with more swords' />
        </div>
      </div>

      <div>
        <div>
          <img className="gridImg" src={inLineImg} alt='Tae Kwon Do class standing in line' />
        </div>
        <div>
          <img className="gridImg" src={lungeImg} alt='Tae Kwon Do class doing lunges'/>
        </div>
        <div>
          <img className="gridImg" src={kidsImg} alt='Kids in Tae Kwon Do' />
        </div>
      </div>

      <Footer />
    </div>
    )
  }
}
