import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap-modal';
import Checkout from './Checkout';
import '../styles/Registration.css';

export default class Registration extends React.Component{
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({open:!this.state.open});
  }

  render() {

    return(
      <div>
        <Header />
          <div className="Container">
            <img src={'../img/TKD1.jpg'} />
            <div className="FeeInfo">
              <h1>ONE TIME MEMBERSHIP FEE</h1>
              <p>$65 Per Person</p>
              <p>Includes lifetime membership with American Jungdo Federation, Do Bok, and school t-shirt. Must be purchased before being allowed to test for colored belts.</p>
            </div>
            <div className="FeeInfo">
              <h1>INDIVIDUAL FEES</h1>
              <p>Month-to-Month $35/ Month</p>
              <p>With 6 month Commitment $30 / month OR $150 one-time Payment($60 savings!).</p>
            </div>
            <div className="FeeInfo">
              <h1>FAMILY FEES</h1>
              <p>Month-to-Month $$5/ Month</p>
              <p>With 6 month Commitment $40 / month OR $210 one-time Payment($60 savings!).</p>
            </div>
  
            <button onClick={(e) => this.toggleModal(e)}>Pay with Card</button>
          </div>
        <Footer />
      </div>
    );
  }
}
