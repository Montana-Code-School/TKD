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
      <p className="about-saja">Saja Academy is a branch from the American Jungdo Federation and is founded on the American Jungdo Federation Precept: "Be
      the One to Contribute to Society Through Moral Contribution." The purpose of our discipline is to teach Reaspect, Humility, and Patience in a fun, energetic, and family atmosphere.
      The American Jungdo Federation teaches a Tae Kwon Do martial art that was created specifically for America.  And Saja Academy is unique because it is a non-profit Christian-basedf martial arts school.
      It is open to everyone of all beliefs. </p>
        <img className="rightImg" src={rightImg} alt="Tae Kwon Do Master with students" />
      </div>
      <div>
      <img className="aboutImg" src={AprilImg} alt="Tae Kwon Do class group" />
      <h2>April Trull, Instructor</h2>
      <p className="bio">Saja Academy was founded in 2007 by Tony Hatzenbuehler in Hamilton , Montana.  It was at that time that April Trull started her journey as a martial artist.  She earned her 1st degree black belt in 2010 and became an assistant
      instructor that same year.  Six months later April became the Chief Instructor of Saja as it was passed down to her.  The school has served people throughout the Bitterroot Valley, instilling confidence, courage, humility, integrity, respect and courtesy in each of its students.<br />
      April has dedicated herself to her students and her community, making her goal to reach people of all ages, backgrounds and physical abilities, and teaching them to respect others and give back to their community.<br /> </p>
      </div>
      <h2>Accomplishments</h2>
      <ul>
        <li>3rd Degree Black Belt Tae Kwon Do</li>
        <li>2008 School of the Year Award</li>
        <li>2010 Outstanding Assistant Instructor Award</li>
        <li>2014 Outstanding Instructor Award</li>
        <li>Assistant Instructors</li>
        <li>Roger Rahmsdorf</li>
        <li>Ken Scrivner</li>
      </ul>
      <Footer />
    </div>
)
}
};
