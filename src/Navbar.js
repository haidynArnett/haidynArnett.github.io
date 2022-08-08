import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>Haidyn Arnett</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='#'>home</Nav.Link>
                    <Nav.Link href='#'>hi</Nav.Link>
                    <Nav.Link href='#'> Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;