import React from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import instagram from '../logos/instagram.svg'
import twitter from '../logos/twitter.svg'
import facebook from '../logos/facebook.svg'
import './css/Footer.css' 

export default function Footer() {
    return (
        
        <footer>
            <Nav className="ml-auto nav-item" >
              <Nav.Item className="">
                <Nav.Link  href="https://www.instagram.com/ktpunc/" target="_blank"><img src={instagram} alt='instagram' /></Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link  href="#home"><img src={twitter} alt='twitter' /></Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link  href="https://www.facebook.com/ktpunc/" target="_blank"><img src={facebook} alt='facebook' /></Nav.Link>
              </Nav.Item>
              
        
            </Nav>
        </footer>
    
    )
}
