import React, { useState } from 'react'
import {
    Row,
    Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizItem = ({ data }) => {

    const [riteCount, setRiteCount] = useState(0)
    const [WrongCount, setWrongCount] = useState(0)

    const { correctAnswer, id, options, question } = data;

    const correctAns = () => toast.success("Your Answer Is Correct", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    

    console.log( riteCount)

    const notify = () => toast.success(correctAnswer, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });




    console.log(riteCount)

    const wrongAns = () => toast.warning("Wrong Answer", {
        position: "bottom-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    // console.log(data)




    const handleCheck = e => {
        let answer = e.target.value;

        if (answer === correctAnswer) {
            console.log('right')
            const rightAns = () => toast.success("Your Answer Is Correct", {
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            console.log('wrong')
            const wrongAns = () => toast.warning("Wrong Answer", {
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        // console.log(answer)

    }

    return (
        <div className='p-4 bg-white rounded-4 shadow  my-4' >
            <article>
                <Row>
                    <Col xs={10}>
                        <div className='questions fs-4 fw-bold'
                            dangerouslySetInnerHTML={{ __html: question }}
                        />
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon className='q-hint' icon={faEye} onClick={notify} />
                    </Col>
                </Row>
            </article>

            <form className="donation-form" action="">
                <Row>
                    {
                        options.map((option, index) =>
                            <Col md={6} key={index}>
                                <div className="q-radio-field">
                                    <input className="op-1" type="radio" name="option" value={option} onChange={e => e.target.value === correctAnswer ? correctAns() : wrongAns()} />
                                    <label htmlFor="quiz">{option}</label>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </form>
            <ToastContainer />

        </div>
    )
}

export default QuizItem