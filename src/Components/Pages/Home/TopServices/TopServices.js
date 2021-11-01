import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const filteredServices = services.filter(service => service.id <= 6)

    return (
        <div className="container py-5">
            <h1 className="fw-bold m-4">Top Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    filteredServices.map(service => {
                        const { _id, picture, title, shortDescription, price, rating, time, maxPeople } = service;
                        return (
                            <Col key={_id}>
                                <Card className="h-100">
                                    <div>
                                        <Card.Img variant="top" src={picture} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text className="mx-3">{shortDescription}</Card.Text>
                                        <div className="d-flex justify-content-between mx-3 text-muted">
                                            <h5>{time} days</h5>
                                            <h5>max-people: {maxPeople}</h5>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mx-3 pb-3 text-muted">
                                            <h5>Ratings: {rating}</h5>
                                            <h2 className="fw-bold" style={{ color: '#F97150' }}>${price}</h2>
                                        </div>
                                        <Link to={`/service/${_id}`}>
                                            <Button
                                                className="btn-danger px-4 fw-bold"
                                                style={{ backgroundColor: '#F97150' }}
                                            >Book Now
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default TopServices;