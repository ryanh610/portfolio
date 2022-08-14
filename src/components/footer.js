import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-bottom" style={{
      position: 'fixed',
      bottom: 0
    }}>
      <Container>
        <Navbar.Brand href="/">Full-Stack Web Developer</Navbar.Brand>
        <Nav className="me-auto" class="fixed-right d-inline-flex">
          <Nav.Link href="https://www.linkedin.com/in/ryanjhowley/" style={{ color: "white" }}>LinkedIn</Nav.Link>
          <Nav.Link href="https://github.com/ryanh610" style={{ color: "white" }}>GitHub</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
