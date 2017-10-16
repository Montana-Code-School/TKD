import React from 'react';
import ColoredNav from './ColoredNav';
import Gmap from './Gmap';
import headerImg from '../img/homeMainImg.jpg';
import Footer from './Footer.js';
import '../styles/Home.css';
import {ReactBootstrap, ReactBootstrapModal} from 'react-bootstrap';


export default class Home extends React.Component {

  render() {
    return (
      <div className='container'>
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
            <h2>American Jungdo Federation Schools</h2>
            <hr />
              <ul>
                <li>Parks Martial Arts Academy<br/>1920 Central Ave. Billings, MT 59102 <br/> (406)245-8808</li><br/>
                <li>Cody Martial Arts <br/>502 Ray Rd Cody, WY 82414 <br/>(307)527-7613</li><br/>
                <li>AJF Martial Arts Academy-Ranchester <br/>103 Carl St. Ranchester, WY 82839 <br/>(307)655-9761</li><br/>
                <li>AJF Martial Arts-Sheridan <br/>1030 N Main St. Sheridan, WY 82801<br/> (307)751-5540</li><br/>
                <li>Parks Martial Arts Academy-Hardin <br/>121 N Mitchell Ave. Hardin, MT 59034<br/> (406)679-1874</li><br/>
                <li>AJF Martial Arts-Pierre <br/>203 E Sioux Ave Pierre S.Dakota 57501 <br/>(605)295-0352</li>
              </ul>
          </div>
          <div className="eventLogContent">
            <h2>Upcoming Events</h2>
            <hr />
              <ul>
                <li>September 22, 2017  5pm   Color Belt Test  at Saja Academy</li><br/>
                <li>October 6, 2017 6pm  Black Belt Test  in Cody Wyoming</li><br/>
                <li>October 7, 2017 9am Cody Martial Art Invitaion Tournament  in Cody Wyoming</li>

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
