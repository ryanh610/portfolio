import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Ryan Howley</Navbar.Brand>
    <Nav className="me-auto" class="fixed-right d-inline-flex">
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/contact">Contact Me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    );
}

export default Navigation