import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Trainer Name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link to="/courses">Courses</Nav.Link>
            <Nav.Link to="/users">Users</Nav.Link>
            <Nav.Link to="/changepassword">Change password</Nav.Link>
            <Nav.Link to="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
