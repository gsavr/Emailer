import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StripePay from "./StripePay";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.png";

class Header extends Component {
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
            <div className="nav-bar-1">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="me-auto"> */}
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
                {/* </Nav> */}
              </Navbar.Collapse>
            </div>
          ) : (
            <Nav.Link href="/auth/google">
              <span>Login with Google</span>
            </Nav.Link>
          )}
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
