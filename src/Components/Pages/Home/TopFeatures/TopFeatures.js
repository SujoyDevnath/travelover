import React from 'react';
import './TopFeatures.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faPlaneDeparture, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

const calender = <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
const plane = <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
const payment = <FontAwesomeIcon icon={faMoneyBillAlt} size="2x" />

const TopFeatures = () => {
    return (
        <div className="container py-5">
            <h1 className="fw-bold my-3">Top Features</h1>
            <p className="w-50 mx-auto mt-4 mb-5">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            <div className="row gy-4">
                {/* column - 1 */}
                <div className="col-lg-4">
                    <div className="card py-3 features-card card-style">
                        <div className="card-body">
                            <div className="feature-icon my-3">{calender}</div>
                            <h5>Reservation</h5>
                            <p className="m-0">As compared with earlier times where a reservation personnel has to update its inventory every time.</p>
                            <button className="btn features-btn rounded-pill px-4 py-2 my-3 fw-bold">Read More</button>
                        </div>
                    </div>
                </div>

                {/* column - 2 */}
                <div className="col-lg-4">
                    <div className="card py-3 features-card card-style">
                        <div className="card-body">
                            <div className="feature-icon my-3">{plane}</div>
                            <h5>Tour Pack</h5>
                            <p className="m-0">You can dream, create, design, and build the most wonder ful place in the world. But it requires people.</p>
                            <button className="btn features-btn rounded-pill px-4 py-2 my-3 fw-bold">Read More</button>
                        </div>
                    </div>
                </div>

                {/* column - 3 */}
                <div className="col-lg-4">
                    <div className="card py-3 features-card card-style">
                        <div className="card-body">
                            <div className="feature-icon my-3">{payment}</div>
                            <h5>Payment</h5>
                            <p className="m-0">As compared with earlier times where a reservation personnel has to update its inventory every time.</p>
                            <button className="btn features-btn rounded-pill px-4 py-2 my-3 fw-bold">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFeatures;