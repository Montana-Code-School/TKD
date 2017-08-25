import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {

  componentDidMount(){
    // axios.get("http://localhost:3001/student").then(res => {
    //   console.log(res.data);
    // })
  }

  componentWillMount() {
  this.setState({ profile: {} });
  const { userProfile, getProfile } = this.props.auth;
  if (!userProfile) {
    getProfile((err, profile) => {
      this.setState({ profile });
    });
  } else {
    this.setState({ profile: userProfile });
  }
}

// return isAuthenticated() ? <div>This is the profile Page</div> : <button onClick={login}>Please Login to View Content</button>

  render() {
    const {profile} = this.state;
    // const { isAuthenticated, login } = this.props.auth;
    console.log(profile);
    return(

    <div>
    <h1>Whatever</h1>
    </div>
  );
  }
}
