import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');

};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,{
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromDollarToCent(amount)
  })
  .then(successPayment)
  .catch(errorPayment);

  const Checkout = ({payBy, type }) => {
    let name='No Payment Plan has been Selected';
    let description = 'Please close this window and select a payment plan';
    let amount = 0;

    switch(type) {
      default:
        type="OneTimePayment";
        break;
      case 'OneTimePayment':
        name = "One Time Membership Fee";
        description= '$65 Per Person';   //Need to ask april what to say here
        amount=65
        break;
    case 'Family':
      if (payBy === 'PayInFull') {
        name = 'Family 6 Month Paid in Full';
        description= '$210 ($60 Savings!)';
        amount = 210;
      } else if (payBy === 'CommitSix') {
        name = 'Family 6 Month Commitment';
        description= '$40 ($30 Savings!)';
        amount = 40;
      }else {
        name="Family Month-to-Month Payment";
        description='$45'
        amount=45
      }
      break;
    case 'Individual':
      if (payBy === 'PayInFull') {
        name = 'Individual 6 Month Paid in Full';
        description= '$150 ($60 Savings!)';
        amount = 150;
      } else if (payBy === 'CommitSix') {
        name = 'Individual 6 Month Commitment';
        description= '$30 ($30 Savings!)';
        amount = 30;
      }else {
        name="Individual Month-to-Month Payment";
        description='$35'
        amount=35
      }
      break;
    }

  return(  <StripeCheckout
      name={name}
      description={description}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  );
  }

    export default Checkout;
