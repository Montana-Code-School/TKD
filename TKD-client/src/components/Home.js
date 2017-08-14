import React from 'react';
import Header from './Header';
import ColoredNav from './ColoredNav';
import Gmap from './Gmap';
import headerImg from '../img/homeMainImg.jpg';
import Footer from './Footer.js';
import '../styles/Home.css';

export default class Home extends React.Component {

  render() {
    return (
      <div className='container'>
    {/*Navbar*/}
        <Header />
    {/*Title image and text*/}
        <div className="mainImg">
          <img src={headerImg} alt="Tae Kwon Do class practicing blocking" />
          <div className="mainTitle">
            <h1>Saja Academy</h1>
            <h2>Tae Kwon Do For The Whole Family</h2>
          </div>
        </div>
    {/*Colored Navigation blocks*/}
        <ColoredNav />
    {/*Schools and Events section*/}
        <div className="eventLog">
          <div className="eventLogContent firstEventLog">
            <h2>Brother Schools</h2>
            <hr />
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
            <hr />
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
            <ul className='contactBox'>
              <li>105 Ravalli Street</li>
              <li>Stevensville, MT 59870</li><br/>
              <li>Monday 5PM - 7PM</li>
              <li>Tuesday 5PM - 6:30PM</li>
              <li>Friday 5PM - 7PM</li><br/>
              <li><i className="fa fa-phone" aria-hidden="true"></i>&emsp;&emsp;406.210.3164</li>
              <li><i className="fa fa-envelope-o" aria-hidden="true"></i>&emsp;&emsp;sajaacademyma@gmail.com</li>
            </ul>
          </div>
    {/* Footer */}
          <Footer />
        </div>
    );
  }
}
