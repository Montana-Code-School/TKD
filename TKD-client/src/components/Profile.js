import React from 'react';
import axios from 'axios';

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
