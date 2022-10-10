import React from 'react'
import Hero from './Hero'
import {
    Container,
    Row,
} from 'react-bootstrap';
import QuizCard from './QuizCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const quizs = useLoaderData().data

    // console.log(quizs)

    return (
        <Container >
            <Hero />

            <div className='text-center my-5'>
                <h2 className='t-primary qt-hero' style={{ fontsize: '70px', fontWeight: 'bold' }}>Start Quiz</h2>
                <p>Explore Most Popular Question series from the below Topics.</p>
            </div>

            <Row>
                {
                    quizs.map(card => <QuizCard key={card.id} data={card} />)
                }

            </Row>


        </Container>
    )
}

export default Home