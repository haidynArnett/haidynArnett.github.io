import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import resume from './Resume-HaidynArnett-2022.pdf';
import Headshot from './Headshot.js'
import reactlogo from './icons/logo.svg';
import htmllogo from './icons/HTML5_Logo.svg';
import csslogo from './icons/icons8-css3.svg';
import jslogo from './icons/jslogo.png';

function MyNavbar() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>Haidyn Arnett</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='#'> Projects</Nav.Link>
                    <Nav.Link href={resume}>Resume</Nav.Link>
                    <Nav.Link href='mailto:harnett7@gatech.edu'>Email</Nav.Link>
                    <Nav.Link href='https://www.linkedin.com/in/haidynArnett/'>LinkedIn</Nav.Link>
                </Nav>
                <Nav>
                    <Navbar.Brand>
                        <img
                            src={reactlogo}
                            width="45"
                            height="45"
                            className="d-inline-block align-top"
                        />
                        <img
                            src={htmllogo}
                            width="37"
                            height="37"
                            className="d-inline-block align-top"
                        />
                        <img
                            src={csslogo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <img
                            src={jslogo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;