import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    a,
    .navbar-brand,
    .navbar-nav .nav-link {
        color: #adb1b8;
        text-decoration: none;
        transition: all 0.3s ease-in;
        &:hover {
            color: white;
        }
    }
`;

const Navibar = () => {
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Bootstrap blog</Navbar.Brand>
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
                                <Button variant="primary">Sign Up</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
        </>
    );
};

export default Navibar;
