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
    {/*Navbar*/}
        <Header />
    {/*Title image and text*/}
          <div className="mainImg">
            <img src={headerImg} alt="Tae Kwon Do class practicing blocking" />
          </div>
        <h1>Saja Academy</h1>
        <h2>Tae Kwon Do For The Whole Family</h2>
    {/*Colored Navigation blocks*/}
        <ColoredNav />
    {/*Schools and Events section*/}
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
    {/*Map and content info section*/}
          <div className='mapSection'>
            <Gmap />
            <div className='contactBox'>
              <h3>105 Ravalli Street</h3>
              <h3>Stevensville, MT 59870</h3><br/>
              <h3>Monday 5PM - 7PM</h3>
              <h3>Tuesday 5PM - 6:30PM</h3>
              <h3>Friday 5PM - 7PM</h3><br/>
              <h3>406.210.3164</h3>
              <h3>sajaacademyma@gmail.com</h3>
            </div>
          </div>
    {/* Footer */}
          <Footer />
        </div>
    );
  }
}
