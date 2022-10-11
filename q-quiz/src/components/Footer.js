import React from 'react'
import {
    Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='border-top mt-5  bg-dark'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 container text-white">
                <p className="col-md-4 mb-0 text-white">&copy; 2022 Mushfiq</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src="./logo.png" width="50" alt="Q" /> QUIZ
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                    <li className="nav-item"><Link to="/topic" className="nav-link px-2 text-white">Topic</Link></li>
                    <li className="nav-item"><Link to="/statistic" className="nav-link px-2 text-white">Statistic</Link></li>
                    <li className="nav-item"><Link to="/blog" className="nav-link px-2 text-white">Blog</Link></li>
                </ul>
            </footer>
        </Container>
    )
}

export default Footer