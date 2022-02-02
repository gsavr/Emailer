import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StripePay from "./StripePay";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import LoginModal from "./LoginModal";
import "../css/header.css";

const Header = ({ auth }) => {
  //console.log(auth);
  return (
    <Navbar
      collapseOnSelect //prop to make expanded navbar collaspe when a Nav.Link is clicked, make sure to add eventKey to each link
      expand="lg"
      style={{ backgroundColor: "#5d99c7" /* "#68abde" */ }}
      variant="dark"
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
        {auth ? (
          <div className="nav-bar-1">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link as={Link} to="/surveys" eventKey="1">
                Dashboard
              </Nav.Link>
              <Navbar.Text eventKey="2">
                {" "}
                <Nav.Item>Credits : {auth.credits}</Nav.Item>{" "}
              </Navbar.Text>
              <Nav.Link eventKey="3">
                <StripePay />
              </Nav.Link>
              <Nav.Link href="/api/logout" className="nav-link">
                {auth.firstName} | <span>Logout</span>
              </Nav.Link>
            </Navbar.Collapse>
          </div>
        ) : (
          <LoginModal />
        )}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
