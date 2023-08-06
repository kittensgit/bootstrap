import React, { useState } from 'react';
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap';
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
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

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
                                <Button
                                    variant="primary"
                                    className="me-2"
                                    onClick={handleShow}
                                >
                                    Log In
                                </Button>
                                <Button variant="primary" onClick={handleShow}>
                                    Sign Up
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group
                            controlId="formBasicPassword"
                            className="mt-2"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="formBasicCheckbox"
                            className="mb-2 mt-1"
                        >
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Form.Group className="float-end  me-3">
                            <Button
                                onClick={handleClose}
                                className="me-1"
                                variant="secondary"
                            >
                                Cancel
                            </Button>
                            <Button variant="primary">Save Change</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Navibar;
