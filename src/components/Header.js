import React from 'react'
 import { Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
    return (
        <Navbar className="navigation" bg="transparent" expand="lg">
          <Navbar.Brand className="nav-logo" as={Link} to="/">Kappa Theta Pi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-item" >
              <Nav.Item className="M">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  as={Link} to="/members">Members</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  as={Link} to="/rush">Rush</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link   as={Link} to="/contact">Contact</Nav.Link>
              </Nav.Item>
              
        
            </Nav>
          
          </Navbar.Collapse>
      </Navbar>


    )
}
