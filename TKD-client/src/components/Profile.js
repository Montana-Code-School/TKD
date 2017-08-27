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

  componentDidMount(){
      axios.get("http://localhost:3001/student/" + this.state.profile.name).then(res => {
        const user = res.data.rows;
        console.log(user);
        this.setState({
          user: user
        });

      });
  }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;

    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  getUserTable() {
    const user = this.state.user[0];
    if(user) {
      return (
      <div>
        <h1>{user.name}</h1>
        <h4>{user.belt_id}</h4>
        <h4>{user.last_test_date}</h4>
        <h4>potatoes are freaking awesome</h4>
      </div>
    )}
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
        <ul>
          {this.getUserTable()}
        </ul>
      </div>
    );
  }
}
