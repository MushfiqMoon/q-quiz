import React from 'react'
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='q-header'>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./logo.png" width="50" alt="logo" /> QUIZ
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='menu' to='/'>Topic</NavLink>
                            <NavLink className='menu' to='/Statics'>Statics</NavLink>
                            <NavLink className='menu' to='/blog'>Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header