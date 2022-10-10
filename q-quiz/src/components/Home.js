import React from 'react'
import Hero from './Hero'
import {
    Container,
    Row,
} from 'react-bootstrap';
import QuizCard from './QuizCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    useLoaderData()

    return (
        <Container >
            <Hero />
            <h1>hello world</h1>
            <Row>

                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </Row>


        </Container>
    )
}

export default Home