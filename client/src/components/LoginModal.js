import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/loginModal.css";

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Modal.Body>
          <a href="/auth/google" className="login-link">
            <i class="cib-google"></i> <span> </span>Login with Google
          </a>
        </Modal.Body>
        <Modal.Body>
          <a href="#" className="login-link">
            <i class="cib-facebook-f"></i>
            <span> </span>Login with Facebook
          </a>
        </Modal.Body>
        <Modal.Body>
          <a href="#" className="login-link">
            <i class="cib-twitter"></i>
            <span> </span>Login with Twitter
          </a>
        </Modal.Body>
        <Modal.Body>
          <a href="#" className="login-link">
            <i class="cib-apple"></i>
            <span> </span>Login with Apple
          </a>
        </Modal.Body>
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
