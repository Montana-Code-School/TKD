import React from 'react';
import axios from 'axios';
import "../styles/profile.css";
import Footer from './Footer';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user: {}
    }
  }
  componentDidMount() {
    axios.get('https://tkd-api.herokuapp.com/classInfo/' + localStorage.getItem('user_id')).then(res => {
      const userData = res.data.result[0];
      console.log(userData);

      if (userData !== {}) {
        this.setState({
          user: userData
        })
      }

    })
  }
  getUserTable() {
    const { user } = this.state;
    console.log(this.state.user);
      return (
        <div className="container">
          <div className="outerTable">
            <h3>Student Information</h3>
            <table className="studentInfoTable">
                <tbody>
                  <tr>
                    <td>Student Name</td>
                    <td>{user.name}</td>
                  </tr>
                  {
                    // <tr>
                    //   <td>Phone Number</td>
                    //   <td>{user.phone}</td>
                    // </tr>
                  }
                  <tr>
                    <td>Email</td>
                    <td>{localStorage.getItem('email')}</td>
                  </tr>
              </tbody>
            </table>
            <br/>
          </div>
          <div>
            <h3>Belt Information</h3>
            <table className="beltInfoTable">
              <tbody>
                {
                  // <tr>
                  //   <td>AJF Number</td>
                  //   <td>{}</td>
                  // </tr>
                }
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
                  {
                    // <tr>
                    //   <td>Lessons Attended Since Last Test</td>
                    //   <td>{user.lessons_attended_since_test}</td>
                    // </tr>
                  }
                </tbody>
            </table>
            <br/>
          </div>
          <div>
            <h3>Payment Information</h3>
            <table className="paymentInfoTable">
              <tbody>
                <tr>
                  <td>Date of Registration</td>
                  <td>{user.register_date}</td>
                </tr>
                <tr>
                  <td>Registration Expires</td>
                  <td>{user.experation_date}</td>
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
              </tbody>
            </table>
            <br/>
        </div>
        <div>
        </div>
      </div>
    )
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
