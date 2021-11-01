import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'

const GetInTouch = () => {
    // font awesome icons
    const comment = <FontAwesomeIcon icon={faComment} size="3x" />
    const envelope = <FontAwesomeIcon icon={faEnvelope} size="3x" />
    const phone = <FontAwesomeIcon icon={faPhone} size="3x" />
    const home = <FontAwesomeIcon icon={faHome} size="3x" />
    return (
        <div>
            {/* Get in touch section */}
            <section className="container">
                <h1 className="py-5 fw-bold">Get In Touch</h1>
                <div className="row gy-5">
                    {/* column - 1 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-style">
                            <div className="card-body">
                                <h3 className="fw-bold">Chat</h3>
                                <div className="icon my-3">{comment}</div>
                                <h5>Chat Specialist Hours:</h5>
                                <p className="m-0">7am-11pm CT</p>
                                <p className="m-0">7 days a week</p>
                            </div>
                        </div>
                    </div>
                    {/* column - 2 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-style">
                            <div className="card-body">
                                <h3 className="fw-bold">Email</h3>
                                <div className="icon my-3">{envelope}</div>
                                <h5>Send us an email</h5>
                                <p className="m-0">info@travelover.com</p>
                            </div>
                        </div>
                    </div>
                    {/* column - 3 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-style">
                            <div className="card-body">
                                <h3 className="fw-bold">Phone</h3>
                                <div className="icon my-3">{phone}</div>
                                <h5>+11 532 766 4545</h5>
                                <p className="m-0">7am-11pm CT</p>
                                <p className="m-0">7 days a week</p>
                            </div>
                        </div>
                    </div>
                    {/* column - 4 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-style">
                            <div className="card-body">
                                <h3 className="fw-bold">Address</h3>
                                <div className="icon my-3">{home}</div>
                                <h5>Travelover House</h5>
                                <p className="m-0">Gopalganj, Dhaka,</p>
                                <p className="m-0">Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInTouch;