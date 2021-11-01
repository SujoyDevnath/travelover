import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        // not found component
        <div className="not-found container m-5 pt-5 mx-auto">
            <img src="https://i.ibb.co/VNKFzVH/not-found-1.png" className="img-fluid" alt="" />
            <br />
            <Link to="/"><button className="btn btn-primary my-5">Back To Home</button></Link>
        </div>
    );
};

export default NotFound;