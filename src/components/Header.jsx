import React from 'react'
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {

  let trainername = localStorage.getItem("name");




function submit(e){
  localStorage.clear()
}

let path = useLocation();
if (path.pathname !== '/') {


  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/dashboard" className='text-dark'>Welcome {trainername}</Navbar.Brand>
          <Nav className="ms-auto">
            <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
            <LinkContainer to="/courses"><Nav.Link>Courses</Nav.Link></LinkContainer>
            <LinkContainer to="/users"><Nav.Link>Users</Nav.Link></LinkContainer>
            <LinkContainer to="/change-password"><Nav.Link>Change-Password</Nav.Link></LinkContainer>
            <LinkContainer onClick={(e)=>{submit(e)}} to="/"><Nav.Link>Logout</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}else{
  <div> </div>
}
}

export default Header;
