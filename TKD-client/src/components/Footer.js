import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Footer.css';
import fbIcon from '../img/footer_faceBookIcon.png';
import axios from "axios";

export default class Footer extends React.Component{
  componentDidMount(){
    axios.get("http://localhost:3001/student").then(res => {
      console.log(res.data);
    })
  }

  render() {
    return (
      <div className="navContainer">
        <ul className="footerNav">
          <Link to="/"><li>HOME</li></Link>
          <Link to="/Calendar"><li>CALENDAR</li></Link>
          <Link to="/Registration"><li>REGISTRATION</li></Link>
          <Link to="/Gallery"><li>GALLERY</li></Link>
          <Link to="/About"><li>ABOUT</li></Link>
          <Link to="/Resources"><li>RESOURCES</li></Link>
          <li><img src={fbIcon} alt="Link To Saja Facebook Page" /></li>
        </ul>
      </div>
    );
  }
}
