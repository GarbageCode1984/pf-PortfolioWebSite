import React from "react";
import "./scss/navigation.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className="navbar"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" fluid>
            <Nav className="me-auto  navWrap" lg="8">
              <Link to="home">
                <Nav.Link className="navItem" href="#home">
                  HOME
                </Nav.Link>
              </Link>
              <Link to="about">
                <Nav.Link className="navItem" href="#about">
                  ABOUT
                </Nav.Link>
              </Link>
              <Link to="skilles">
                <Nav.Link className="navItem" href="#skills">
                  SKILLS
                </Nav.Link>
              </Link>
              <Link to="project">
                <Nav.Link className="navItem" href="#project">
                  PROJECT
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </>
  );
}

export default Navigation;

/*  <Navbar bg="light" variant="light" sticky="top" className="navbar">
        <Container fluid>
          <Nav className="me-auto navWrap" lg="8">
            <Link to="home">
              <Nav.Link className="navItem" href="#home">
                HOME
              </Nav.Link>
            </Link>
            <Link to="about">
              <Nav.Link className="navItem" href="#about">
                ABOUT
              </Nav.Link>
            </Link>
            <Link to="skilles">
              <Nav.Link className="navItem" href="#skills">
                SKILLS
              </Nav.Link>
            </Link>
            <Link to="project">
              <Nav.Link className="navItem" href="#project">
                PROJECT
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar> */
