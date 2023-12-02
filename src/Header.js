import React from "react";
import { Container, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/* <h1>NOMAD</h1> */}
        <Container>
          <Navbar className="justify-content-end" fixed="top" collapseOnSelect expand="lg" bg="light" variant="dark">
            <Navbar.Brand></Navbar.Brand>
            <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
            {this.props.auth0.isAuthenticated && <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>}
            {this.props.auth0.isAuthenticated && <NavItem><Link to="/explore" className="nav-link">Create Trip</Link></NavItem>}
            {this.props.auth0.isAuthenticated && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
            <Link to="/login" className='nav-link'>{this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}</Link>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default withAuth0(Header);