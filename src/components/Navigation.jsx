import React from "react";
import { Link, NavLink } from "react-router-dom";

// Interface
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { useAuth } from "../customHooks/use-auth";

export default function Navigation() {
  const auth = useAuth();

  const displayUserOrLogin = () => {
    if (auth.user) {
      return (
        <>
          <Nav.Link disabled>
            <FontAwesomeIcon icon="user" /> {auth.user.name}
          </Nav.Link>
          <Nav.Link as={NavLink} onClick={auth.signout} to="/login">
            <FontAwesomeIcon icon="sign-out-alt" /> Logout
          </Nav.Link>
        </>
      );
    }
    return (
      <>
        <Nav.Link as={NavLink} to="/login">
          <FontAwesomeIcon icon="sign-in-alt" /> Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="/signup">
          <FontAwesomeIcon icon="user-plus" /> Signup
        </Nav.Link>
      </>
    );
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg rounded m-3"
    >
      <Navbar.Brand as={Link} to="/" className="brand-text">
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
        <Nav>
          <Nav.Link as={NavLink} exact to="/">
            <FontAwesomeIcon icon="search" /> Discover
          </Nav.Link>
          {auth.user && (
            <Nav.Link as={NavLink} to="/review">
              <FontAwesomeIcon icon="clipboard" /> Review
            </Nav.Link>
          )}
          {auth.user && (
            <Nav.Link as={NavLink} to="/business">
              <FontAwesomeIcon icon="building" /> Business
            </Nav.Link>
          )}
          {displayUserOrLogin()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
