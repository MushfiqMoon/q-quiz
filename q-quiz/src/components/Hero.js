import React from 'react'
import Lottie from "lottie-react";
import exams from "./exams.json";
import {
    Container,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'

const Hero = () => {
    return (
        <Container >
            <div className='d-flex align-items-center q-hero'>
                <div className='d-md-w-50 hero-textarea'>
                    <h1 className='t-primary '>Q-Quiz works. <br />
                        CVs don’t.</h1>
                    <h3>Multi-Tasking Multistep Form Job Application. </h3>
                    <FontAwesomeIcon icon={faFaceFrown} />
                    <p>Our screening tests identify the best candidates and make your hiring decisions faster, easier, and bias-free.</p>
                </div>
                <div className='d-md-w-50'><Lottie animationData={exams} loop={true} /></div>
            </div>
        </Container >
    )
}

export default Hero