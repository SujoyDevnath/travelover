import React, { useEffect, useState } from 'react';
import './HappyClients.css'
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const quote = <FontAwesomeIcon icon={faQuoteLeft} size="2x" />

const HappyClients = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container py-5">
            <h1 className="fw-bold py-4">Our Happy Clients</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    reviews.map(review => {
                        const { id, name, comment, picture, job } = review;
                        return (
                            <Col key={id}>
                                <Card className="p-5 clients-card">
                                    <div className="text-start">
                                        <div className="mb-4">{quote}</div>
                                        <p>{comment}</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={picture} className="rounded-circle clients-img" alt="" />
                                        <div className="text-start">
                                            <h4>{name}</h4>
                                            <p>{job}</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default HappyClients;