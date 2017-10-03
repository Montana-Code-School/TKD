import React, {Component} from 'react';
import { Navbar, Button } from 'react-bootstrap';

export default class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}


// return (
  // <div>
  //   <Navbar fluid>
  //     <Navbar.Header>
  //       <Navbar.Brand>
  //         <a href="#">Auth0 - React</a>
  //       </Navbar.Brand>
  //       <Button
  //         bsStyle="primary"
  //         className="btn-margin"
  //         onClick={this.goTo.bind(this, 'home')}
  //       >
  //         Home
  //       </Button>
  //       {
  //         !isAuthenticated() && (
  //             <Button
  //               bsStyle="primary"
  //               className="btn-margin"
  //               onClick={this.login.bind(this)}
  //             >
  //               Log In
  //             </Button>
  //           )
  //       }
  //       {
  //         isAuthenticated() && (
  //             <Button
  //               bsStyle="primary"
  //               className="btn-margin"
  //               onClick={this.logout.bind(this)}
  //             >
  //               Log Out
  //             </Button>
  //           )
  //       }
  //     </Navbar.Header>
  //   </Navbar>
  // </div>
