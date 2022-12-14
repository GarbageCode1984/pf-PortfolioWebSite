import React from "react";
import "./scss/navigation.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" className="navbar">
                <Container fluid>
                    <Nav className="me-auto navWrap">
                        <Nav.Link className="navItem" href="#home">
                            HOME
                        </Nav.Link>
                        <Nav.Link className="navItem" href="#about">
                            ABOUT
                        </Nav.Link>
                        <Nav.Link className="navItem" href="#skills">
                            SKILLS
                        </Nav.Link>
                        <Nav.Link className="navItem" href="#project">
                            PROJECT
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
