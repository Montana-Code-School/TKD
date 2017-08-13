import React from 'react';
import Checkout from './Checkout';
import '../styles/modal.css';
import ThankYou from '../img/Jungdo.png'

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selected: '',
      paymentType: 'PayInFull',
      display: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  };

  handleClick(event){
    this.setState({selected: event.target.value });
  }

  handleChange(event) {
    this.setState({paymentType: event.target.value});
  }
  handleDisplay() {
    this.setState({display: !this.state.display});
  }

  render() {
    const {selected, paymentType} = this.state;
    if (this.state.display) {
      return(
        <div className="ModalFormat">
          <div className="Modal">

          <div className="PaymentSpice"><img src={ThankYou} /><h1>Thank You!</h1>
          </div>
          <div className="PaymentForm">
          <form className="PaymentForm">
            <div className="radio">
              <label>
                <input onClick={this.handleClick} type="radio" value="OneTimePayment" checked={selected ==='OneTimePayment'} />
                  Initial Registration Fee
              </label>
            </div>
            <div className="radio">
              <label>
                <input onClick={this.handleClick} type="radio" value="Family" checked={selected ==='Family'}/>
                Family Fees
              </label>
            </div>
            <div className="radio">
              <label>
                <input onClick={this.handleClick} type="radio" value="Individual" checked={selected ==='Individual'} />
                  Individual Payments
              </label>
            </div>
            <select className="Selector" value={paymentType} onChange={this.handleChange}>
              <option value="PayInFull">Pay in Full</option>
              {(selected !== "OneTimePayment") ? <option value="CommitSix">Pay for One Month of Six Month Commitment</option> : null}
              {(selected !== "OneTimePayment") ? <option value="Monthly">Pay for one Month</option> : null}
            </select>
          </form>
          <Checkout type={selected} payBy={paymentType} />
          </div>
                <button className="CloseButton" onClick={this.handleDisplay}>Exit</button>
          </div>
        </div>
      );
    }
    else {
      return <button className="PaymentButton" onClick={this.handleDisplay}>Make Payment Now!</button>
    }
  }
}
