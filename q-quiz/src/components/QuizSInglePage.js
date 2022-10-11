import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'
import QuizItem from './QuizItem'

const QuizSInglePage = () => {

    const quizdata = useLoaderData().data

    const { logo, name, questions } = quizdata

    console.log(quizdata)

    return (
        <Container>
            <div>
                {name}
                {
                    questions.map(quiz => <QuizItem key={quiz.id} />)
                }
            </div>
        </Container>
    )
}

export default QuizSInglePage