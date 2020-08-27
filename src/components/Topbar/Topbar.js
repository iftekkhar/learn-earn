import React from "react";
import "../Topbar/Topbar.css";
import { Col, Navbar, Nav } from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar className="topbar">
      <Col className="top-bar-inner">
        <Navbar.Brand href="#home">Learn & Earn</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#courses" active>
            Courses
          </Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Col>
    </Navbar>
  );
};

export default Topbar;
