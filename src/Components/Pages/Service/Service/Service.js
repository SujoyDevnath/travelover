import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceCart from '../ServiceDetails/ServiceCart/ServiceCart';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Service.css'

const Service = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="mt-5">
            <header className="service my-5"
                style={{ backgroundImage: `url("${service.picture}")` }}>
            </header>
            <main className="container mb-5">
                <div className="row g-3">
                    <div className="col-lg-8">
                        <ServiceDetails service={service}></ServiceDetails>
                    </div>
                    <div className="col-lg-4">
                        <ServiceCart service={service}></ServiceCart>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Service;