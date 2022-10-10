import React from 'react'
import {
    Card,
    Row,
    Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuestionCard = ({ data }) => {

    const { id, logo, name, total } = data

    return (
        <Col md={6}>
            <Card className="mb-4 shadow" >
                <Row>
                    <Col sm={5} >
                        <div className="p-2 bg-dark">
                            <img src={logo} className="img-fluid rounded-start" alt={name} />
                        </div>

                    </Col>
                    <Col sm={7}>
                        <div className="card-body mt-3">
                            <h5 className="card-title t-primary fs-3">{name}</h5>
                            <p className="card-text">Total Quiz : {total}</p>
                            <Link to={`/quiz/${id}`} className='btn btn-outline-info mt-3 fs-5'>Start </Link>
                        </div>
                    </Col>
                </Row>
            </Card >
        </Col>
    )
}

export default QuestionCard