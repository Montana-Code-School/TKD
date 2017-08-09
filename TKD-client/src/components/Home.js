import React from 'react';
import Header from './Header';
import ColoredNav from './ColoredNav';
import Gmap from './Gmap';
import headerImg from '../img/homeMainImg.jpg';
import Footer from './Footer.js';

export default class Home extends React.Component {




render() {
  return (
    <div className='container'>
      <Header />
        <div className="mainImg">
          <img src={headerImg} alt="Tae Kwon Do class practicing blocking" />
        </div>
      <h1>Saja Academy</h1>
      <h2>Tae Kwon Do For The Whole Family</h2>
      <ColoredNav />

      <div className="eventLog">
        <div className="eventLogContent">
          <h2>Brother Schools</h2>
            <ul>
              <li>School 1 Goes Here</li>
              <li>School 2 Goes Here</li>
              <li>School 3 Goes Here</li>
              <li>School 4 Goes Here</li>
              <li>School 5 Goes Here</li>
            </ul>
        </div>

        <div className="eventLogContent">
          <h2>Upcoming Events</h2>
            <ul>
              <li>Event 1 Goes Here</li>
              <li>Event 2 Goes Here</li>
              <li>Event 3 Goes Here</li>
              <li>Event 4 Goes Here</li>
              <li>Event 5 Goes Here</li>
            </ul>
        </div>

        </div>

        <div className='mapSection'>
          <Gmap />
          <div className='contactBox'>
            <h2>105 Ravalli Street</h2>
            <h2>Stevensville, MT 59870</h2><br/>
            <h2>Monday 5PM - 7PM</h2>
            <h2>Tuesday 5PM - 6:30PM</h2>
            <h2>Friday 5PM - 7PM</h2><br/>
            <h2>406.210.3164</h2>
            <h2>sajaacademyma@gmail.com</h2>
          </div>
      </div>
      <Footer />
    </div>
  );
}





}
