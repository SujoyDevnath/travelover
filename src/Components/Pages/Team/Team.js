import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

// font awesome icons
const facebook = <FontAwesomeIcon icon={faFacebookF} size="2x" className="team-text" />
const twitter = <FontAwesomeIcon icon={faTwitter} size="2x" className="team-text" />
const instagram = <FontAwesomeIcon icon={faInstagram} size="2x" className="team-text" />

const Team = () => {
    // fetching team data from public
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-bastion-44157.herokuapp.com/team')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])

    return (
        <div>
            <h1 className="fw-bold mt-5 pt-5">Meet Our Team</h1>
            {team.length === 0 ?
                // loader
                <Spinner animation="grow" variant="primary" />
                :
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        team.map(member => {
                            // destructuring member object
                            const { id, picture, name, designation } = member;
                            return (<Col key={id}>
                                <Card>
                                    <div className="card-image">
                                        <Card.Img variant="top" src={picture} style={{ height: '300px' }} />
                                        {/* img overlay animations */}
                                        <Card.ImgOverlay className="overlay d-flex justify-content-evenly align-items-center">
                                            <div className="social-icons">{facebook}</div>
                                            <div className="social-icons">{twitter}</div>
                                            <div className="social-icons">{instagram}</div>
                                        </Card.ImgOverlay>
                                    </div>
                                    {/* card body */}
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text className="team-text fw-bold">{designation}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })
                    }
                </Row>}
        </div>
    );
};

export default Team;