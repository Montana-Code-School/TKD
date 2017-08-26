import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      profile: {}
    }
  }

  componentDidMount(){
    if(this.state.profile.name) {
    axios.get("http://localhost:3001/api/student/" + this.state.profile.name)
    .then(res => {
      console.log(res.data);
    });
  }
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
    console.log(this.state.profile);
    const { isAuthenticated } = this.props.auth;
    // const { isAuthenticated, login } = this.props.auth;
    return(
      <div>
      {console.log(this.state.profile)}
      <h1>{this.state.profile.sub}</h1>
      <h2>{this.state.profile.name}</h2>
      </div>
  );
  }

}
