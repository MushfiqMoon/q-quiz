import React from 'react'
import Hero from './Hero'
import {
    Container,
} from 'react-bootstrap';
import Topic from './Topic';

const Home = () => {

    return (
        <>
            <Container >
                <Hero />
            </Container>
            <Topic />
        </>
    )
}

export default Home