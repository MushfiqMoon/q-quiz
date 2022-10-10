import React from 'react'
import { useLoaderData } from 'react-router-dom'

const QuizSInglePage = () => {

    const quizdata = useLoaderData().data

    console.log(quizdata)

    return (
        <div>QuizSInglePage</div>
    )
}

export default QuizSInglePage