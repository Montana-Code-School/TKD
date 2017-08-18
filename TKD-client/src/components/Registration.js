import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from './modal';
import Banner from '../img/registration_MainImg.jpg';
import '../styles/Registration.css';

export default class Registration extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated, login } = this.props.auth;


    return(
      <div>
        <div>
            <div className="MainImg">
              <img src={Banner} alt="Tae Kwon Do class huddling" />
              <div className="MainTitle">
                <h1>Registration</h1>
              </div>
            </div>
            <div className="FeeBox">
              <div className="FeeInfoFormatTop">
                <div className="FeeInfoTop">
                  <h1>ONE TIME MEMBERSHIP FEE</h1>
                  <p>$65 Per Person <br/><br />
                  Includes lifetime membership with American Jungdo Federation, Do Bok, and school t-shirt. Must be purchased before being allowed to test for colored belts.</p>
                </div>
              </div>
            </div>
            <div className="FeeContainer">
              <div className="FeeBox">
                <div className="FeeInfoBottom">
                  <h1>INDIVIDUAL FEES</h1>
                  <p>Month-to-Month $35/ Month <br /><br />
                    With 6 month Commitment $30 / month OR $150 one-time Payment ($60 savings!).</p>
                </div>
                <div className="FancyLine"></div>
                <div className="FeeInfoBottom">
                  <h1>FAMILY FEES</h1>
                  <p>Month-to-Month $45/ Month <br /><br />
                  With 6 month Commitment $40 / month OR $210 one-time Payment ($60 savings!).</p>
                </div>
              </div>
              {
                /*Only allows payments is logged in, otherwise asks for login*/
                isAuthenticated() ? <Modal /> : <button className="LoginBtn" onClick={login}>Login</button>
              }
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}
