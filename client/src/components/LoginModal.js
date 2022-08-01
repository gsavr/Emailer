import React, { useState } from "react";
import _ from "lodash";
import { Modal, Button } from "react-bootstrap";
import "../css/loginModal.css";

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginServices = [
    { link: "/auth/google", icon: "cib-google", text: " Google" },
    { link: "#", icon: "cib-apple", text: " Apple ID (coming soon)" },
    { link: "#", icon: "cib-facebook-f", text: " Facebook (coming soon)" },
    { link: "#", icon: "cib-twitter", text: " Twitter (coming soon)" },
  ];

  const renderModalLinks = () => {
    return _.map(loginServices, ({ link, icon, text }) => {
      return (
        <Modal.Body key={text}>
          <a href={link} className="login-link" onClick={handleClose}>
            <i className={icon}></i> <span> </span>Login with {text}
          </a>
        </Modal.Body>
      );
    });
  };

  return (
    <>
      <Button
        className="login-button"
        variant="outline-light"
        onClick={handleShow}
      >
        Sign Up | Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up | Login </Modal.Title>
        </Modal.Header>
        {renderModalLinks()}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
