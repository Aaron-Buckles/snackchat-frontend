import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BusinessPage from "./Business/BusinessPage";
import DiscoverPage from "./Discover/DiscoverPage";
import SubmitPage from "./Submit/SubmitPage";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>Snackchat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/submit">
              Submit
            </Nav.Link>
            <Nav.Link as={Link} to="/business">
              Business
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
