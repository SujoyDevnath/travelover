import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="trade-winds fs-2">Travelover</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={NavLink} to="/home" className="fs-5">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="fs-5">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/team" className="fs-5">Team</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="fs-5">Contact us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="/login" className="fs-5">
                                <Button variant="outline-danger">Login</Button>
                            </Nav.Link>
                            {/* <Nav.Link as={NavLink} to="/login" className="fs-5">
                            </Nav.Link> */}
                            <NavDropdown className="my-auto fs-5 text-center" title="Profile" id="basic-nav-dropdown">
                                <h6 className="fw-bold px-3">{user.displayName}</h6>
                                <NavDropdown.Item as={NavLink} to="/addnewservice">Add New Service</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/myorders">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/manageAllOrders">Manage All Orders</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;