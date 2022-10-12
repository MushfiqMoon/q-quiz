import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'
import QuizItem from './QuizItem'

const QuizSInglePage = () => {

    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)

    const quizdata = useLoaderData().data

    const { logo, name, questions, total } = quizdata

    const handleScore = (e, correct) => {

        let answer = e.target.value

        if (answer === correct) {
            setCorrect(prev => prev + 1)
        } else {
            setWrong(prev => prev + 1)
        }
    }

    return (
        <section style={{ backgroundColor: '#e6e6e6' }}>
            <Container>
                <Row>
                    <Col md={2} >
                        <img src={logo} alt="{name}" className='img-fluid' />
                    </Col>
                    <Col md={7}>
                        <h2 className='t-primary qt-hero mt-4'>{name} Quiz</h2>
                        <h5>Total Questions {total}</h5>
                        <hr />
                    </Col>
                    <Col md={3}>
                        {
                            correct || wrong ?
                                <>
                                    <div className="card mt-5 rounded-4 shadow">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item t-primary fw-bold">Score Card</li>
                                            <li className="list-group-item">Correct answer:  {correct}</li>
                                            <li className="list-group-item">Incorrect answer:  {wrong}</li>
                                        </ul>
                                    </div>
                                </>
                                : ''
                        }

                    </Col>
                </Row>
                <div className='py-5'>
                    {
                        questions.map((quiz, i) =>
                            <QuizItem
                                key={quiz.id}
                                index={i}
                                data={quiz}
                                handleScore={handleScore}
                            />)
                    }
                </div>
            </Container>
        </section>
    )
}

export default QuizSInglePage