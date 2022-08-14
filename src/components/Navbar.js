import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{position: "fixed", top: "0", width: "100%"}}>
      <Container>
        <Navbar.Brand href="/">Ryan Howley</Navbar.Brand>
        <Nav className="me-auto" class="fixed-right d-inline-flex">
          <Nav.Link href="/projects" style={{ color: "white" }}>Projects</Nav.Link>
          <Nav.Link href="https://docs.google.com/document/d/1VwLAtRHb5COHVgiV03ciCSz9kMeLqgW6W3p48cUzotQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Resume</Nav.Link>
          <Nav.Link href="/contact" style={{ color: "white" }}>Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
