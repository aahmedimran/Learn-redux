import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

const SideBar = () => {
  return (
    <>
  <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/Input">
        <Navbar.Brand>React-redux</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Deportment">
            <Nav.Link >Deportment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Todo">
            <Nav.Link>Todo</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
};

export default SideBar;
