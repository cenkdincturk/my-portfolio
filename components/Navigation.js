import React from "react";
import {Nav, Navbar, Button} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

/* Next Imports */

import Link from "next/link";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link className="navlink" href="#home">
              Projeler
            </Nav.Link>
            <Nav.Link href="#link">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style global jsx>{`
        .navbar {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export default Navigation;
