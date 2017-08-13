import React from 'react';
import Flexbox from 'flexbox';
import Footer from './Footer.js';
import Header from './Header';

class About extends React.Component {
  render (){
    return (
      <div>
       <Navbar>
       </NavBar>
        <div>
          <img src="" alt="group picture"/>
          <h1 className="about-title"> About </h1>
        </div>

        <div>
        <Flexbox flexDirection="row">
         <Flexbox>
           <p className="about-saja">Saja Academy is a branch from the American Jungdo Federation and is founded on the American Jungdo Federation Precept: "Be
           the One to Contribute to Society Through Moral Contribution." The purpose of our discipline is to teach Reaspect, Humility, and Patience in a fun, energetic, and family atmosphere.
           The American Jungdo Federation teaches a Tae Kwon Do martial art that was created specifically for America.  And SAja Academy is unique because it is a non-profit Christian-basedf martial arts school.
           It is open to everyone of all beliefs. </p>
         </Flexbox>

         <Flexbox>
           <img src=""/>
         </Flexbox>

        </Flexbox>
        </div>

        <div>
         <Flexbox flexDirection="row">
          <Flexbox>
           <img src="" alt="picture of April"/>
          </Flexbox>

          <Flexbox>
           <h2 className="instructor">April C. Trull</h2>
           <p className="bio">Saja Academy was founded in 2007 by Tony Hatzenbuehler in Hamilton , Montana.  It was at that time that April Trull started her journey as a martial artist.  She earned her 1st degree black belt in 2010 and became an assistant
           instructor that same year.  Six months later April became the Chief Instructor of Saja as it was passed down to her.  The school has served people throughout the Bitterroot Valley, instilling confidence, courage, humility, integrity, respect and courtesy in each of its students.<b>
           April has dedicated herself to her students and her community, making her goal to reach people of all ages, backgrounds and physical abilities, and teaching them to respect others and give back to their community.</b> </p>
         </Flexbox>

        </Flexbox>
       </div>
      </div>
    )
  }
};

class List extends React.Component {
  render (){
    return {
      <div className ="accomplishments">
       <h3 style={titleStyle}>this.props.title</h3>
       <p style={pStyle}>this.props.description</p>
      </div>
    }
  }
};

class Row extends React.Component {
  render (){
    return{
      <div style="">
       <ul>
        <List title ="Accomplishments"/>
        <List description = "3rd Degree Black Belt Tae Kwon Do"/>
        <List description = "2008 School of the Year Award"/>
        <List description = "2010 Outstanding Assistant Instructor Award"/>
        <List description = "2014 Outstanding Instructor Award"/>
        <List title = "Assistant Instructors"/>
        <List description = "Roger Rahmsdorf"/>
        <List description = "Ken Scrivner"/>
      </ul>
     </div>
    }
  }
};

export default About;
