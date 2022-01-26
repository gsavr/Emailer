import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StripePay from "./StripePay";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.png";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <Nav.Link href="/auth/google">
            <span>Login with Google</span>
          </Nav.Link>
        );

      default:
        return (
          <div className="nav-bar-1">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/surveys">
                  Dashboard
                </Nav.Link>
                <Navbar.Text>
                  {" "}
                  <Nav.Item>Credits : {this.props.auth.credits}</Nav.Item>{" "}
                </Navbar.Text>
                <Nav.Link>
                  <StripePay />
                </Nav.Link>
                <Nav.Link href="/api/logout" className="nav-link">
                  {this.props.auth.firstName} | <span>Logout</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        ); /* in case it's not waiting or logged out, this will be the default logged in case -  */
    }
  }

  render() {
    //console.log(this.props);
    return (
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#5d99c7" /* "#68abde" */ }}
        variant="dark"
        /* className="mr-auto" */
      >
        <Container>
          <Navbar.Brand id="navbar-brand" as={Link} to="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              className="d-inline-block align-center"
            />{" "}
            EmailMan{" "}
          </Navbar.Brand>
          {this.props.auth ? (
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          ) : (
            ""
          )}
          {this.renderContent()}
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
