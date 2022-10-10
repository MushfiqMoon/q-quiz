import React from 'react'
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='q-header'>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to='/' className="text-white text-decoration-none">
                            <img src="./logo.png" width="50" alt="logo" /> QUIZ
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='menu' to='/topic'>Topic</NavLink>
                            <NavLink className='menu' to='/statistic'>Statistic</NavLink>
                            <NavLink className='menu' to='/blog'>Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header