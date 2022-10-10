import React from 'react'
import {
    Container,
    Row,
} from 'react-bootstrap';
import QuizCard from './QuizCard';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {

    const quizs = useLoaderData().data

    return (
        <Container >
            <div className='text-center my-5'>
                <h2 className='t-primary qt-hero'>Start Quiz</h2>
                <p>Explore Most Popular Question series from the below Topics.</p>
            </div>
            <Row className='py-5'>
                {
                    quizs.map(card => <QuizCard key={card.id} data={card} />)
                }

            </Row>
        </Container>
    )
}

export default Topic