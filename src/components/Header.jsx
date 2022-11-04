import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Login from "./Login";

const Header = () => {

  let trainername = localStorage.getItem("name");
  let navigate = useNavigate();
  function logout(e) {
    e.preventDefault();
    var r = window.confirm("Are you sure you want to Logout!");
    if (r) {
      localStorage.clear();
      window.location.href = "/";
    }
  }
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/dashboard" className="text-dark">
            Welcome {trainername}
          </Navbar.Brand>
          <Nav className="ms-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/courses">
              <Nav.Link>Courses</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/change-password">
              <Nav.Link>Change-Password</Nav.Link>
            </LinkContainer>
            <Nav.Link
              onClick={(e) => {
                logout(e);
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
