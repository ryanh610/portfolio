import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" class="fixed-bottom ">
      <Container>
        <Navbar.Brand href="/">Ryan Howley</Navbar.Brand>
        <Nav className="me-auto" class="fixed-right d-inline-flex">
          <Nav.Link href="https://www.linkedin.com/in/ryanjhowley/">LinkedIn</Nav.Link>
          <Nav.Link href="https://github.com/ryanh610">GitHub</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
