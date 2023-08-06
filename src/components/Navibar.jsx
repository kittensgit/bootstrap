import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navibar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="ms-2">Bootstrap blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to={'/'}>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={'/users'}>Users</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={'/about'}>About</NavLink>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="me-2">
                            Log In
                        </Button>
                        <Button variant="primary" className="me-2">
                            Sign Up
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navibar;
