import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_dark.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
      <div className="col-md-4 d-flex align-items-center">
        <Link
          to="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img
            src={logo}
            alt="Logo"
            width="30"
            className="d-inline-block align-center"
          />
        </Link>
        <span className="text-muted">&copy; 2022 Giorgio Savron</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-muted" href="#">
            <i className="cib-twitter"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="#">
            <i className="cib-instagram"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="#">
            <i className="cib-facebook-f"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
