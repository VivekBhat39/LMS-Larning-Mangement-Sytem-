import React from 'react'
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {


  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/dashboard">Trainer Name</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
            <LinkContainer to="/courses"><Nav.Link>Courses</Nav.Link></LinkContainer>
            <LinkContainer to="/users"><Nav.Link>Users</Nav.Link></LinkContainer>
            <LinkContainer to="/changepassword"><Nav.Link>Change-Password</Nav.Link></LinkContainer>
            <LinkContainer to="/logout"><Nav.Link>Logout</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
