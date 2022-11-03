import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {


  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/dashboard">Trainer Name</Navbar.Brand>
          <Nav className="me-auto">
            <Link><Nav.Link to="/dashboard">Dashboard</Nav.Link></Link>
            <Link><Nav.Link to="/courses">Courses</Nav.Link></Link>
            <Link><Nav.Link to="/users">Users</Nav.Link></Link>
            <Link><Nav.Link to="/changepassword">Change password</Nav.Link></Link>
            <Link><Nav.Link to="/logout">Logout</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
