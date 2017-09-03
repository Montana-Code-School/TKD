import React from 'react';
// import axios from 'axios';
import "../styles/profile.css";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      profile: {},
      user: [],
      currentStudent:{}
    }
  }

  componentWillMount() {

}

  getUserTable() {
    // const user = this.state.user[0];
    const user = {
      name:"person",
      phone: "2077272727272",
      email: "cplatkuh@gmail.com",
      ajf_num: 1,
      belt_id: 2,
      belt_size: "big",
      start_date: '11-22-1111',
      last_test_date: "123-1233-1233",
      register_date: "11-22-1111",
      expiration_date: "123-123-123",
      amount: '65.00',
      month_to_month: true,
      family_or_single: 'family'
    };
    if(true) {
      return (
        <div className="container">
         <div className="outerTable">
          <table>
          <h3>Student Information</h3>
            <tr>
              <td>Student Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
          </table>
          <br/>
        </div>
        <div>
          <table>
              <h3>Belt Information</h3>
            <tr>
              <td>AJF Number</td>
              <td>{user.ajf_num}</td>
            </tr>
            <tr>
              <td>Belt</td>
              <td>{user.belt_id}</td>
            </tr>
            <tr>
              <td>Belt Size</td>
              <td>{user.belt_size}</td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>{user.start_date}</td>
            </tr>
            <tr>
              <td>Last Test Date</td>
              <td>{user.last_test_date}</td>
            </tr>
          </table>
          <br/>
        </div>
        <div>
          <table>
              <h3>Payment Information</h3>
            <tr>
              <td>Date of Registration</td>
              <td>{user.register_date}</td>
            </tr>
            <tr>
              <td>Registration Expires</td>
              <td>{user.expiration_date}</td>
            </tr>
            <tr>
              <td>Membership</td>
              <td>{user.family_or_single}</td>
            </tr>
            <tr>
              <td>Payment Amount</td>
              <td>{user.amount}</td>
            </tr>
            <tr>
              <td>Payment Schedule</td>
              <td>{user.month_to_month}</td>
            </tr>
          </table>
        </div>
        <div>
          <table>
              <h3>Attendance</h3>


          </table>
        </div>
      </div>
    )}
  }

  render() {
    const { userProfile, getProfile, isAuthenticated } = this.props.auth;
    if (!userProfile && isAuthenticated()) {
      getProfile();
      return this.getUserTable();
    }
    else {
      return <p>Please sign in</p>
    }
  }
}
