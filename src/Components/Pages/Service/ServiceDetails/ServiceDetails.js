import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const ServiceDetails = ({ service }) => {

    // font awesome icons
    const calender = <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
    const star = <FontAwesomeIcon icon={faStar} size="3x" />
    const people = <FontAwesomeIcon icon={faUser} size="3x" />

    const { title, description, date, rating, maxPeople } = service;
    return (
        <div className="bg-white p-5">
            <div className="text-start service-details-head">
                <h2 className="fw-bold pb-2">{title}</h2>
                <div className="row py-2">
                    <div className="col-lg-4">
                        <h5><span className="services-icon pe-2">{calender}</span> {date}</h5>
                    </div>
                    <div className="col-lg-4">
                        <h5><span className="services-icon pe-2">{star}</span> Rating {rating}</h5>
                    </div>
                    <div className="col-lg-4">
                        <h5><span className="services-icon pe-2">{people}</span> Max-people {maxPeople}</h5>
                    </div>
                </div>
            </div>
            <div className="text-start">
                <p className="pt-5 text-muted">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;