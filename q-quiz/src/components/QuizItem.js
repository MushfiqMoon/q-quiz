import React from 'react'
import {
    Row,
    Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizItem = ({ data, index }) => {

    const { correctAnswer, options, question } = data;

    const correctAns = () => toast.success("Your Answer Is Correct 👍", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const wrongAns = () => toast.warning("Wrong Answer 👎", {
        position: "bottom-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const notify = () => toast.info(correctAnswer, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    return (
        <div className='p-4 bg-white rounded-4 shadow  my-4' >
            <article>
                <Row>
                    <Col xs={10}>
                        <span className="badge bg-info mb-2 fs-6">Quiz {index + 1}</span>
                        <div className='questions fs-4 fw-bold'
                            dangerouslySetInnerHTML={{ __html: question }}
                        />
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon className='q-hint' icon={faEye} onClick={notify} />
                    </Col>
                </Row>
            </article>

            <form className="donation-form">
                <Row>
                    {
                        options.map((option, index) =>
                            <Col md={6} key={index}>
                                <div className="q-radio-field">
                                    <input type="radio" name="option" value={option} onChange={e => e.target.value === correctAnswer ? correctAns() : wrongAns()} />
                                    <label htmlFor={option}>{option}</label>
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