import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sitebar = () => {
    return (
        <Navbar color="light" dark expand="md">
            <NavbarBrand>
                <Link to="/">Rootz Beauty Supply</Link>
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/product" className="site-link">Products</Link>
                </NavItem>
                &emsp;
                <NavItem>
                    <Link to="/cart" className="site-link">My Cart</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Sitebar;