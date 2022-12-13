import React from "react";
import "./scss/navigation.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" className="navbar">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#skills">SKILLS</Nav.Link>
            <Nav.Link href="#project">PROJECT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
