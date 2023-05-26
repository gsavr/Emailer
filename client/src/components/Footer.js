import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_dark.png";
import gs from "../images/gs_logo.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
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
        <span className="text-muted">&copy; 2023 Giorgio Savron</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://www.giorgiosavron.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gs} alt="GS-Logo" eight={25} width={25} />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://www.linkedin.com/in/giorgio-savron/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin-Logo" height={25} width={25} />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://github.com/gsavr/Emailer"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github-Logo" eight={25} width={25} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
