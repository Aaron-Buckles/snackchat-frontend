import React, { useState } from "react";
import Cookies from "js-cookie";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

function Navigation({ user, onLogout }) {
  const displayUserOrLogin = () => {
    if (user.userId) {
      return (
        <>
          <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          <Nav.Link disabled>Logged in as: {user.name}</Nav.Link>
        </>
      );
    }
    return (
      <Nav.Link as={NavLink} to="/login">
        Login
      </Nav.Link>
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
            Home
          </Nav.Link>
          {user.userId && (
            <Nav.Link as={NavLink} to="/review">
              Review
            </Nav.Link>
          )}
          {user.userId && (
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
