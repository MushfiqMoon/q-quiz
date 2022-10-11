import React from 'react'
import {
    Row,
    Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizItem = ({ data }) => {

    const { correctAnswer, id, options, question } = data;

    const notify = () => toast.success(correctAnswer, {
        position: "bottom-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    console.log(data)
    return (
        <div className='p-4 bg-white rounded-4 shadow  my-4' >
            <article>
                <Row>
                    <Col xs={10}>
                        <div className='questions'
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
                                <div className="radio-field">
                                    <input className="op-1" type="radio" name="donate-cause" />
                                    <label htmlFor="donate-cause">{option}</label>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </form>
            <ToastContainer/>

        </div>
    )
}

export default QuizItem