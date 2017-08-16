import React from 'react';

export default class Profile extends React.Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;

    return isAuthenticated() ? <div>This is the profile Page</div> : <button onClick={login}>Please Login to View Content</button>
  }
}
