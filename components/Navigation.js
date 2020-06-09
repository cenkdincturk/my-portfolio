import React from "react";
import {Nav, Navbar, Button} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

/* Next Imports */

import Link from "next/link";

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="navbar ml-auto">
        <Navbar.Brand href="anasayfa">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navlink" href="/">
              Ana sayfa
            </Nav.Link>
            <Nav.Link className="navlink" href="projeler">
              Projeler
            </Nav.Link>
            <Nav.Link href="iletisim">İletişim</Nav.Link>
            <Nav.Link className="navlink" href="hakkimda">
              Hakkımda
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style global jsx>{`
        .navbar {
          color: FFFFFF;
        }
      `}</style>
    </div>
  );
}

export default Navigation;
