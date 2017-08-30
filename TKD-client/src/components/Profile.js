import React from 'react';
import axios from 'axios';
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



  getUserTable() {
    // const user = this.state.user[0];
    const user = [];
    if(user) {
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

  // getUserTable() {
  //   const user = this.state.user[0];
  //   if(user) {
  //     return (
  //     <div>
  //       <h1>{user.name}</h1>
  //       <h4>{user.belt_id}</h4>
  //       <h4>{user.last_test_date}</h4>
  //       <h4></h4>
  //     </div>
  //   )}
  // }
// return isAuthenticated() ? <div>This is the profile Page</div> : <button onClick={login}>Please Login to View Content</button>

  render() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile();
    } 
    const { isAuthenticated } = this.props.auth;
    // const { isAuthenticated, login } = this.props.auth;
    return(
      <div>
        {this.props.auth.userProfile}
      </div>
    );
  }
}
