import React from 'react';

const ServiceDetails = ({ service }) => {
    const { title, description } = service;
    return (
        <div className="bg-white p-5">
            <div className="text-start service-details-head">
                <h2 className="fw-bold">{title}</h2>
            </div>
            <div className="text-start">
                <p className="pt-5 text-muted">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;