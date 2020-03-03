import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../customHooks/use-auth";

function Navigation({ user, onLogout }) {
  const auth = useAuth();

  const displayUserOrLogin = () => {
    console.log(auth.user);

    if (auth.user) {
      return (
        <>
          <Nav.Link as={NavLink} onClick={auth.signout} to="/login">
            Logout
          </Nav.Link>
          <Nav.Link disabled>Logged in as: {auth.user.name}</Nav.Link>
        </>
      );
    }
    return (
      <>
        <Nav.Link as={NavLink} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="/signup">
          Signup
        </Nav.Link>
      </>
    );
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
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
            Discover
          </Nav.Link>
          {auth.user && (
            <Nav.Link as={NavLink} to="/review">
              Review
            </Nav.Link>
          )}
          {auth.user && (
            <Nav.Link as={NavLink} to="/business">
              Business
            </Nav.Link>
          )}
          {displayUserOrLogin()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
