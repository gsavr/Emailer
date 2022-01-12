import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StripePay from "./StripePay";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        return (
          //   <ul> dont use , use array instead
          [
            <li key="1">
              <Link to="/surveys">Dashboard</Link>
            </li>,
            <li key="2" style={{ margin: "0 3px" }}>
              Credits : {this.props.auth.credits}
            </li>,
            <li key="3">
              <StripePay />
            </li>,
            <li key="4">
              <a href="/api/logout">
                {this.props.auth.firstName} | <span>Logout</span>
              </a>
            </li>,
          ]
          //   </ul>
        ); /* in case it's not waiting or logged out, this will be the default logged in case -  */
    }
  }

  render() {
    //console.log(this.props);
    return (
      <nav style={{ backgroundColor: "#68abde" }}>
        <div className="nav-wrapper">
          <Link
            to={/* this.props.auth ? "/surveys" :  */ "/"}
            className="left brand-logo"
          >
            EmailMan
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
