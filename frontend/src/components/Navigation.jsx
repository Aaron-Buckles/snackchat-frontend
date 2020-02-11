import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand className="brand-text">
        <img
          src={process.env.PUBLIC_URL + "/logo.svg"}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt=""
        />
        Snackchat
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/review">
            Review
          </Nav.Link>
          <Nav.Link as={NavLink} to="/business">
            Business
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signup">
            Signup
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
