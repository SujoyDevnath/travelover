import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import './Services.css';


const Services = () => {

    // font awesome icons
    const clock = <FontAwesomeIcon icon={faClock} size="3x" />
    const star = <FontAwesomeIcon icon={faStar} size="3x" />
    const people = <FontAwesomeIcon icon={faUser} size="3x" />

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-bastion-44157.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container py-5">
            <h1 className="fw-bold my-5">Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => {
                        const { _id, picture, title, shortDescription, price, rating, time, maxPeople } = service;
                        return (
                            <Col key={_id}>
                                <Card className="h-100 card-shadow">
                                    <div>
                                        <Card.Img variant="top" style={{ height: '270px' }} src={picture} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text className="mx-3">{shortDescription}</Card.Text>
                                        <div className="d-flex justify-content-between mx-3 text-muted">
                                            <h5><span className="services-icon">{clock}</span> {time} days</h5>
                                            <h5><span className="services-icon">{people}</span> people: {maxPeople}</h5>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mx-3 pb-3 text-muted">
                                            <h5><span className="services-icon">{star}</span> Ratings: {rating}</h5>
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

export default Services;