import React, { Fragment } from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'
import QuizItem from './QuizItem'

const QuizSInglePage = () => {

    const quizdata = useLoaderData().data

    const { logo, name, questions, total } = quizdata

    return (
        <section style={{ backgroundColor: '#e6e6e6' }}>
            <Container>
                <Row>
                    <Col md={3} >
                        <img src={logo} alt="{name}" className='img-fluid'/>
                    </Col>
                    <Col md={9}>
                        <h2 className='t-primary qt-hero mt-5'>{name}</h2>
                        <h5>Total Questions {total}</h5>
                        <hr/>
                    </Col>
                </Row>
                <div className='py-5'>
                    {
                        questions.map(quiz => <QuizItem key={quiz.id} data={quiz}/>)
                    }
                </div>
            </Container>
        </section>
    )
}

export default QuizSInglePage