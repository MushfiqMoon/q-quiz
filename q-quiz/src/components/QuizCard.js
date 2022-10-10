import React from 'react'
import {
    Card,
    Row,
    Col,
} from 'react-bootstrap';

const QuestionCard = () => {
    return (
        <Col md={6}>
        <Card  className="mb-3" >
            <Row>
                <Col sm={4}>
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </Col>
                <Col sm={8}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Col>
            </Row>
        </Card >
        </Col>
    )
}

export default QuestionCard